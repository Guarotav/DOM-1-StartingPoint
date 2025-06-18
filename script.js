console.log("Hello! If you see this, the script is working.");

/*
- [ ] Select the section with an id of container without using querySelector.
- [ ] Select the section with an id of container using querySelector.
- [ ] Select all of the list items with a class of "second".
- [ ] Select a list item with a class of third, but only the list item inside of the ol tag.
- [ ] Give the section with an id of container the text "Hello!".
- [ ] Add the class main to the div with a class of footer.
- [ ] Remove the class main on the div with a class of footer.
- [ ] Create a new li element.
- [ ] Give the li the text "four".
- [ ] Append the li to the ul element.
- [ ] Loop over all of the lis inside the ol tag and give them a background color of "green".
- [ ] Remove the div with a class of footer.
*/

// 1) Select the section with an id of container without using querySelector.
let selectContainer = document.getElementById("container");

console.log(selectContainer);

// 2) Select the section with an id of container using querySelector.
let querySelectContainer = document.querySelector("#container");

console.log(querySelectContainer);

// 3) Select all of the list items with a class of "second".
let seconds = document.querySelectorAll(".second");

seconds.forEach((item, index) => {
  console.log(`.second item ${index + 1}:`, item);
});








// Try rewriting this without using querySelector
const header = document.querySelector("#container");
console.log("header", header);
