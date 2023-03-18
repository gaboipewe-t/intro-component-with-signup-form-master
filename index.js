const form = document.getElementsByTagName("form")[0]
const button = document.querySelector("#button")


styleMap = {
    "color" : "hsl(0, 100%, 74%)",
    "textAlign" : "right",
    "margin" : "0",
    "fontSize" : "0.75em",
    "fontWeight" : "500",
    "padding" : "0",
}


    // methods
function createAlertText(text) {
    let p = document.createElement("p")
    let pStyle = p.style
    pStyle.color = styleMap["color"]
    pStyle.textAlign = styleMap["textAlign"]
    pStyle.margin = styleMap["margin"]
    pStyle.fontSize = styleMap["fontSize"]
    pStyle.fontWeight = styleMap["fontWeight"]
    pStyle.padding = styleMap["padding"]
    p.textContent = text

    return p
}

function insertAlertText(parentElement, p) {
    parentElement.appendChild(p)
}

function insertErrorIcon(parentElement, icon) {
    // get the input tag
    let inputElement = parentElement.firstElementChild
    // insert the icon
    inputElement.value = icon
    // right align
    inputElement.style.textAlign = "right"
}

 // parentElement is the form tag
function validate(parentElement) {
    let validated = true
    // // get the input tag
    // let inputElement = parentElement.firstElementChild
    // // get the input
    // let input = inputElement.value

    // iterate over the sections and validate the input

    // TODO: To refactor the loop, add the icon error and final touches
    for (let childIndex = 0; childIndex < (parentElement.childElementCount - 3); childIndex++) {
        let child = parentElement.childNodes.item(childIndex)
        const inputElement = child.firstElementChild
        const input = inputElement.value
        const ic = "icon/path/"

        if (inputElement.name == 'email') {
            if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input))) {
                alertText = createAlertText("Looks like this is not an email")
                insertAlertText(child, alertText)
                insertErrorIcon(child, ic)

                // inserting the email hint text "email@example/com"
                inputElement.style.textAlign = "none"

                // create a span element
                let span = document.createElement("span")
                span.innerHTML = "email@example/com"

                let div = document.createElement("div")
                div.appendChild(span)
                let dummyElement = document.createElement("span")
                dummyElement.innerHTML = ic
                div.appendChild(dummyElement)

                let divStyle = div.style
                //  TO ADJUST THESE STYLES ACCORDINGLY
                divStyle.margin = "0"
                divStyle.padding = "100%"
                divStyle.width = "100%"
                divStyle.height = "100%"
                // ABOVE
                divStyle.display = "flex"
                divStyle.flexDirection = "row"
                divStyle.justifyContent = "space-between"

                // insert div into the input field
                inputElement.value = div

                validated = false
            }
        } else {
            if (input.length == 0) {
                alertText = createAlertText(inputElement.name + " cannot be empty")
                insertAlertText(child, alertText)

                insertErrorIcon(child, ic)
                validated = false
            }
        }

    }

    return validated
}





button.addEventListener('click', () => {
    validate(form)
})

















































// const button = document.querySelector("#button")

// // form validation
// const myForm = document.forms["info"]

// let firstName = myForm["First Name"].value
// let lastName = myForm["Last Name"].value
// let email = myForm["email"].value
// let password = myForm["password"].value

// let section = document.querySelector("#first-name-field")

// button.addEventListener('click', () => {
//     // let input = section.firstElementChild
//     // console.log(input.name)
//     // let plcHolder = "My name is thobo"
//     // input.value = plcHolder
//     validateFirstName(firstName)
//     // validateLastName(lastName)
//     // validateEmail(email)
//     // validatePassword(password)
// })


// // alternative soluton
// // 1. use of classes and oop

// let styleMap = {
//     "color" : "hsl(0, 100%, 74%)",
//     "textAlign" : "right",
//     "margin" : "0",
//     "fontSize" : "0.75em",
//     "fontWeight" : "500",
//     "padding" : "0",
// }


// function validateFirstName(input) {
//     if (input.length == 0) {
//         // get the of the first name field
//         let fNameSection = document.querySelector("#first-name-field")
        
//         // create a new p element
//         let p = document.createElement("p")
//         let pStyle = p.style
//         pStyle.color = styleMap.color
//         pStyle.textAlign = styleMap.textAlign
//         pStyle.margin = styleMap.margin
//         pStyle.fontSize = styleMap.fontSize
//         pStyle.fontWeight = styleMap.fontWeight
//         pStyle.padding = styleMap.padding
//         p.textContent = "First Name must not be empty"

//         // TODO: to import the italic 500 Poppins font-weight
//         fNameSection.appendChild(p);

//     }
// }

// function validateLastName(input) {
//     if (input.length == 0) {
//         let LnameSection = document.querySelector("#last-name-field")

//         let p = document.createElement("p")
//         let pStyle = p.style
//         pStyle.color = styleMap.color
//         pStyle.textAlign = styleMap.textAlign
//         pStyle.margin = styleMap.margin
//         pStyle.fontSize = styleMap.fontSize
//         pStyle.fontWeight = styleMap.fontWeight
//         pStyle.padding = styleMap.padding
//         p.textContent = "Last Name must not be empty"

//         LnameSection.appendChild(p)
//     }
// }

// function validateEmail(input) {
//     let emailSection = document.querySelector("#email-field")
//     let validated = false

//     if (input.length == 0) {
//         let p = document.createElement("p")
//         let pStyle = p.style
//         pStyle.color = styleMap.color
//         pStyle.textAlign = styleMap.textAlign
//         pStyle.margin = styleMap.margin
//         pStyle.fontSize = styleMap.fontSize
//         pStyle.fontWeight = styleMap.fontWeight
//         pStyle.padding = styleMap.padding
//         p.textContent = "Email must not be empty"
//     } else if (input.length != 0 && input !== "email regex") {
//         // to use email regex
//         let p = document.createElement("p")
//         let pStyle = p.style
//         pStyle.color = styleMap.color
//         pStyle.textAlign = styleMap.textAlign
//         pStyle.margin = styleMap.margin
//         pStyle.fontSize = styleMap.fontSize
//         pStyle.fontWeight = styleMap.fontWeight
//         pStyle.padding = styleMap.padding
//         p.textContent = "Looks like this is not an email"
//     } else {
//         validated = true
//     }

//     if (!validated) {
//         emailSection.appendChild(p)
//         return;
//     }
// }

// function validatePassword(input) {
//     let passwordSection = document.querySelector("#password-field")
//     if (input.length == 0) {
//         let p = document.createElement("p")
//         let pStyle = p.style
//         pStyle.color = styleMap.color
//         pStyle.textAlign = styleMap.textAlign
//         pStyle.margin = styleMap.margin
//         pStyle.fontSize = styleMap.fontSize
//         pStyle.fontWeight = styleMap.fontWeight
//         pStyle.padding = styleMap.padding
//         p.textContent = "Password must not be empty"

//         passwordSection.appendChild(p)
//     }
// }

// // to add error icon and right align it