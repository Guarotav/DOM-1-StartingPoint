console.log("Hello! If you see this, the script is working.");


/*- [ ] Select the section with an id of container without using querySelector.*/
let selectContainer = document.getElementById("container");

console.log(selectContainer);

/*- [ ] Select the section with an id of container using querySelector.*/
let querySelectContainer = document.querySelector("#container");

console.log(querySelectContainer);

/*- [ ] Select all of the list items with a class of "second".*/
let seconds = document.querySelectorAll(".second");

seconds.forEach((item, index) => {
  console.log(`.second item ${index + 1}:`, item);
});

/*- [ ] Select a list item with a class of third, but only the list item inside of the ol tag.*/
const thirdItem = document.querySelector('ol li.third');
console.log("List item with a class of third inside of the ol tag: ", thirdItem.textContent);


/*- [ ] Give the section with an id of container the text "Hello!".*/
const container = document.getElementById("container").innerHTML = "Hello!";
console.log("Give the section with an id of container the text 'Hello!': ", container);


/*- [ ] Add the class main to the div with a class of footer.*/
const divFooter = document.getElementsByClassName("footer")[0];
divFooter.classList.add('main');
console.log("Add the class main to the div with a class of footer", divFooter);

/*- [ ] Remove the class main on the div with a class of footer.*/
const footer = document.querySelector('.footer');
footer.classList.remove("main");


/*- [ ] Create a new li element.*/
const newLi = document.createElement("li");



/*- [ ] Give the li the text "four".*/
newLi.textContent="four";



/*- [ ] Append the li to the ul element.*/
const ulElement = document.querySelector("ul");
ulElement.appendChild(newLi);


/*- [ ] Loop over all of the lis inside the ol tag and give them a background color of "green".*/
const olGrn = document.querySelectorAll("ol li");
olGrn.forEach(li => {
  li.style.backgroundColor = "green";
});
/*- [ ] Remove the div with a class of footer.*/
divFooter.remove();
console.log("Removed footer div.");


// Try rewriting this without using querySelector
const header = document.getElementById("container");
console.log("header", header);
