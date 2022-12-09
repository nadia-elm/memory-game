const gameContainer = document.getElementById("game");
let clickedCard = null;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
   
    newDiv.addEventListener('click',handleCardClick)
    gameContainer.append(newDiv);
   
  }
  

}
  

// TODO: Implement this function!
function handleCardClick(event) {
  console.log("you just clicked", event.target);
  event.target.style.backgroundColor = event.target.classList;
   event.target.setAttribute('color',event.target.classList);
  
   if(!clickedCard){
  clickedCard = event.target;
   setTimeout(function () {
     event.target.style.backgroundColor = "";
   }, 1000);
   
   }else if(clickedCard){
      if(clickedCard.getAttribute('color') == event.target.getAttribute('color')){
        console.log('it s a match !') 
         clickedCard.style.backgroundColor == event.target.classList ;
         console.log(clickedCard)
    
           event.target.style.backgroundColor == event.target.classList; 
           console.log(event.target.style.backgroundColor)  
      
      }else{
        setTimeout(function () {
       }, 1000);
        clickedCard = null;
      }
   }

  
  }




   
  
  



// when the DOM loads
createDivsForColors(shuffledColors);

/* */