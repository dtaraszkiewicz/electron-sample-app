var tasks = [];

$(() => {
    populateTaskList();
    updateTable();
  });

function populateTaskList() {
    tasks.push({id: 1, name: "Make electron app"});
    tasks.push({id: 2, name: "???"});
    tasks.push({id: 3, name: "Profit"});
}

function updateTable() {
    var table = $("#taskTable").find('tbody');
    tasks.forEach(task => {
        table.append('<tr><th scope="row">'+ task.id + '</th><td>' + task.name + '</td><td><button class="btn btn-danger" onclick="deleteTask('+ task.id +')">Delete</button></td></tr>');
    });
}

function addTask(name) {
    tasks.push({id: tasks.length + 1, name: name});
    var table = $("#taskTable").find('tbody');
    table.append('<tr><th scope="row">'+ tasks.length + '</th><td>' + name + '</td><td><button class="btn btn-danger" onclick="deleteTask('+ tasks.length +')">Delete</button></td></tr>');
}

function deleteTask(id){
    var table = $("#taskTable").find('tbody')[0];
    var taskToDelete = table.childNodes[id];
    table.removeChild(taskToDelete);
}