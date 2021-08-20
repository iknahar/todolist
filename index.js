const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let dateObj = new Date();
let myDate = ((dateObj.getUTCDate()+ " "+ monthNames[(dateObj.getMonth())] + " "+ dateObj.getUTCFullYear()+ ", "+ dayName[dateObj.getDay()] ));
document.getElementById("date").innerText= myDate;


// Date part done -------------------------


document.getElementById("new-task-button").addEventListener("click", function(){
let task = document.getElementById("inputBox").value;
newTask = document.createElement("p");
newTask.innerText = task; 

let newDiv = document.createElement("div");
newDiv.classList.add("task-box");
newDiv.appendChild(newTask);

console.log(newTask);

const taskParent = document.getElementsByClassName("white-box")[0];
taskParent.appendChild(newDiv);

document.getElementById("inputBox").value = "";


})