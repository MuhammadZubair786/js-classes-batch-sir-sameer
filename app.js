
// while(i < 10){
//     console.log(i)
//     i++ 
// }
// let play = true
// while(play==true){
//     let random = (Math.random()*100).toFixed()
//     inp = +prompt(random+"Enter Value",random)
//     if(random==inp){
//         console.log("you win")
//         play= false;
//     }
//     else{
//         console.log("loss")
//     }
// }


// 10 data push 
// let array = []

// var inp = true
// while(inp==true){
//     let data = prompt("Enter Value")
//     array.push(data)
//     let inputdata  = prompt("enter you want new value")
//     if(inputdata.toLowerCase()=="y"  || inputdata.toLowerCase()=="yes" ){
//         inp = true
//     }
//     else{
//         inp=false
//     }

// }
// console.log(array)

store_list = ["laptop", "mouse", "speaker", "chair", "table", "fan"]
food_list = ["burger", "chips", "pizza", "roti roll", "pasta", "cake"]

var i = true //loop 
var user_order = 0 //complete 

var order_list =[]
var get_item_free = ""
// var o =[]


while (i) {
    alert(store_list)
    let inp = prompt(`enter First Item from List `)
    var getitem = false ///flag
    for (let data of store_list) {
        if (data.toLowerCase() == inp.toLowerCase().trim()) {
            user_order += 1
            getitem = true;
            alert(`Yes You get ${inp.trim()} from my store`)
            order_list.push(inp.trim())
            let input_again = prompt("if you want again order ")
            if (input_again.toLowerCase().substring(0,1)  == "y") {
                i = true
            }
            else {
                if (user_order >= 2) {
                    var get_item = (Math.random()*6).toFixed()
                    // alert(`wow you get this item free \n ${food_list[get_item]}`)
                    get_item_free =food_list[get_item]
                    i = false
                }
                i= false
            }
        }
    }
    if(user_order>=1){
        if (getitem == false) {
            let input_again = prompt("you order not complete you want again order")
            if (input_again.toLowerCase().substring(0,1) == "y") {
                i = true
            }
            else {
                if (user_order >= 2) {
                    var get_item = (Math.random()*6).toFixed()
                    alert('wow you get this item free \n ' + food_list[get_item])
                    get_item_free =food_list[get_item]
                    i = false
    
                }
                i = false
            }
        }
    }
    else{
        alert("not present this item")
        i=false
    }
   

}

// document.write("oRDER LIST ",order_list)
if(order_list.length>0){
    for(var i in order_list){
        document.write("Order No ",(parseInt(i)+1)+ " Order : "+order_list[i]+"<br/>")
    }
    if( get_item_free.length>0){
        document.write("you get this item free "+ get_item_free)
    }
}


// mcqs 

var userName   ="     smit hyderabad data new hello"
userName = userName.trim()
userName = userName[0].toUpperCase()+userName.substring(1).toLowerCase()

console.log(userName.toLowerCase())
console.log(userName.toUpperCase())
// console.log(userName.to)
// loop
var i=0;

while(i<userName.length){
    console.log(userName[i])
    if(userName.charCodeAt(i)==32){
        
    }
    i++
}








// 3





