"user strict";
var sql = require("./db.js"); // on inclut la connexion avec la base données mysql

//Task object constructor
var Task = function (task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

// Insertion de tâches dans la base données
Task.createTask = function (newTask, result) {
  sql.query("INSERT INTO tasks set ?", newTask, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

//Recherche une tâche par son id dans la base données
Task.getTaskById = function (taskId, result) {
  sql.query("Select task from tasks where id = ? ", taskId, function (
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

// Récuperer toutes les tâches dans la base données
Task.getAllTask = function (result) {
  sql.query("Select * from tasks", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("tasks : ", res);

      result(null, res);
    }
  });
};

// mettre à jour la tâche dont l'id est passé en paramettre dans la base données
Task.updateById = function (id, task, result) {
  sql.query(
    "UPDATE tasks SET task = ? WHERE id = ?",
    [task.task, id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

//Supprimer la tâche dont l'id est passé en paramettre dans la base données
Task.remove = function (id, result) {
  sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Task; //exporter l'objet tâche dans les autres modules
