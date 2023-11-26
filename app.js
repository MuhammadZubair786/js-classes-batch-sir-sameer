// let div = document.getElementsByTagName("div") //array

// console.log(div[0].innerHTML)
// console.log(div[0].innerText)

var firstUser = document.getElementById("firstUser")
var SecondUser = document.getElementById("secondUser")

// var name1 = prompt("enter name first user")
// var name2 = prompt("enter name first user")

var game = document.getElementById("game")

var check = 0

var td = document.getElementsByTagName("td")

var winStatus = false



//user value 
function StartGame() {

    if (firstUser.value == "" && SecondUser.value == "") {
        alert("plz enter corect data")
    }
    else if (firstUser.value.toString().toLowerCase() == "x" || firstUser.value.toString().toLowerCase() == "0") {
        if (firstUser.value.toString().toLowerCase() == "x" && SecondUser.value.toString().toLowerCase() == "0") {
            console.log("get correct data")
            game.style.display = "block"


        }
        else if (firstUser.value.toString().toLowerCase() == "0" && SecondUser.value.toString().toLowerCase() == "x") {
            console.log("get correct data")
            game.style.display = "block"



        }
        else {
            console.log("second value incorrect")
        }

    }
    else {
        console.log("enter correct data in first field")
    }


}

function Check(t) {
    if (check == 0 && t.innerText == "" && winStatus == false) {
        t.innerText = firstUser.value
        t.style.backgroundColor="green"
        CheckGame()

        check = 1
    }
    else if (check == 1 && t.innerText == ""  && winStatus == false) {
        t.innerText = SecondUser.value
        t.style.backgroundColor="pink"
        check = 0
        CheckGame()
        // setTimeout(() => (CheckGame(), 3000))



    }
    else if(winStatus==true){
        alert("plz restart game")
        window.location.reload()
    }
  
}

function CheckGame() {
    let x = firstUser.value.toString().toLowerCase()
    let y = SecondUser.value.toString().toLowerCase()
    console.log(x)
    console.log(y)


    

    if (
        td[0].innerText == x &&
        td[1].innerText == x &&
        td[2].innerText == x ||
        td[3].innerText == x &&
        td[4].innerText == x &&
        td[5].innerText == x ||
        td[6].innerText == x &&
        td[7].innerText == x &&
        td[8].innerText == x ||
        td[0].innerText == x &&
        td[3].innerText == x &&
        td[6].innerText == x ||
        td[1].innerText == x &&
        td[4].innerText == x &&
        td[7].innerText == x ||
        td[2].innerText == x &&
        td[5].innerText == x &&
        td[8].innerText == x ||
        td[0].innerText == x &&
        td[4].innerText == x &&
        td[8].innerText == x ||
        td[2].innerText == x &&
        td[4].innerText == x &&
        td[6].innerText == x




    ) {
        // td[0].style.textDecoration = "line-through"
        // td[1].style.textDecoration = "line-through"
        // td[2].style.textDecoration = "line-through"
        winStatus=true
        alert("1 user win")
        



    }
    else if (
        td[0].innerText == y &&
        td[1].innerText == y &&
        td[2].innerText == y ||
        td[3].innerText == y &&
        td[4].innerText == y &&
        td[5].innerText == y ||
        td[6].innerText == y &&
        td[7].innerText == y &&
        td[8].innerText == y ||
        td[0].innerText == y &&
        td[3].innerText == y &&
        td[6].innerText == y ||
        td[1].innerText == y &&
        td[4].innerText == y &&
        td[7].innerText == y ||
        td[2].innerText == y &&
        td[5].innerText == y &&
        td[8].innerText == y ||
        td[0].innerText == y &&
        td[4].innerText == y &&
        td[8].innerText == y ||
        td[2].innerText == y &&
        td[4].innerText == y &&
        td[6].innerText == y



    ) {
        // td[0].style.textDecoration = "line-through"
        // td[1].style.textDecoration = "line-through"
        // td[2].style.textDecoration = "line-through"

        winStatus=true

        alert( " 2 user win")

    }
   


}