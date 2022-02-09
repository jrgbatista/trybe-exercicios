// exercício getElementById()
const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

const title = document.getElementById("page-title");
title.style.color = "purple";
title.innerText = "Este título foi inserido a através de JavaScript";

const secondP = document.getElementById("second-paragraph");
secondP.innerText = "Eu não sei o que escrever neste parágrafo, mas aprender DOM é bastante interessante.";

// const subtitle = document.getElementById("subtitle");
// subtitle.innerText = "Um subtítulo seria uma legenda???";

// exercício getElementsByClassName() e getElementsByTagName()
let everyP = document.getElementsByClassName("all-p");
for (i = 0; i < everyP.length; i += 1) {
  everyP[i].innerText = "Todos os parágrafos devem conter o mesmo texto PORQUE SIM";
}

everyP[0].style.color = "blue";

let subtitle = document.getElementsByTagName("h4");
subtitle[0].style.color = "green";