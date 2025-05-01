let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showToast(message) {
  const toastBox = document.getElementById("toast");
  toastBox.innerHTML = `
    <div class="toast show" role="alert">
      <div class="toast-body">${message}</div>
    </div>`;
  setTimeout(() => toastBox.innerHTML = '', 2000);
}

function renderTasks(filter = "all") {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    if (filter === "done" && !task.done) return;
    if (filter === "notDone" && task.done) return;

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.done) span.classList.add("done");

    span.onclick = () => {
      task.done = !task.done;
      saveTasks();
      renderTasks(filter);
    };

    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.className = "btn btn-sm btn-danger";
    btn.onclick = () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks(filter);
      showToast("Görev silindi.");
    };

    li.appendChild(span);
    li.appendChild(btn);
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (text !== "") {
    tasks.push({ text, done: false });
    saveTasks();
    renderTasks();
    input.value = "";
    showToast("Görev eklendi.");
  }
}

function filterTasks(type) {
  renderTasks(type);
}

renderTasks();
