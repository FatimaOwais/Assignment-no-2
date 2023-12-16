var cardArr = [
  {
    id: 1,
    image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",    title: "New title",
    des: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 1,
    image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    title: "Ergonomic Wooden Tuna",
    des: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for",
  },

{

  id: 1,
  image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
  title: "Electronic Bronze Chips",
  des: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
},


{
id: 1,
image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
title: "Awesome Bronze Car",
  des:"Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
},



{
id: 1,
image: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
title: "Recycled Rubber Cheese",
  des: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
},

];

// console.log(cardArr);

const cardCon = document.getElementById("cardContent");

function createCard(card) {
  const { image, title, des } = card;

  const cardElement = document.createElement("div");
  cardElement.classList.add("card", "m-2");
  cardElement.style.width = "18rem";

  cardElement.innerHTML = `
    <img src="${image}" class="card-img-top" alt="..." height="160px"/>
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${des}</p>
    </div>
  `;

  return cardElement;
}

cardArr.map(card => {
  const cardElement = createCard(card);
  cardCon.appendChild(cardElement);
});














