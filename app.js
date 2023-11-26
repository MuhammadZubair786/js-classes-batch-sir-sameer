// console.log(document.childNodes[1].childNodes[2].childNodes[0])

// console.log(document.childNodes[1].childNodes[2].childNodes[0].nodeType)

// var i=0
// if(document.childNodes[1].childNodes[2].childNodes[i].nodeType==3){
//     console.log(document.childNodes[1].childNodes[2].childNodes[i+1])

// }
// else if(document.childNodes[1].childNodes[2].childNodes[i].nodeType==1){
//     console.log(document.childNodes[1].childNodes[2].childNodes[i])

// }

// console.log(document.childNodes[1].childNodes[2].childNodes[1])

// console.log(document.childNodes[1].childNodes[2].childNodes[1].nodeType)

// var div = document.getElementById("test") //targe get by id
// console.log(div.childNodes)
// // 
// if(div.firstChild.nodeType==3){
//     console.log(div.childNodes[1]) //0
// }
// else{
//     console.log(div.firstChild)
// }

// 3=>space ,1=>tag

// var div = document.getElementById("test") //targe get by id
// console.log(div.childNodes)

// for(var i=0;i<div.childNodes.length-1;){
//     if(div.childNodes[i].nodeType==3){
//         // console.log(div.childNodes[i+1])
//         // div.childNodes[i+1].innerText = i + "is data"
//         console.log(div.childNodes[i].nextSibling)
//         console.log(div.childNodes[i].nextSibling.nodeName)
//         i=i+2

//     }
//     else{
//         div.childNodes[i].innerText = i + "is data"
//         console.log(div.childNodes[i])
//         console.log(div.childNodes[i].nodeName)

//         i=i+1
//     }


// }

// var div = document.getElementById("test")

// for(var i=0;i<div.childNodes[1].childNodes.length-1;){
//     if(div.childNodes[1].childNodes[i].nodeType==3){
//         if(div.childNodes[1].childNodes[i].nextSibling.innerText==""){
//             div.childNodes[1].childNodes[i].nextSibling.innerText="comming soon"
//         }
//     }
//     i++;
// }

var inputtext = document.getElementById("inputtext")


function SetData(text){
    inputtext.value +=text
}

function Calculate(){
    inputtext.value = eval(inputtext.value)

}

function clearFunc(){
    console.log("test")
    inputtext.value = ""
}

function Square(){
    inputtext.value = eval(inputtext.value*inputtext.value)
}


function SquareRoot(){
    inputtext.value = Math.sqrt(inputtext.value)
}




