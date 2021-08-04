const header = document.getElementById("header-container");
header.style.backgroundColor = "rgb(0, 176, 105)";

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "rgb(0, 53, 51)";

const emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = "rgb(255, 159, 132)";

const noEmergencyTask =
  document.getElementsByClassName("no-emergency-tasks")[0];
noEmergencyTask.style.backgroundColor = "rgb(249, 219, 94)";

const titulo1 = document.querySelectorAll(".emergency-tasks h3");
titulo1[0].style.backgroundColor = "rgb(165, 0, 243)";
titulo1[1].style.backgroundColor = "rgb(165, 0, 243)";

const titulo2 = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < titulo2.length; i += 1) {
  titulo2[i].style.backgroundColor = "rgb(35, 37, 37)";
}
