const form = document.getElementsByTagName("form")[0]
const button = document.querySelector("#button")


styleMap = {
    "color" : "hsl(0, 100%, 74%)",
    "textAlign" : "right",
    "margin" : "0",
    "fontSize" : "0.75em",
    "fontWeight" : "500",
    "padding" : "0",
    "fontStyle" : "italic",
}



function createAlertText(text) {
    let p = document.createElement("p")
    let pStyle = p.style
    pStyle.color = styleMap["color"]
    pStyle.textAlign = styleMap["textAlign"]
    pStyle.margin = styleMap["margin"]
    pStyle.fontSize = styleMap["fontSize"]
    pStyle.fontWeight = styleMap["fontWeight"]
    pStyle.padding = styleMap["padding"]
    pStyle.fontStyle = styleMap["fontStyle"]
    p.textContent = text

    return p
}

function insertAlertText(parentElement, p) {
    parentElement.appendChild(p)
}

function insertErrorIcon(parentElement, iconPath) {
    // get the input tag
    let inputElement = parentElement.firstElementChild

    // clear the place holder text of the input element
    inputElement.placeholder = ""


    // insert the icon
    inputElement.style.backgroundImage = `url(${iconPath})`
    inputElement.style.backgroundRepeat = "no-repeat"
    inputElement.style.backgroundPosition = "95% 50%"
    // change the color of the border
    inputElement.style.border = "2px solid hsl(0, 100%, 74%)"
}


function validate(parentElement) {
    let validated = true
    for (let child of parentElement.children) {
        if (child.className === "form-field") {
            const inputElement = child.firstElementChild
            const input = inputElement.value

            if (inputElement.name == 'email' && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input) === false) {
                alertText = createAlertText("Looks like this is not an email")
                insertAlertText(child, alertText)
                insertErrorIcon(child, "/images/icon-error.svg")

                // inserting the email hint text "email@example/com"
                inputElement.placeholder = "email@example/com"
                inputElement.style.setProperty("--c", "hsl(0, 100%, 74%)")

                validated = false
            } else {
                if (input.length == 0) {
                    alertText = createAlertText(inputElement.name + " cannot be empty")
                    insertAlertText(child, alertText)

                    insertErrorIcon(child, "/images/icon-error.svg")
                    validated = false
                }
            }

        }

    }
    return validated
}



let clicked = false

button.addEventListener('click', () => {
    button.style.opacity = "0.6"
    if (!clicked) {
        clicked = true
        if (validate(form)) {
            // redirect to a new web page if input is validated
            window.location.href = "http://frontendmentor.io";
        }
    }
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