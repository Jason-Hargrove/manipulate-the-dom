let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  const wordyTitle = () => {
    let title = document.getElementById('main-title');
    title.innerHTML = 'This is Shorter';
  }
  wordyTitle();


  // Part 2
  const bodyChange = () => {
    let newBody = document.querySelector('body');
    newBody.style.backgroundColor = 'hsl(50, 100%, 50%)';
  }
  bodyChange();

  // Part 3
  const removeFavThing = () => {
    let newBody = document.querySelector('#favorite-things');
    newBody.removeChild(newBody.lastElementChild);
  }
  removeFavThing();

  // Part 4
  const specialSizeChange = () => {
    const sizeChange = document.querySelectorAll('.special-title');
    sizeChange.forEach(function(i) {
      i.style.fontSize = '2rem';
    })
  }
  specialSizeChange ();


  // Part 5
  let pastRaces = document.getElementById('past-races');
      pastRaces.removeChild(pastRaces.children[3]);


  // Part 6
    const newContent = document.createTextNode('St. Louis');
    pastRaces.appendChild(newContent);



  // Part 7


  // Part 8


  // Part 9




});
