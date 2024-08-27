/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const generateRandomCard = () => {
  let suit = ["♦", "♥", "♠", "♣"];
  let numb = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let randomNumb = numb[Math.floor(Math.random() * numb.length)];
  let randomSuit = suit[Math.floor(Math.random() * suit.length)];
  if (randomSuit === "♥" || randomSuit === "♦") {
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
  } else {
    document.querySelector(".top-suit").style.color = "black";
    document.querySelector(".bottom-suit").style.color = "black";
  }
  document.querySelector(".top-suit").innerHTML = randomSuit;
  document.querySelector(".bottom-suit").innerHTML = randomSuit;
  document.querySelector(".number").innerHTML = randomNumb;
};
window.onload = function() {
  document.querySelector(".btn").addEventListener("click", function() {
    generateRandomCard();
  });
};
