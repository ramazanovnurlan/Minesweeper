let obj = {
  config1: {
    element1: "button",
  },
};

let box = document.createElement("div");
box.className = "box";
document.body.appendChild(box);

let par = document.createElement("p");
par.className = "par";
par.innerText = "There are at least 5 bombs in this game";
box.appendChild(par);

let count = 0;
let btnClicked = true;

for (let i = 1; i < 50; i++) {
  //Birinci usul
  // let array=[1,2,3,4,5,6,7,8,9];
  // let rand = array[Math.floor(Math.random() * array.length)];

  //Ikinci usul
  let rand = Math.floor(Math.random() * 9);
  console.log(rand);

  let br = document.createElement("br");
  let btn = document.createElement(obj.config1.element1);
  btn.id = rand;
  btn.className = "btn";
  box.appendChild(btn);

  if (i % 7 == 0) {
    btn.after(br);
  }

  btn.addEventListener("click", function () {
    if (btn.id == "1" && count < 5 && btnClicked) {
      btn.innerText = "";
      btn.classList = "btn fas fa-bomb";
      btn.style.backgroundColor = "red";
      par.innerText = "Game Over";
      count++;
      btnClicked = false;
    } else if (btnClicked) {
      btn.innerText = "";
      btn.style.backgroundColor = "#1B1464";
    }
  });
}

let reset = document.createElement("button");
reset.className = "reload";
reset.innerText = "Reload";
box.appendChild(reset);

reset.addEventListener("click", function () {
  location.reload(true);
});
