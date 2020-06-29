document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "blank",
      img: "images/blank.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    { name: "hotdog",
      img: "images/hotdog.png" },
    {
      name: "ice-cream",
      img: "images/milkshake.png",
    },
    { name: "pizza", img: "images/pizza.png" },
  ];
});


//createboard

const grid = document.querySelector
function createBoard(){
    for(let i=0;<cardArray.length; i++){
        var card = document.createElement("img")card.setAttribute("src", "images/blank.png")
        card.setAttribute("date-id")
        card.addEventListener("click" , flipcard)
        //card.addEventListener("click" , flipcard)
        grid.appendChild(card)
    }
}
function checkForMatch(){
    
}
function flipCard(){
    var CardId = this.getAttribute("data.id")
    cardsChosen.push(cardArray[CardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute("src" , cardArray[cardId].img)
    if(cardsChosen.length ===2){
        setTimeout(checkForMatch, 500)
    }
}

createBoard()