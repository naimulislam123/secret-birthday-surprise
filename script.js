const loading = document.querySelector(".loading");
const giftPage = document.querySelector(".gift-page");
const startBtn = document.getElementById("startBtn");

giftPage.style.display = "none";

startBtn.addEventListener("click", () => {
  loading.style.display = "none";
  giftPage.style.display = "flex";
});

document.querySelector(".gift").addEventListener("click", () => {

document.body.innerHTML = `

<div class="birthday">

<h1 class="title">🎉 Happy Birthday Jesmin 🎂</h1>

<img src="photo.jpg" class="photo">

<p class="message">
Happy Birthday to the most beautiful and amazing girl I know! 🌸<br><br>

Thank you for being the sister I got to choose.<br>

May your day be as bright and wonderful as your smile.<br><br>

Stay blessed, bestie! 👭💕
</p>

<h2>❤️ From Jawra ❤️</h2>

</div>

`;

createHearts();

});

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(20+Math.random()*25)+"px";
heart.style.animation="fly 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

},300);

}
