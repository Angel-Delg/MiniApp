// Prueba con api fake
const $ = id => document.getElementById(id)

const $form = $('form')
const $input = $('text')
const $button = $('button')
const $results = $('results')

console.log($form)
console.log($input)
console.log($button)
console.log($results)

const requestApiResponse = (params) => {
    return fetch(`https://jsonplaceholder.typicode.com/${params}`)
    .then(resolve => resolve.json())
    .catch(error => console.log(error))
}

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    const {value} = $input
    const response = await requestApiResponse(value)

    // Usamos setAttribute para agregar atributos a etiquetas html 
    $button.setAttribute('disabled','')
    $button.setAttribute('aria-busy','true')

    if(response){
        $results.innerHTML = JSON.stringify(response,null,2)
    }

    $button.removeAttribute('disabled')
    $button.removeAttribute('aria-busy')
    
})