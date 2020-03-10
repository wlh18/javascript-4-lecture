console.log('File connected')

const listItems = document.getElementsByTagName('li')

const headerText = document.querySelector('.title')

headerText.classList.add('dark-mode')

console.dir(headerText.innerText)

headerText.innerText = 'I am in control now'

headerText.style = 'color: red; text-decoration: underline'

headerText.style.fontSize = '16px'

const formButton = document.getElementById('story-button')

function changeColor(e) {
  e.preventDefault()
  e.stopPropagation()
  const contentHold = document.querySelector('.content-hold')
  const colorInput = document.getElementById('color-input')
  contentHold.style.background = colorInput.value
}

formButton.addEventListener('click', changeColor)

function addAPart(e) {
  e.stopPropagation()
  const newLi = document.createElement('li')
  const listItems = document.querySelectorAll('li')

  newLi.addEventListener('dblclick', function() {
    newLi.remove()
  })

  newLi.innerText = `ACT ${listItems.length + 1} is the GREATEST`

  const partList = document.getElementById('part-list')
  partList.appendChild(newLi)
}

document.getElementById('part-button').addEventListener('click', addAPart)
