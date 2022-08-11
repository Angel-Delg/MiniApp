const $ = id => document.getElementById(id)

// Options de las tareas
const formRegister = $('form-user')
const namePerson = $('name-person')
const hobbyPerson = $('hobby-person')
const listPerson = $('list-person')


formRegister.addEventListener('submit', event => {
    event.preventDefault()
    validateNote()
    insertHTML()
})

const createNoteAndShow = async (name,hobby) => {

    const options = {
        method:"POST",
        headers:{
            "content-type":"application/json; charset=utf-8"
        },
        body:JSON.stringify({
          userName:name,
          content:hobby
        })
    }

    const request = await fetch('https://obscure-plateau-68109.herokuapp.com/api/comments',options)
    const users = await request.json()

    // Insertamos en la pagina
}

const insertHTML = () => {
    // Hacer una peticion get de todas las notas
    return fetch('https://obscure-plateau-68109.herokuapp.com/api/comments')
    .then(response => response.json())
    .then(peoples => {
        console.log(peoples)

        let results = peoples.map( people => `<li>Name:${people.userName} Hobby: ${people.content}</li>`)
        listPerson.innerHTML += results
    })
}

insertHTML()

const validateNote = () => {
    const name = namePerson.value.trim()
    const hobby = hobbyPerson.value.trim()
    // Creamo la nota y la agregamos al html
    createNoteAndShow(name,hobby);
    
    hobbyPerson.value = ""
    namePerson.value = ""
} 

// Options of the dark mode
const options = $('options-theme')
const $App = $('App')

options.addEventListener('select', event => {
    console.log(event.target.value)

    let theme = event.target.value

    if(theme === 'Dark') return $App.setAttribute('data-theme','dark')
    if(theme === 'Light') return $App.setAttribute('data-theme','light')

})