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
  <div style="height:100vh;background:linear-gradient(135deg,#ff4fa3,#ffb6d9,#ffd6eb);display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;color:white;padding:20px;">
    <h1 style="font-size:45px;">🎉 Happy Birthday Jesmin 🎂</h1>
<img src="photo.jpg" class="photo">
    <h2 style="margin-top:15px;">You are truly special! 💖</h2>

    <p style="margin-top:25px;font-size:20px;max-width:700px;line-height:1.8;">
    Happy Birthday to the most beautiful and amazing girl I know! 🌸<br><br>
    Thank you for being the sister I got to choose.<br>
    May your day be as bright and wonderful as your smile.<br>
    Stay blessed, bestie! 👭💕
    </p>

    <h2 style="margin-top:35px;">❤️ From Jawra ❤️</h2>
  </div>
  `;
});
      
