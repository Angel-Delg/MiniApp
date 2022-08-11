const $ = id => document.getElementById(id)

// Options de las tareas
const formRegister = $('form-user')
const namePerson = $('name-person')
const hobbyPerson = $('hobby-person')
const listPerson = $('list-person')


formRegister.addEventListener('submit', event => {
    event.preventDefault()
    validateNote()
})

const createNoteAndShow = (name,hobby) => {
    const listNote = `<li>Name:${name}, Hobby: ${hobby}</li>`
    listPerson.innerHTML += listNote 
}

const validateNote = () => {
    const name = namePerson.value.trim()
    const hobby = hobbyPerson.value.trim()
    // Creamo la nota y la agregamos al html
    createNoteAndShow(name,hobby);
} 


// Options of the dark mode
const options = $('options-theme')
const $App = $('App')

options.addEventListener('click', event => {
    console.log(event.target.value)

    let theme = event.target.value

    if(theme === 'Dark') return $App.setAttribute('data-theme','dark')
    if(theme === 'Light') return $App.setAttribute('data-theme','light')

})