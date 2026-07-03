setTimeout(() => {
  document.querySelector(".loading").style.display = "none";
  document.querySelector(".gift-page").style.display = "flex";
}, 3000);

document.querySelector(".gift").addEventListener("click", () => {
  document.body.innerHTML = `
  <div style="
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh;
    background:linear-gradient(135deg,#ff4fa3,#ffd6eb);
    color:white;
    text-align:center;
    padding:20px;
    font-family:Poppins,sans-serif;
  ">
    <h1 style="font-size:42px;">🎉 Happy Birthday Jesmin 🎂</h1>

    <p style="max-width:700px;font-size:20px;line-height:1.8;margin-top:20px;">
      Happy Birthday to the most beautiful and amazing girl I know! 🌸<br><br>
      Thank you for being the sister I got to choose.<br>
      May your day be as bright and wonderful as your smile.<br>
      Stay blessed, bestie! 👭💕
    </p>

    <h2 style="margin-top:30px;">❤️ From Jawra ❤️</h2>
  </div>
  `;
});
