// var Studentlist = ["asad","ali","baber","saud shakeel"]

// console.log(Studentlist)
// console.log (typeof(Studentlist))
// console.log(Studentlist[0])
// console.log(Studentlist[3]) //baber

// console.log(Studentlist)

// // website 4
// // 1

// // push(Add new data in  last )
// let b= Studentlist.push("Naseem Shah","Hassan Ali") //4 ,5
// console.log(b)
// console.log(Studentlist)

// //last remove (pop)

// let remove = Studentlist.pop() //store last remove data
// console.log(remove)
// console.log(Studentlist)

// //unshift first add 
// Studentlist.unshift("Abdullah Shafiq","Rizwan")
// console.log(Studentlist)

// //first remove 
// Studentlist.shift()
// console.log(Studentlist)

// shift//first remove

// var Studentlist = ["asad","ali","baber","saud shakeel"]

// slice(stat,end-1)
// 0,1
// 0,2

// slice=>data get only 
// Studentlist[1]
// var data = Studentlist.slice(1,2)
// console.log(data)


// splice/ add ,remove

// Studentlist.splice(2,0,"Imad","aMIR")
// console.log(Studentlist)

// var SemiList = ["Pakistan", "India", "NZ", "SA"]
// var startingIndex = prompt(SemiList[0]+'\n'+SemiList[1]+'\n'+SemiList[2]+'\n'+SemiList[3], "enter remove first")
// if (SemiList.length > startingIndex) {
//     SemiList.splice(startingIndex - 1, 1)
//     var startingIndex = prompt(`${SemiList[0]}\n${SemiList[1]}\n${SemiList[2]}`, "enter remove Second ")
//     if (SemiList.length > startingIndex) {
//         SemiList.splice(startingIndex - 1, 1)
//         console.log(SemiList)
//     }
//     else {
//         console.log("watch again")
//     }
// }

var gender = ["male","female"]
var inp = prompt("Enter Gender")
if(gender[0]==inp){
    alert("Good morning Sir")
}
else if(gender[1]==inp){
    alert("Good morning Mam")
}
else{
    alert("Good Morning")
}









