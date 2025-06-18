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

// 3
const thirdItem = document.querySelector('ol li.third');
console.log("List item with a class of third inside of the ol tag: ", thirdItem.textContent);

const container = document.getElementById("container").innerHTML = "Hello!";
console.log("Give the section with an id of container the text 'Hello!': ", container);

const divFooter = document.getElementsByClassName("footer")[0];
divFooter.classList.add('main');
console.log("Add the class main to the div with a class of footer", divFooter);



