const sayiGetirBtn = document.querySelector('#sayiGetirBtn');
const rastgeleSayiEl = document.querySelector('#rastgeleSayi');

sayiGetirBtn.addEventListener("click", ()=>{
    let rastgeleSayi = Math.floor(Math.random() * 9) + 1;

    // Rastgele sayıyı ekrana yazdırma
    rastgeleSayiEl.innerText = "Rastgele Sayı: " + rastgeleSayi;
  });