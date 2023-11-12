// function add(a, b) {
//     // console.log(a + b)
//     return a+b
// }

// function sub(a, b) {
//     // console.log(a - b)
//     return a-b
// }


// var a = +prompt("Enter First Number")
// var b = +prompt("Enter Second Number")
// var op = prompt("Enter Operation")
// if (op == "+") {
//    var res =  add(a, b)
//    console.log(res)
// //    res+5

// }
// else if (op == "-") {
//     var res =   sub(a, b)
//     console.log(res)
// }

// else{
//     console.log("enter correct operator")
// }

// function sum({a=4,b=5,c=10}){ //default parameters
//     console.log(a)
//     console.log(a+b+c) //15

//     4+10+10//24
//     // 9

//     //same

// }
// var a = 5;
// var b = 10;
// sum(b=10) // 5,10 //19

// sum(a) // 20

// sum(b) //25

// sum(0,0) //1
//arr


//  var date = new Date()
//  console.log(date)
//  console.log(date.getHours())
//  if(date.getHours()>12){
//     console.log("PM")
//  }
//  else{
//     console.log("AM")
//  }
//  console.log(date.getTime())
//  console.log(date.getTime()/3600)

//  60*60*1000


//  if(date.getDate()<15){
//     console.log("first fifteen days")
//  }
//  else{
//     console.log("last ")
//  }


// var date =new  Date("04 nov 2023")
// console.log(date.getTime()) //time 

// var tODAY = new Date()
// console.log(tODAY)

// var diff =tODAY.getTime()-date.getTime()

// var getday = diff/(1000*60*60*24)
// console.log(Math.floor(getday))
// var month = ["jan","feb","march","april","may","june","july","aug","sep","oct","nov","dec"]

// var byear = +prompt("enter back year")
// var date =new  Date()
// console.log(date.getFullYear())
// var setdata = date.getFullYear()-byear
// console.log(date.getMonth().toString())
// var getmonthindex = date.getMonth().toString()
// console.log(getmonthindex)
// var newdate =new Date(date.getDate().toString() +  month[getmonthindex].toString() +  setdata.toString())
// console.log(newdate)


// console.log(setdata)


// simple function
// function FullName(FIRSTNAME,LASTNAME){
//     console.log(FIRSTNAME+" "+LASTNAME)
// }

// var f_name = prompt("Enter First name")
// var l_name = prompt("Enter Last name")

// FullName(f_name,l_name)


// function Square(n){
//     return n*n
// }

// var res = Square(5)
// console.log(res)



// function Define
// function userWelcome(){
//     alert('Welcome app')
// }

// function Submit(){
//     let name = document.getElementById("name")
//     let nameText= document.getElementById("nameText")

//     let email = document.getElementById("email")
//     let emailText2 = document.getElementById("emailText")

//     if(name.value.length==0){
//         console.log(nameText)
//         nameText.style.display="inline"
//         name.classList="redborder"

//         // alert("plz enter name")
//     }
//     else{
//         nameText.style.display="none"
//         name.classList=""
//     }
//     if(email.value.length==0){
//         console.log(email.classList)
//         email.classList="redborder"
//         emailText2.style.display="inline"
//     }
//     else{
//         email.classList=""
//         emailText2.style.display="none"
//     }

//     if(name.value.length!=0 && email.value.length!=0 ){
//         alert("submit your data")
//     }




//     console.log(name.value,email.value)

// }


function SubmitData() {

    let btn = document.getElementById("btn")
    let gif = document.getElementById("gif")

    let name = document.getElementById("name") //input
    let nameText = document.getElementById("nametext") //error text


    let email = document.getElementById("email")
    let emailText = document.getElementById("emailtext")

    let password = document.getElementById("password")
    let passwordText = document.getElementById("passwordtext")

    // if (name.value.length == 0) {
    //     name.classList = "redborder"
    //     nameText.style.display="block"
    // }
    // else {
    //     name.classList = "blackborder"
    //     nameText.style.display="none"
    // }
    // if (email.value.length == 0) {
    //     email.classList = "redborder"
    //     emailText.style.display="block"
    // }
    // else {
    //     email.classList = "blackborder"
    //     emailText.style.display="none"
    // }
    // if (password.value.length == 0) {
    //     password.classList = "redborder"
    //     passwordText.style.display="block"
    // }
    // else {
    //     password.classList = "blackborder"
    //     passwordText.style.display="none"
    // }

    if (name.value.length == 0) {
        name.classList = "redborder"
        nameText.style.display = "block"
    }
    // else {
    //     name.classList = "blackborder"
    //     nameText.style.display="none"
    // }
    else if (email.value.length == 0) {
        name.classList = "blackborder"
        nameText.style.display = "none"
        email.classList = "redborder"
        emailText.style.display = "block"
    }
    // else {
    //     email.classList = "blackborder"
    //     emailText.style.display="none"
    // }
    else if (password.value.length == 0) {
        email.classList = "blackborder"
        emailText.style.display = "none"
        password.classList = "redborder"
        passwordText.style.display = "block"
    }
    // else {
    //     password.classList = "blackborder"
    //     passwordText.style.display="none"
    // }
    if (email.value.length != 0 && name.value.length != 0 && password.value.length != 0) {
        
        name.classList = "blackborder"
        nameText.style.display = "none"
        email.classList = "blackborder"
        emailText.style.display = "none"
        password.classList = "blackborder"
        passwordText.style.display = "none"
        btn.style.display = "none"
        gif.style.display = "inline"
        
        setTimeout(() => {
            gif.style.display = "none"
            btn.style.display="inline"
            name.value=""
            email.value=""
            password.value=""  
            name.classList="firstBorder"      
            email.classList="firstBorder"      
            name.classList="firstBorder"      


            alert("Submit Your Data")
        }, 5000)

    }


}