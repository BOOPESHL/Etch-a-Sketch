const sketchBox = document.querySelector(".sketchBox");


// ---- CREATING THE GRID ----
function createGrid(rows,cols){
    sketchBox.replaceChildren();
    for (let i = 0;i<rows;i++){
        const boxes = document.createElement("div");
        boxes.classList.add("boxes");
        for (let j = 0;j<cols;j++){
            const box = document.createElement("div");
            box.classList.add("box");
            boxes.appendChild(box);
        }
        sketchBox.appendChild(boxes);
    }

    // ---- ADDING EVENT LISTENER TO ALL THE BOXES 
    
    addListener();

}

function addListener(){
    const box = document.querySelectorAll(".box");
    let colorSelector = document.querySelector(".color");
    let color = colorSelector.value;
    for (let x of box){
        x.addEventListener("mouseover",(evt) => {
            const trg = evt.target;
            trg.style.backgroundColor = color;
        }); 
    }
}

createGrid(16,16);



// ---- CHANGING THE COLOR ----
const selectButton = document.querySelector(".color");

selectButton.addEventListener("change",addListener);



// ---- RESETTING THE GRID ----
const rowsButton = document.querySelector(".rows");
const colsButton = document.querySelector(".cols");
const resetButton = document.querySelector(".resetButton");

resetButton.addEventListener("click",resetGrid);

function resetGrid(){
    let rows = rowsButton.value;
    let cols = colsButton.value;
    createGrid(rows,cols);
}

