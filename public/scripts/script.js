const openPopup = document.querySelector('#open-popup')
let newElement
const popup = document.querySelector('#popup')
const closePopup = document.querySelector('#close-popup')
const cover = document.querySelector('#cover')
const addText = document.querySelector('#add-text')
let thereIsNewEl = false
let els = 0

function displayBlock() {
	popup.style.display = 'block'
	cover.style.display = 'block'
	console.log('Hello WOrld')
}

function called() {
	const time = setInterval(function () {
		newElement.addEventListener('click', displayBlock)
	}, 200)
}

openPopup.addEventListener('click', displayBlock)
console.log(thereIsNewEl)
closePopup.addEventListener('click', () => {
	popup.style.display = 'none'
	cover.style.display = 'none'
})

function addNewAddEl() {
	thereIsNewEl = true
	const container = document.querySelector('#container')
	const el = document.querySelectorAll('.el')
	els++
	const newEl = `
	<div class="el">
		<button class="add-el" id="open-popup-1"><i class="fas fa-plus"></i></button>
	</div>
	`
	container.innerHTML += newEl
	newElement = document.querySelector('#open-popup-1')
	if (els > 1) {
		el[el.length].id = ''
		newElement.id = 'open-popup'
	}
	called()
}

addText.addEventListener('click', () => {
	addNewAddEl()
	console.log('TEXT ADDED! No ACTUALLY NOT ADDED! :D')
})
