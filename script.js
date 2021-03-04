let firstName = document.querySelector('#first-name')
let lastName = document.querySelector('#last-name')
let country = document.querySelector('#country')
let score = document.querySelector('#score')
let submit = document.querySelector('#submit')
let contArr = []


submit.addEventListener('click', ()=>{
  let bigContainer = document.querySelector('.container')

  let container = document.createElement('DIV')
  container.className = 'small-container'
  

  let btnCont = document.createElement('DIV')
  btnCont.className = 'control-cont'

  let delBtn = document.createElement('BUTTON')
  delBtn.textContent = 'D'  
  delBtn.addEventListener('click', ()=>{
    bigContainer.removeChild(container)
    contArr.splice(contArr.indexOf(container), 1)
  })


  let addBtn = document.createElement('BUTTON')
  addBtn.className = 'btn'
  addBtn.textContent = '+5'
  addBtn.addEventListener('click', ()=>{
    addBtn.parentNode.previousSibling.textContent = parseInt(addBtn.parentNode.previousSibling.textContent) + 5
  })


  let subBtn = document.createElement('BUTTON')
  subBtn.textContent = '-5'
  subBtn.addEventListener('click', ()=>{
    subBtn.parentNode.previousSibling.textContent = parseInt(subBtn.parentNode.previousSibling.textContent) - 5
  })

  btnCont.appendChild(delBtn)
  btnCont.appendChild(addBtn)
  btnCont.appendChild(subBtn)

  let nameCont = document.createElement('DIV')
  nameCont.className = 'name-cont'
  nameCont.classList.add('item')
  nameCont.textContent = `${firstName.value.toUpperCase()} ${lastName.value.toUpperCase()}`
  
  let countryCont = document.createElement('DIV')
  countryCont.className = 'country-cont'
  countryCont.classList.add('item')
  countryCont.textContent = `${country.value.toUpperCase()}`    

  let scoreCont = document.createElement('DIV')
  scoreCont.className = 'score-cont'
  scoreCont.classList.add('item')
  scoreCont.textContent = `${score.value}`
  
  container.appendChild(nameCont)
  container.appendChild(countryCont)
  container.appendChild(scoreCont)
  container.appendChild(btnCont)

  contArr.push(container)

  contArr.sort((a,b)=>{
    let prev = parseInt(a.childNodes[2].textContent)
    let next = parseInt(b.childNodes[2].textContent)
    return prev == next ? 0 : (prev > next) ? 1 : -1
  })
  for(let i of contArr) {
    bigContainer.appendChild(i)
  }
  console.log(contArr.length)

  firstName.value =''
  lastName.value=''

  country.value=''
  score.value=''

  //bigContainer.appendChild(container)

  

  /**let childNode = bigContainer.childNodes;
  let sorter = [...childNode]
  sorter.shift()
  if (sorter.length > 1) {
    sorter.sort((a,b)=>{
      return a.childNodes[2].textContent == b.childNodes[2].textContent ? 0 : (a.childNodes[2].textContent > b.childNodes[2].textContent ? 1 : -1)
    })
  }*/
})


  

  



