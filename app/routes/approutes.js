"use strict";
module.exports = function (app) {
  var todoList = require("../controller/appController");

  // todoList Routes permet d'afficher la liste de tâches
  app.route("/tasks").get(todoList.list_all_tasks).post(todoList.create_a_task);

  // Pour afficher une tâche ou mettre à jour une tâche ou suprimer une tache
  app
    .route("/tasks/:taskId")
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};
