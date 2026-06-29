const text = document.getElementById("text").innerText;
const input = document.getElementById("input");
const wpm = document.getElementById("wpm");
const accuracy = document.getElementById("accuracy");
const restartBtn = document.getElementById("restartBtn");

let startTime = null;

input.addEventListener("input", () => {

    if(startTime === null){
        startTime = new Date();
    }

    const typed = input.value;

    let correct = 0;

    for(let i=0;i<typed.length;i++){
        if(typed[i] === text[i]){
            correct++;
        }
    }

    const acc = typed.length
        ? Math.round((correct/typed.length)*100)
        : 100;

    accuracy.textContent = acc;

    const elapsed = (new Date()-startTime)/1000/60;

    const words = typed
        .trim()
        .split(/\s+/)
        .filter(word => word !== "").length;

    const speed = elapsed > 0
        ? Math.round(words/elapsed)
        : 0;

    wpm.textContent = speed;

    if(typed === text){
        alert(`🎉 Finished!\n\nWPM: ${speed}\nAccuracy: ${acc}%`);
    }

});

restartBtn.addEventListener("click", () => {

    input.value = "";
    startTime = null;
    wpm.textContent = 0;
    accuracy.textContent = 100;
    input.focus();

});