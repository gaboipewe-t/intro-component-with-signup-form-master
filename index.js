const button = document.querySelector("#button")
// const firstName = document.querySelector("")

// form validation
let myForm = document.forms["info"]

let firstName = myForm["First Name"].value
let lastName = myForm["Last Name"].value
let email = myForm["email"].value
let password = myForm["password"].value


button.addEventListener('click', () => {
    if (firstName.length == 0) {
        // get the of the first name field
        let fNameSection = document.querySelector("#first-name-field")
        
        // create a new p element
        let p = document.createElement("p")
        p.textContent = "First Name must not be empty"
        p.style.color = "hsl(0, 100%, 74%)"
        p.style.textAlign = "right"
        p.style.margin = "0"
        p.style.fontSize = "0.75em"
        p.style.fontWeight = "500"

        // TODO: to import the italic 500 Poppins font-weight
        
        fNameSection.appendChild(p);
    }
})