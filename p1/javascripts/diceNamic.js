// jshint esversion: 7

//define helper functions here

let rollDie = () => {
    return Math.floor (Math.random() * 6) + 1;
};

let controller = () => {
  let target, die1, die2, rollCount, die1URL, die2URL, imgELem1, imgElem2, cheeryMsg;

  target = document.querySelector('input').value;
  console.log(target);


// roll target number (and connt the rolls
rollCount = 0;
do{

  //roll the dice
  //die1 = rollDie();
  die1 = rollDie();
  die2 = rollDie();
  // increment the roll counter

  rollCount +=1;
  // log dice and counter
  console.log(`${die1} ${die2} ${rollCount}`);
} while (die1 + die2 != target);

// update images on web page
die1URL = `images/die${die1}.gif`;
imgElem1 = document.querySelector("img");
imgElem1.setAttribute("src", die1URL);

die2URL = `images/die${die2}.gif`;
imgElem2 = document.querySelectorAll("img")[1];
imgElem2.setAttribute("src", die2URL);

// display rolls
cheeryMsg = `You hit your number in ${rollCount} roll${(rollCount == 1)?"":"s"}! `;
document.querySelector("div").innerHTML = cheeryMsg;

};
//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
