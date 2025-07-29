
const toggleBtn = document.getElementById("togglebtn");
const navlinks = document.getElementById("navitems");
const links = navlinks.querySelectorAll(".navlink");

toggleBtn.addEventListener("click", function () {
    navlinks.classList.toggle("show");
})

function btnclick() {
    navlinks.classList.remove("show");
    console.log("btn clicked")
}

links.forEach((items) => {
    items.addEventListener("click", btnclick)
})


const contactform = document.getElementById("contactForm");
const name = document.getElementById('name')
const email = document.getElementById('email');
const service = document.getElementById('service');
const budget = document.getElementById('budget');
const message = document.getElementById('message');
const check = document.getElementById('checkbox');

contactform.addEventListener('submit', function (e) {

  e.preventDefault();

  let isValid = true;

  if (name.value === "") {
    document.getElementById('nameError').innerText = "Name is required..";

    isValid = false;
  }
  else if (name.value.trim().length < 3) {
    document.getElementById('nameError').innerText = "Enter at least 3 characters..";
    isValid = false;
  }
  else {
    document.getElementById('nameError').innerText = "";
  }

  if (email.value === "") {
    document.getElementById('emailError').innerText = "Email is required..";
    isValid = false;
  }
  else {
    document.getElementById('emailError').innerText = "";
  }

  if (service.value === "") {
    document.getElementById('serviceError').innerText = "Select any service...";
    isValid = false;
  }
  else {
    document.getElementById('serviceError').innerText = "";
  }

  if (budget.value === "") {
    document.getElementById('budgetError').innerText = "Select a budget...";
    isValid = false;
  }
  else {
    document.getElementById('budgetError').innerText = "";
  }
  if (message.value === "") {
    document.getElementById("messageError").innerText = "Message is required";
    isValid = false;
  }
  else if (message.value.trim().length < 30) {
    document.getElementById("messageError").innerText = "Enter at least 30 characters";
    isValid = false;
  }
  else {
    document.getElementById("messageError").innerText = "";
  }
  if (!check.checked) {
    document.getElementById("checkError").innerText = "Please check this box before submitting...";
    isValid = false;
  }
  else {
    document.getElementById("checkError").innerText = "";
  }

  if (isValid) {
    alert("Form submitted successfully!");
    contactForm.reset();
  }


})


const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
});



particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
// stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);