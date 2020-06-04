(() => {
  let action = new PlugIn.Action(function(selection) {
    selectedProjects(selection).map((project) => { project.flagged = !project.flagged; });
  });

  action.validate = function(selection, sender){
    return selectedProjects(selection).length > 0;
  };

  return action;
})();

function selectedProjects(selection) {
  let projects = new Set();

  selection.projects.forEach((project) => {
    projects.add(project);
  });
  selection.tasks.forEach((task) => {
    if(task.containingProject != null)
      projects.add(task.containingProject);
  });

  return Array.from(projects);
}
