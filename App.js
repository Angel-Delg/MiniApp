const $ = id => document.getElementById(id)

// Options de las tareas
const formRegister = $('form-user')
const namePerson = $('name-person')
const hobbyPerson = $('hobby-person')
const listPerson = $('list-person')
const tableBody = $('bodyTable')

const reload = document.querySelector('.loder')

formRegister.addEventListener('submit', event => {
    event.preventDefault()
    validateNote()
    window.location.reload()
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

    const request = await fetch('http://localhost:3001/api/notes',options)
    const users = await request.json()
}

const insertHTML = () => {
    return fetch('http://localhost:3001/api/notes')
    .then(response => response.json())
    .then(peoples => {

        let results = peoples.map( people => `
        <tr>
            <td>${people.userName}</td>
            <td>${people.content}</td>
            <td>${people.date}</td>
        </tr>
        `)
        tableBody.innerHTML += results
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

options.addEventListener('click', event => {
    console.log(event.target.value)

    let theme = event.target.value

    if(theme === 'Dark') return $App.setAttribute('data-theme','dark')
    if(theme === 'Light') return $App.setAttribute('data-theme','light')

})