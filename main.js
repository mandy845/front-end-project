let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");

btnLogin.onclick = function(){
    signIn.classList.add("active");
    signUp.classList.add("inActive");
}

btnSignUp.onclick = function(){
   signIn.classList.remove("active");
   signUp.classList.remove("inActive");
}


function logIn(){
  let regForm = document.querySelector(".form")

  regForm.addEventListener("submit", e => {
    e.preventDefault();

    let firstName = document.querySelector(".first-name").value;
    let lastName = document.querySelector(".last-name").value;
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;

    let details = {
      "firstName" : firstName,
      "lastName" :lastName ,
      "username" :username ,
      "password" :password 
    }
  })


  console.log(details);

  fetch("https://still-lowlands-46634.herokuapp.com/user-registration", {
    headers: {'content-type':'application/json'},
    method:'POST'
    ,
    body:JSON.stringify(details)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
}


let addForm = document.querySelector(".form")

adForm.addEventListener("submit", e => {
  e.preventDefault();

let title = document.querySelector("title").value;
let price = document.querySelector("price").value;
let description = document.querySelector("description").value;

let products ={
  title :title,
  price : price,
  description :description

}
console.log(products);


fetch("https://still-lowlands-46634.herokuapp.com/edit-products/1/", {
  headers: {'content-type':'application/json'},
  method:'POST'
  ,
  body:JSON.stringify(products)
})
.then(response => response.json())
.then(data => {
  console.log(data);

})})