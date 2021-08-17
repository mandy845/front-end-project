let projects =[
    {
        id:"1",
        imgURL1: "./pics/rings.webp" ,
        imgURL2: "/pics/buttefly2.webp",
        title: "butterfly bracelet",
        nowPrice: "Zar16.00",
        wasPrice: 20.00,
        techStack: "bracelets",

    },
    {    id:"2",
        imgURL1: "./pics/butterfly.webp" ,
        imgURL2: "/pics/buttefly2.webp",
        title: "butterfly bracelet",
        nowPrice: "Zar16.00",
        wasPrice: 20.00,
        techStack:"Necklace"
    },

    { id:"3",
      imgURL1: "./pics/necklace.webp" ,
      imgURL2: "/pics/necklace2.webp",
      title: " couple nacklace",
      nowPrice: "R16.00",
      wasPrice: 20.00,
      techStack: "bracelets",

  },
    {id:"4",
    imgURL1: "./pics/bracelet.webp" ,
    imgURL2: "/pics/buttefly2.webp",
    title: "butterfly bracelet",
    nowPrice: "Zar16.00",
    wasPrice: 20.00,
    techStack:"Necklace"
},
{id:"5",
  imgURL1: "./pics/bracelet.webp" ,
  imgURL2: "/pics/buttefly2.webp",
  title: "butterfly bracelet",
  nowPrice: "Zar16.00",
  wasPrice: 20.00,
  techStack:"Necklace"
},  
    
];

function createCard(card){
    let createdCard = 
        `
        <div class="product-grid" teckStack=${card.techStack}>
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
    </div>
  `;

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
  localStorage.setItem("cart", JSON.stringify(cart))


  function addToCart(id) {
    
    let product = projects.find(product =>{
      return product.id == id
    } );
      console.log(product);
      
      let cart=JSON.parse(localStorage.getItem("cart"))
      
    
      if (cart == null) {
          cart=[]
      }
      cart.push(product)
      console.log(cart);
     
      // document.querySelector('.shopping').innerHTML = cart.length
    
      if (document.querySelector(".shopping-cart").style.display == "block") {
        document.querySelector(".shopping-cart").style.display = "none"
      } else {
        document.querySelector(".shopping-cart").style.display = "block"
      }
    let cartContainer = document.querySelector(".cart");
    console.log(cartContainer);
    cart.forEach(product => {
    cartContainer.innerHTML += 
    `<div class="item">
              <div class="buttons">
                <span class="delete-btn"></span>
                <span class="like-btn"></span>
              </div>
           
              <div class="image">
                <img src="${product.imgURL1}" alt="" />
              </div>
           
              <div class="description">
                <span>${product.title}</span>
                <span>${product.techStack}</span>
                <span>${product.wasPrice}</span>
              </div>
           
              <div class="quantity">
                <button class="plus-btn" type="button" name="button">
                  +
                </button>
                <input type="text" name="name" value="1">
                <button class="minus-btn" type="button" name="button">
                  -
                </button>
              </div>
            </div>`;
            
          });
          let totalPrice = cart.reduce((total, price)=> 
            total + price.wasPrice, 0
          );
          document.querySelector(".total-price").innerHTML = `${totalPrice}`;
    
    
}

// function addToCart(id) {
//   let product = projects.filter(product => product.id == id);
//   console.log(product);

//   let cart=JSON.parse(localStorage.getItem("cart"))

//   if (cart == null) {
//       cart=[]
//   }
//   cart.push(product)
//   localStorage.setItem("cart", JSON.stringify(cart))

//   document.querySelector('.shopping').innerHTML = cart.length

//   if (document.querySelector(".shopping-cart").style.display == "block") {
//     document.querySelector(".shopping-cart").style.display = "none"
//   } else {
//     document.querySelector(".shopping-cart").style.display = "block"
//   }
  
// }






function checkut(){
  let cartContainer = document.querySelector(".cart");
  cartContainer.innerHTML = "";
  localStorage.removeItem("cart");
  document.querySelector('.shopping').innerHTML = "0"
  document.querySelector(".total-price").innerHTML = "R0.00";

}