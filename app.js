
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#rst-btn");
let newgamebutton = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = true; //playerX,Y


const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetgame = ()=>{
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
}
let counting=0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
         counting = counting+1;
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;

        }
        box.disabled = true;

        checkWinner(counting);
    });
});
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const displaywinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();

};
const displaydraw = () => {
    msg.innerText = `Its a draw`;
    msgContainer.classList.remove("hide");
    disableboxes();

};




const checkWinner = () => {
    for (let pattern of winPattern) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
                console.log("winner", p1);

                displaywinner(p1);
            }
            else if ( counting === 9 )
                {
               
                displaydraw();
            }
        }


    }

}

newgamebutton.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);
