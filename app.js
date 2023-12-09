var listdata = document.getElementById("listdata") //list
var inpudata = document.getElementById("input")
function AddTodo() {
    if (inpudata.value.length > 0) {
        var checkdata = validateData(inpudata)
        if (checkdata) {
            var liElement = document.createElement("li")
            liElement.setAttribute("style","margin:5px")
            
            var bold = document.createElement("b")//inline

            var litext = document.createTextNode(inpudata.value)
           
            bold.appendChild(litext)

            liElement.appendChild(bold)
            // bold.style.width=80+"%"
            bold.setAttribute("style","width:60% !important;display:inline-block;overflow:hidden")
            console.log(liElement.childNodes[0])
          
            

            var editButton = document.createElement("button")
            var editText = document.createTextNode("Edit")
            editButton.setAttribute("class","btn btn-warning")
            editButton.appendChild(editText)
            editButton.setAttribute("OnClicK","editbtn(this)")


            
            var deletButton = document.createElement("button")
            var deleteText = document.createTextNode("Delete")
            deletButton.setAttribute("class","btn btn-danger")
            deletButton.appendChild(deleteText)
            // deletButton.style.backgroundColor="red"
            deletButton.setAttribute("style","margin:    2px, ")
            deletButton.setAttribute("onclick","DeleteButton(this)")


           
            liElement.appendChild(editButton)
            liElement.appendChild(deletButton)
           

            listdata.appendChild(liElement)
            
            inpudata.value = ""
        }
        else{
            inpudata.value = ""
        }
    }
    else{
        
    }
}

function validateData(data) {
    var checkdata = false;
    for (var i = 0; i < data.value.length; i++) {
        console.log(data.value.toString().charCodeAt(i))
        if (data.value.toString().charCodeAt(i) != 32) {
            checkdata = true
            break
        }
    }
    console.log(checkdata   )
    return checkdata
}

function DeleteButton(e){
    // console.log("delete",e.parentNode)
    e.parentNode.remove()
}

function editbtn(e){
    console.log(e.parentNode.childNodes[0].innerText)
    var inptext = e.parentNode.childNodes[0].innerText
    var newData = prompt("enter value",inptext)
    if(newData!=""){
        console.log(newData)
        e.parentNode.childNodes[0].innerText = newData

    }
}