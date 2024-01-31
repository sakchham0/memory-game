document.addEventListener("DOMContentLoaded", ()=>{

    const cardArray=[
        {
            name:"fries",
            img:"src/images/fries.png"
        },
        {
            name:"cheeseburger",
            img:"src/images/cheeseburger.png"
        },
        {
            name:"ice-cream",
            img:"src/images/ice-cream.png"
        },
        {
            name:"pizza",
            img:"src/images/pizza.png"
        },
        {
            name:"milkshake",
            img:"src/images/milkshake.png"
        },
         {
            name:"hotdog",
            img:"src/images/hotdog.png"
        }, 
        {
            name:"fries",
            img:"src/images/fries.png"
        },
        {
            name:"cheeseburger",
            img:"src/images/cheeseburger.png"
        },
        {
            name:"ice-cream",
            img:"src/images/ice-cream.png"
        },
        {
            name:"pizza",
            img:"src/images/pizza.png"
        },
        {
            name:"milkshake",
            img:"src/images/milkshake.png"
        },
         {
            name:"hotdog",
            img:"src/images/hotdog.png"
        }, 
      
      
    ]
    cardArray.sort(()=> 0.5- Math.random());
    // Math.floor(Math.random()*cards.length);
    console.log(cardArray);

   const grid= document.querySelector(".grid");

   const resultDisplay = document.querySelector("#result");


   let cardsChosen=[];

   let cardsChosenIds=[];

   let cardsWon=[];

   function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card =document.createElement("img");
        card.setAttribute("src", "src/images/blanke.jpg");
        card.setAttribute("data-id",i);
        card.addEventListener("click",flipCard);
        grid.appendChild(card);
    }
   }



   function flipCard(){
   let cardId=  this.getAttribute("data-id");
   cardsChosen.push(cardArray[cardId].name);

   cardsChosenIds.push(cardId);
   this.setAttribute("src",cardArray[cardId].img);
   if(cardsChosen.length ===2){
    setTimeout(checkForMatch,500)
   }
   console.log(cardsChosenIds)
   }
   
   function checkForMatch(){

    const cards = document.querySelectorAll("img")

const optionOneID=cardsChosenIds[0];
const optiontwoID =cardsChosenIds[1];

      if( optionOneID ===optiontwoID){
        alert("You lift the same card");

        cards[optionOneID].setAttribute("src","src/images/blanke.jpg");
        cards[optiontwoID].setAttribute("src","src/images/blanke.jpg");


      }
      else if(cardsChosen[0] === cardsChosen[1]){
        alert("you found a match");
        cards[optionOneID].setAttribute("src","src/images/white.png");
        cards[optiontwoID].setAttribute("src","src/images/white.png");
        cards[optionOneID].removeEventListener("click",flipCard);
        cards[optiontwoID].removeEventListener("click",flipCard);

        cardsWon.push(cardsChosen);
      }else{
        
        cards[optionOneID].setAttribute("src","src/images/blanke.jpg");
        cards[optiontwoID].setAttribute("src","src/images/blanke.jpg");
        alert("sorry, try again")
      }
      cardsChosen=[];
      cardsChosenIds=[];
      resultDisplay.textContent =cardsWon.length;
      if(cardsWon.length === cardArray.length /2){
        resultDisplay.textContent="congratulations! you have won, refresh to try again";

      }

      console.log(cardsChosen)
      console.log(cardsWon)
   }

   createBoard();

});