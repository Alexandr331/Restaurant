const hamburger = document.querySelector('#hamburger')
const close_modal = document.querySelector('#close_modal')
const nav = document.querySelectorAll('.modal_link')

const menu = document.querySelector('.modal')

hamburger.addEventListener('click', () => {
  menu.style.display = 'flex'
})

close_modal.addEventListener('click', () => {
  menu.style.display = 'none'
})


nav.forEach((el) => {
  el.addEventListener('click', () => {
    menu.style.display = 'none'
  })
})