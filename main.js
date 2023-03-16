//DOM
let tooltip = document.querySelector(".tooltip")
let shareBtn = document.querySelector(".btn-front")
let parent = document.querySelector(".parent")
let socials = document.querySelectorAll(".social-btn")
let media = 800

//Event Listeners
shareBtn.addEventListener("click", function () {
  let width = document.body.clientWidth
  if(width < media) {
    mbadd()
  }else {
    dshow()
  }
})

socials.forEach(btn => {
  btn.addEventListener("click", function () {
    let width = document.body.clientWidth
    if(width < media) {
      setTimeout(mbremove, 300)
    }else {
      setTimeout(dhide, 300)
    }
  })
})

//Functions
function mbadd() {
  parent.classList.add("mbshow")
}
function mbremove() {
  parent.classList.remove("mbshow")
}
function dshow() {
  tooltip.style.display = "block"
}
function dhide() {
  tooltip.style.display = "none"
}