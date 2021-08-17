const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let dateObj = new Date();
let myDate = ((dateObj.getUTCDate()+ " "+ monthNames[(dateObj.getMonth())] + " "+ dateObj.getUTCFullYear()+ ", "+ dayName[dateObj.getDay()] ));

document.getElementById("date").innerText= myDate


