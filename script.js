let input = document.getElementById("input_text");
let taskList = document.getElementById("list-container");

function addTask() {
  if (input.value === "") {
    alert("you should add a task !!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    taskList.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  storeTasks();
}
taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      storeTasks();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      storeTasks();
    }
  },
  false
);
function storeTasks() {
  localStorage.setItem("data", taskList.innerHTML);
}
function getTasks() {
  taskList.innerHTML = localStorage.getItem("data");
}
getTasks();
