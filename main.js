// let btnLogin = document.getElementById("login");
// let btnSignUp = document.getElementById("signup");

// let signIn = document.querySelector(".signin");
// let signUp = document.querySelector(".signup");

// btnLogin.onclick = function(){
//     signIn.classList.add("active");
//     signUp.classList.add("inActive");
// }

// btnSignUp.onclick = function(){
//    signIn.classList.remove("active");
//    signUp.classList.remove("inActive");
// }

let projects =[
    {
        imgURL1: "./pics/bracelet.webp" ,
        imgURL2: "/pics/buttefly2.webp",
        title: "butterfly bracelet",
        nowPrice: "Zar16.00",
        wasPrice: "Zar20.00",

    },
    {
        imgURL1: "./pics/bracelet.webp" ,
        imgURL2: "/pics/buttefly2.webp",
        title: "butterfly bracelet",
        nowPrice: "Zar16.00",
        wasPrice: "Zar20.00",
    }
];

function createCard(card){
    let createdCard = 
        `<div class="product-grid">
        <div class="product-image">
                <img class="pic-1" src="${card.imgURL1}">
                <img class="pic-2" src="${card.imgURL2}">
            <ul class="social">
                <li><a href="" data-tip="more like this"><i class="fa fa-search"></i></a></li>
                <li><a href="" data-tip="buy now"><i class="fa fa-shopping-bag"></i></a></li>
                <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
            </ul>
           
        </div>
        <div class="product-content">
            <h3 class="title">${card.title}</h3>
            <div class="price">${card.nowPrice}
                <span>${card.wasPrice}</span>
            </div>
            <a class="add-to-cart" href="">+ Add To Cart</a>
        </div>
    </div>`;
return createdCard;
}

function renderCards() {

    console.log("hgytwe");
    let productContainer = document.querySelector(".product-container");
    for (product of projects) {
      let card = createCard(product);
      productContainer.innerHTML += card;
    }
  }
  
renderCards();
  
function filterCards(category) {
    let cards = document.getElementsByClassName("product-grid");
    if (category == "All") {
      for (card of cards) {
        card.style.display = "block";
      }
      return;
    }
    for (card of cards) {
      card.style.display = "none";
    }
  
    let selectedCards = document.querySelectorAll([techStack='${category}']);
  
    for (card of selectedCards) {
      card.style.display = "block";
    }
  }
  