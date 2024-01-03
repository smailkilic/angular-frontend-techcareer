const sayiGetirBtn = document.querySelector('#sayiGetirBtn');
const rastgeleSayiEl = document.querySelector('#rastgeleSayi');

sayiGetirBtn.addEventListener("click", ()=>{
    let rastgeleSayi = Math.floor(Math.random() * 9) + 1;

    rastgeleSayiEl.innerText = "Rastgele Sayı: " + rastgeleSayi;
  });