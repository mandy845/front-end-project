let projects =[
    {
        id:"1",
        imgURL1: "./pics/bracelet.webp" ,
        imgURL2: "/pics/buttefly2.webp",
        title: "butterfly bracelet",
        nowPrice: "Zar16.00",
        wasPrice: "Zar20.00",
        techStack: "bracelets",

    },
    {    id:"2",
        imgURL1: "./pics/bracelet.webp" ,
        imgURL2: "/pics/buttefly2.webp",
        title: "butterfly bracelet",
        nowPrice: "Zar16.00",
        wasPrice: "Zar20.00",
        techStack:"Necklace"
    },

    { id:"3",
      imgURL1: "./pics/bracelet.webp" ,
      imgURL2: "/pics/buttefly2.webp",
      title: "butterfly bracelet",
      nowPrice: "Zar16.00",
      wasPrice: "Zar20.00",
      techStack: "bracelets",

  },
    {id:"4",
    imgURL1: "./pics/bracelet.webp" ,
    imgURL2: "/pics/buttefly2.webp",
    title: "butterfly bracelet",
    nowPrice: "Zar16.00",
    wasPrice: "Zar20.00",
    techStack:"Necklace"
},
{id:"5",
  imgURL1: "./pics/bracelet.webp" ,
  imgURL2: "/pics/buttefly2.webp",
  title: "butterfly bracelet",
  nowPrice: "Zar16.00",
  wasPrice: "Zar20.00",
  techStack:"Necklace"
},  
    
];

function createCard(card){
    let createdCard = 
        `<div class="product-grid" teckStack=${card.techStack}>
        <div class="product-image">
                <img class="pic-1" src="${card.imgURL1}">
                <img class="pic-2" src="${card.imgURL2}">
            <ul class="social">
                <li><a href="" data-tip="more like this"><i class="fa fa-search"></i></a></li>
                <li><a href="" data-tip="buy now"><i class="fa fa-shopping-bag"></i></a></li>
                <li><button data-tip="Add to Cart" onclick=addToCart(${card.id})><i class="fa fa-shopping-cart"></i></button></li>
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

  let productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = " "

  for (product of projects) {
    let card = createCard(product);
      console.log(product);
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
  
    let selectedCards = document.querySelectorAll(`[techStack='${category}']`);
  
    for (card of selectedCards) {
      card.style.display = "block";
    }
  }

  function addToCart(id) {
    let product = projects.filter(product => product.id == id);
    console.log(product);

    let cart=JSON.parse(localStorage.getItem("cart"))

    if (cart == null) {
        cart=[]
    }
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart))

    document.querySelector('.shopping').innerHTML = cart.length
}