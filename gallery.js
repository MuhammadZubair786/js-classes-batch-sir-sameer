var imglist = [
    './gallery/1.jfif',  //0
    './gallery/2.jfif', //1
    './gallery/3.jfif', //2
    './gallery/4.jfif' //3
]

var imageShow = 0 //
var image = document.getElementById("img")
var previousbtn = document.getElementById("pre")
var next = document.getElementById("next")

function Next() {
    if (imageShow == 0) {
        img.src = imglist[1]
        previousbtn.style.display = "inline"
        imageShow += 1
    }
    else if (imageShow == 1) {
        img.src = imglist[2]
        imageShow += 1
    }
    else if (imageShow == 2) {
        img.src = imglist[3]
        next.style.display = "none"

    }

}
function Previous() {
    if (imageShow == 1) {
        img.src = imglist[0]
        previousbtn.style.display = "none"
        imageShow = 0

    }
    else if (imageShow == 2) {
        img.src = imglist[1]
        next.style.display = "inline"

        imageShow -= 1

    }
    else if (imageShow == 3) {
        img.src = imglist[2]
        next.style.display = "inline"
        imageShow -= 1

    }




}