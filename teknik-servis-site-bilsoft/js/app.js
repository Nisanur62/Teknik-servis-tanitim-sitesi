
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
