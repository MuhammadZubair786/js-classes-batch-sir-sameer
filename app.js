// var text1 = "Txt 1";
// var text1 = "Txt 2";
// var finaltxt = text1+text1
// // console.log(finaltxt)
// // alert("dsgfhg")
// console.warn("warning")
// console.error("error")
// console.clear()

// +=> string to numbner

// var num1 =+prompt("Enter Number",0)
// var num2 =+prompt("Enter Number",0)
// var res = num1 + num2
// var res = num1 - num2

// var a = prompt("Enter Number",0)
// num + num2
// console.log(res)

// var batting = prompt("Enter BATTER NAME")
// if(batting.toLowerCase()=="baber"){
//     console.log("pakka stump ho gya ")
// }
// else{
//     console.log("pata nhi kiya ho gya")
// }

// var team = prompt("Enter tEAM nAME")
// if(team.toLowerCase()=="afg"){
//     console.log("pak win")
// }
// else{
//     console.log(team +" is win")
// }

// var number = prompt("Enter Number")
// if(number%2==0){
//     console.log(number + "is Even")
// }
// else{
//     console.log(number + "is odd")
// }

// rain  => 80%
// final
// draw

// toos=>batting

// ind =>batting
// sri =>win

// sri=>batting
// ind=>win

var rain_per = +prompt("Enter Rain Per")
// 
if (rain_per >= 80) {
    console.log("Match Draw")
}
else {
    console.log("enter toss win team")
    var toss_win = prompt("Enter Toss Win")
    if (toss_win == "ind") {
        console.log("win srilanka")
    }
    else if (toss_win == "sri") {
        console.log("win ind")

    }
    else {
        console.log(toss_win + "bhai ya team ha hei nhi")
    }
}






