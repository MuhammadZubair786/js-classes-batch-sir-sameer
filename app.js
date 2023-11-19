
// function ChangeText(colorName) {
//     console.log(colorName)
//     var text = document.getElementById("head")
//     text.className = colorName


// }

// function ChangeSize(check) {
//     if (check == 0) {
//         var text = document.getElementById("head")
//         var newtext = text.style.fontSize.split("px")
//         var newFontSize = Number(newtext[0]) + 5 + "px"
//         text.style.fontSize = newFontSize

//     }
//     else if (check == 1) {

//         var text = document.getElementById("head")
//         var newtext = text.style.fontSize.split("px")
//         var newFontSize = Number(newtext[0]) - 5 + "px"
//         text.style.fontSize = newFontSize
//     }


// }

var apidata = [
    "Hello js ",
    "start ma to easy tei",
    "ab halata kharab ho gya ha ",
    "data set ",
    "set data",
    "Hello js ",
    "start ma to easy tei",
    "ab halata kharab ho gya ha ",
    "data set ",
    "set data",
]

var headingText = document.getElementsByTagName("h1")
console.log(headingText)


function SetData(){
    for(var j=0;j<headingText.length;j++){
        headingText[j].innerText  = apidata[j]
    }

}

// function SetData(){

//     for(var j=0;j<headingText.length;j++){
//         headingText[j].innerText  = apidata[j]
//     }

// }