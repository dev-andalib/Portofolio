class TypeWritter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  // Type Method
  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];
    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}<span class="blinking-cursor">|</span></span>`;

    // Initial type Speed
    let typeSpeed = 150;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init on DOM  Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWritter
  new TypeWritter(txtElement, words, wait);
}

//   =======================CAROUSEL=====================





$(document).ready(function () {
  $(".project_snap").slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 500,
    pauseOnFocus: false
  });

  $(".tools").slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
    verticalSwiping: true,
    
  });






// ==========================BTN SLIDE ======================
  $(function () {
    $(".stt").click(function () {
      $("body, html").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });



  // ========================== MENU SLIDE ======================

    $(".menulink").click(function (e) {

      e.preventDefault()


      if (this.hash !== "") {
        var hash = this.hash;
        $("html,body").animate(
          {
            scrollTop: $(hash).offset().top,
            
          },
          500,
          function () {
            window.location.hash = hash;
          }
        );
        
      }
      var vw = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      if (vw < 785) {
        $(".menu").hide();
      }
    });
  });



// _____________________________mixit_______________________________________________
  $(function () {
    var containerEl = document.querySelector(".mixit_main");
    var mixer = mixitup(containerEl, { animation: { duration: 1000 } });
  });
});





// ______________________________MENU TOGGLE_____________________________________

$(document).ready(function () {
  $(".menu__container").click(function () {
    $(".menu").toggle(500);
    $(".menu__container").toggleClass("bright");
    $(".fa-bars").toggleClass("bright2");
  });

  var vw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );

  if (vw < 785) {
    $(".menu").hide();
  }

  $(window).on("load", function () {
    vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (vw < 785) {
      $(".menu").hide();
    } else {
      $(".menu").show();
    }
  });

  $(window).on("resize", function () {
    vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (vw < 785) {
      $(".menu").hide();
    } else {
      $(".menu").show();
    }
  });
});
