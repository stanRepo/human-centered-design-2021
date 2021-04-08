// check every input type=number element
// fire event onchange
// 
const inputNumbers = document.querySelectorAll('input[type=number]')
const todoList = document.querySelector('#todoList')
const progessList = document.querySelector('#progressList')
const doneList = document.querySelector('#doneList')
const listItems = document.getElementsByTagName('li')
Object.values(listItems).map(item=> item.addEventListener('focus', handleItem))

function handleItem(e){
	const nextSection = e.target.parentElement.parentElement.nextElementSibling
  const prevSection = e.target.parentElement.parentElement.previousElementSibling
  const nextListItem = e.target.nextElementSibling
  const prevListItem = e.target.previousElementSibling

    e.target.addEventListener('keydown', e =>{
			if ((e.keyCode == 39 || e.keyCode == 68) && nextSection != null){
				nextSection.children[1].appendChild(e.target)
				e.target.focus()
			}
			if ((e.keyCode == 37 || e.keyCode == 65) && prevSection != null){
				prevSection.children[1].appendChild(e.target)
				e.target.focus()
			}	
			if((e.keyCode == 38 || e.keyCode == 87) && prevListItem != null){
				e.target.parentNode.insertBefore(e.target, prevListItem)
				e.target.focus()
			}
			if((e.keyCode == 40 || e.keyCode == 83) && nextListItem != null && e.target.nextElementSibling){
				e.target.parentNode.insertBefore(nextListItem, e.target)
				e.target.focus()
			}
		})
}

// Object.values(inputNumbers).map(item => item.addEventListener('change', handleDrag))

// function handleDrag(e){
// 	let listItem = e.target
// 	// console.dir(listItem);
// }