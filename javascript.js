"use strict";

//Get element DOM

const cardsElement = document.getElementById("cards");

// Buttons Elements

const btnsElement = document.getElementById("filtration");

// Fetch data from API

async function getData() {
  const API =
    "https://filltext.com/?rows=50&fname={firstName}&lname={lastName}&category=[%22category1%22,%22category2%22,%22category3%22]&pretty=true";
  const response = await fetch(API);
  const data = await response.json();
  console.log(data);
  // display data
  displayData(data);
}

// function display data
function displayData(data) {
  data.forEach((data) => {
    const cardElementClone = document.getElementById("card").cloneNode(true);

    cardElementClone.firstElementChild.firstElementChild.textContent =
      data.fname[0] + data.lname[0];
    cardElementClone.children[1].textContent = data.fname + " " + data.lname;
    cardElementClone.lastElementChild.textContent = data.category;

    cardsElement.appendChild(cardElementClone);
  });
}

// Filter item based on category

// Add event to buttons
for (let i = 0; i < btnsElement.children.length; i++) {
  btnsElement.children[i].addEventListener("click", () =>
    filter(btnsElement.children[i].textContent)
  );
}

// filter data
function filter(category) {

  for (let i = 0; i < cardsElement.children.length; i++) {
    if (!(cardsElement.children[i].lastElementChild.textContent === category)) {
      addClass(cardsElement.children[i], "hidden");
    } else {
      removeClass(cardsElement.children[i], "hidden");
    }
  }
}

function addClass(element, hiddenClass) {
  element.classList.add(hiddenClass);
}

function removeClass(element, hiddenClass) {
  element.classList.remove(hiddenClass);
}

getData();
