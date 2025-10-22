// Ana kapsayıcıyı seçiyoruz (splitview sınıfına sahip olan)
const split = document.querySelector(".splitview");

// Üst panel (kaydırılarak açığa çıkan görüntü) seçiliyor
const topPanel = split.querySelector(".top");

// Sürükleme çubuğu (handle) seçiliyor
const handle = split.querySelector(".handle");

// Skew efektine göre küçük bir düzeltme değişkeni (eğer "skewed" sınıfı varsa 1000 değerini alır)
let skewHack = 0;
if (split.className.indexOf("skewed") !== -1) {
    skewHack = 1000;
}

// Mouse hareketini dinleyip slider’ı güncelleyen olay dinleyici
split.addEventListener("mousemove", function (e) {
    // Fare pozisyonunun ekran ortasına göre farkı alınır ve biraz yumuşatma (0.5 çarpanı) uygulanır
    let delta = (e.clientX - window.innerWidth / 2) * 0.5;

    // Handle (tutacak) fare konumuna göre sola yerleştirilir
    handle.style.left = e.clientX + "px";

    // Üst panelin genişliği, fare konumu, delta ve gerekiyorsa skew düzeltmesi ile belirlenir
    topPanel.style.width = e.clientX + skewHack + delta + "px";
});

document.querySelectorAll('.faq-button').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isOpen = answer.classList.contains('open');

      // Kapat
      document.querySelectorAll('.faq-answer').forEach(el => el.classList.remove('open'));
      document.querySelectorAll('.faq-button').forEach(btn => btn.classList.remove('active'));

      // Aç
      if (!isOpen) {
        answer.classList.add('open');
        button.classList.add('active');
      }
    });
  });



  // Sayfa aşağı doğru inince ortaya çıkan minik ok 
  // Sayfa aşağı inince buton göster
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }

  // Yukarı kaydır
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
