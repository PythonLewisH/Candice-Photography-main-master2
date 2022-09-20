
// Creates a new div called lightbox with an id of lightbox and appends it to the body of the doc
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)







// finds all the .gallery-img elements and adds a click listener, if element is clicked the .active class is added to the lightbox. It also then adds the image and close button to the lightbox
const close = document.querySelector('.close')
const images = document.querySelectorAll('.gallery-img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    console.log(image.src);
    if (image.src == "https://candice-photography.herokuapp.com/static/assets/photos/1.jpg") {
    img.src = "https://i.ibb.co/10yPyJG/1.jpg";
    }
    else if (image.src == "https://candice-photography.herokuapp.com/static/assets/photos/Dotty.jpg") {
    img.src = "https://i.ibb.co/qxkTS3z/Dotty.jpg"
    }
    else if (image.src == "https://candice-photography.herokuapp.com/static/assets/photos/Dottyderpy.jpg") {
    img.src = "https://i.ibb.co/vBLSbTY/Dottyderpy.jpg"
    }
    else {
    img.src = image.src;
    }

    img.classList.add("main-image")
    const btn = document.createElement('img')
    btn.src = close.src
    btn.classList.add("close-image")
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
    lightbox.appendChild(btn)

    btn.addEventListener('click', e => {
      lightbox.classList.remove('active')
    })
  })
})

// if somewhere outside the image is clicked, the actice class is removed.
close.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')

})

// Photography Selector
// Get the container element
var btnContainer = document.getElementById("selector-div")

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("photo-btn")

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-btn");
    current[0].className = current[0].className.replace(" active-btn", "");
    this.className += " active-btn";
  });
}

// Hide photos that are not in selection

const lifestyleDivs = document.getElementsByClassName("lifestyle")
const petsDivs = document.getElementsByClassName("pet")
const productDivs = document.getElementsByClassName("product")
const allDivs = document.getElementsByClassName("gallery-img")


const allBtn = document.getElementById("all-btn")
const lifestyleBtn = document.getElementById("lifestyle-btn")
const petsBtn = document.getElementById("pets-btn")
const productBtn = document.getElementById("product-btn")

// when user clicks product shows images with product tag
productBtn.onclick = function () {
  for (var i = 0; i < productDivs.length; i++) {
    productDivs[i].style.display = "block"
  }


  for (var i = 0; i < petsDivs.length; i++) {
    if (petsDivs[i].classList.contains("product")) {
      continue
    }
    petsDivs[i].style.display ="none"
  }

  for (var i = 0; i < lifestyleDivs.length; i++) {
    if (lifestyleDivs[i].classList.contains("product")) {
      continue
    }
    lifestyleDivs[i].style.display ="none"
  }
}


// when user clicks lifestyle shows images with product tag
lifestyleBtn.onclick = function () {
  for (var i = 0; i < lifestyleDivs.length; i++) {
    lifestyleDivs[i].style.display = "block"
  }

  for (var i = 0; i < petsDivs.length; i++) {
    if (petsDivs[i].classList.contains("lifestyle")) {
      continue
    }
    petsDivs[i].style.display ="none"
  }

  for (var i = 0; i < productDivs.length; i++) {
    if (productDivs[i].classList.contains("lifestyle")) {
      continue
    }
    productDivs[i].style.display ="none"
  }
}


// when user clicks pets shows images with product tag
petsBtn.onclick = function () {
  for (var i = 0; i < petsDivs.length; i++) {
    petsDivs[i].style.display = "block"
  }

  for (var i = 0; i < lifestyleDivs.length; i++) {
    if (lifestyleDivs[i].classList.contains("pet")) {
      continue
    }
    lifestyleDivs[i].style.display ="none"
  }

  for (var i = 0; i < productDivs.length; i++) {
    if (productDivs[i].classList.contains("pet")) {
      continue
    }
    productDivs[i].style.display ="none"
  }
}

// when user clicks all shows images with all tags

allBtn.onclick = function () {
  for (var i = 0; i < allDivs.length; i++) {
    allDivs[i].style.display = "block"
  }
}