const priceEl = document.querySelectorAll('[data-expand]')
const viewButton = document.querySelector('.view')
const openButton = document.querySelector('.open')
const closeButton = document.querySelector('.exit')
const container = document.querySelector('.container')
openButton.addEventListener('click', () => {
  container.classList.add('show')
})
closeButton.addEventListener('click', () => {
  container.classList.remove('show')
})
viewButton.addEventListener('click', () => {
  priceEl.forEach((item, index) => {
    item.classList.toggle('hide')
    if (!item.classList.contains('hide')) {
      viewButton.innerText = 'show less'
    } else {
      viewButton.innerText = 'view in full'
    }
  })
})
