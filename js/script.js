const hamburger = document.querySelector('#hamburger')
const close_modal = document.querySelector('#close_modal')

const menu = document.querySelector('.modal')

hamburger.addEventListener('click', () => {
  menu.style.display = 'flex'
})

close_modal.addEventListener('click', () => {
  menu.style.display = 'none'
})
