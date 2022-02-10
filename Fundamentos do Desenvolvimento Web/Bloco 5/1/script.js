document.querySelector("#paragraph").style.color = "red";

document.querySelector("#page-title").style.color = "purple";
document.querySelector("#page-title").innerText = "Este título foi inserido a através de JavaScript";

document.querySelector("#second-paragraph").innerText = "Eu não sei o que escrever neste parágrafo, mas aprender DOM é bastante interessante.";

let everyP = document.querySelectorAll(".all-p");
for (i = 0; i < everyP.length; i += 1) {
  everyP[i].innerText = "Todos os parágrafos devem conter o mesmo texto PORQUE SIM";
}

everyP[1].style.color = "blue";
everyP[1].style.textTransform = "uppercase";

document.querySelectorAll("h4")[0].style.color = "green";