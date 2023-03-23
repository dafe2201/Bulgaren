document.getElementById("reset-btn").addEventListener("click", function () {
  location.reload();
});

document
  .getElementById("1rm-run-btn")
  .addEventListener("click", calculateFromOneRm);
document
  .getElementById("eight-rep-run-btn")
  .addEventListener("click", calculateFromEightRep);
document
  .getElementById("one-rep-run-btn")
  .addEventListener("click", calculateFromOneRep);
document
  .getElementById("seven-rep-run-btn")
  .addEventListener("click", calculateFromSevenRep);
document
  .getElementById("two-rep-run-btn")
  .addEventListener("click", calculateFromTwoRep);
document
  .getElementById("six-rep-run-btn")
  .addEventListener("click", calculateFromSixRep);
document
  .getElementById("three-rep-run-btn")
  .addEventListener("click", calculateFromThreeRep);
document
  .getElementById("five-rep-run-btn")
  .addEventListener("click", calculateFromFiveRep);
document
  .getElementById("four-rep-run-btn")
  .addEventListener("click", calculateFromFourRep);

function calculateFromOneRm() {
  bulgarianFormulae(parseFloat(document.getElementById("1rm").value));
}

function calculateFromEightRep() {
  bulgarianFormulae(document.getElementById("eight-rep").value / 0.6);
}

function calculateFromOneRep() {
  bulgarianFormulae(document.getElementById("one-rep").value / 0.95);
}

function calculateFromSevenRep() {
  bulgarianFormulae(document.getElementById("seven-rep").value / 0.65);
}

function calculateFromTwoRep() {
  bulgarianFormulae(document.getElementById("two-rep").value / 0.9);
}

function calculateFromSixRep() {
  bulgarianFormulae(document.getElementById("six-rep").value / 0.7);
}

function calculateFromThreeRep() {
  bulgarianFormulae(document.getElementById("three-rep").value / 0.85);
}

function calculateFromFiveRep() {
  bulgarianFormulae(document.getElementById("five-rep").value / 0.75);
}

function calculateFromFourRep() {
  bulgarianFormulae(document.getElementById("four-rep").value / 0.8);
}

function bulgarianFormulae(oneRm) {
  document.getElementById("1rm").value = oneRm.toFixed(1);
  document.getElementById("eight-rep").value = (oneRm * 0.6).toFixed(1);
  document.getElementById("one-rep").value = (oneRm * 0.95).toFixed(1);
  document.getElementById("seven-rep").value = (oneRm * 0.65).toFixed(1);
  document.getElementById("two-rep").value = (oneRm * 0.9).toFixed(1);
  document.getElementById("six-rep").value = (oneRm * 0.7).toFixed(1);
  document.getElementById("three-rep").value = (oneRm * 0.85).toFixed(1);
  document.getElementById("five-rep").value = (oneRm * 0.75).toFixed(1);
  document.getElementById("four-rep").value = (oneRm * 0.8).toFixed(1);
}
