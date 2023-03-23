document.getElementById("reset-btn").addEventListener("click", function() {
    location.reload();
});



document.getElementById("eight-rep-run-btn").addEventListener("click",calculateFromEightRep);
document.getElementById("one-rep-run-btn").addEventListener("click",calculateFromOneRep);
document.getElementById("seven-rep-run-btn").addEventListener("click",calculateFromSevenRep);
document.getElementById("two-rep-run-btn").addEventListener("click",calculateFromTwoRep);
document.getElementById("six-rep-run-btn").addEventListener("click",calculateFromSixRep);
document.getElementById("three-rep-run-btn").addEventListener("click",calculateFromThreeRep);
document.getElementById("five-rep-run-btn").addEventListener("click",calculateFromFiveRep);
document.getElementById("four-rep-run-btn").addEventListener("click",calculateFromFourRep);

function calculateFromEightRep(){
    bulgarianFormulae(Math.round(document.getElementById("eight-rep").value / 0.6));
}

function calculateFromOneRep(){
    bulgarianFormulae(Math.round(document.getElementById("one-rep").value / 0.95));
}

function calculateFromSevenRep(){
    bulgarianFormulae(Math.round(document.getElementById("seven-rep").value / 0.65));
}

function calculateFromTwoRep(){
    bulgarianFormulae(Math.round(document.getElementById("two-rep").value / 0.90));
}

function calculateFromSixRep(){
    bulgarianFormulae(Math.round(document.getElementById("six-rep").value / 0.70));
}

function calculateFromThreeRep(){
    bulgarianFormulae(Math.round(document.getElementById("three-rep").value / 0.85));
}

function calculateFromFiveRep(){
    bulgarianFormulae(Math.round(document.getElementById("five-rep").value / 0.75));
}

function calculateFromFourRep(){
    bulgarianFormulae(Math.round(document.getElementById("four-rep").value / 0.80));
}



function bulgarianFormulae(oneRm){
    document.getElementById("1rm").value = oneRm;
    document.getElementById("eight-rep").value = Math.round(oneRm * 0.60);
    document.getElementById("one-rep").value = Math.round(oneRm * 0.95);
    document.getElementById("seven-rep").value = Math.round(oneRm * 0.65);
    document.getElementById("two-rep").value = Math.round(oneRm * 0.90);
    document.getElementById("six-rep").value = Math.round(oneRm * 0.70);
    document.getElementById("three-rep").value = Math.round(oneRm * 0.85);
    document.getElementById("five-rep").value = Math.round(oneRm * 0.75);
    document.getElementById("four-rep").value = Math.round(oneRm * 0.80);
}
