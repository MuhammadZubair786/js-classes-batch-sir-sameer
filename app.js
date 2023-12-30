let email = document.getElementById("email")
let password = document.getElementById("password")
let loading = document.getElementById("loading")
let btn = document.getElementById("btn")
let imageSet = document.getElementById("imageSet")
console.log(firebase.auth)

//CREATE ACCOUNT
async function createAccount() {

    console.log(email.value)
    console.log(password.value)
    loading.style.display = "inline"
    btn.style.display = "none"

    await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((data) => {
            console.log(data.user)
            alert("account create")
            
            loading.style.display = "none"
            btn.style.display = "inline"
            email.value = ""
            password.value = ""
            window.location.href="./login.html"
            // alert("user regsister ")
        })
        .catch((err) => {
            alert(err.code)
            console.log(err.code)
            loading.style.display = "none"
            btn.style.display = "inline"
        })
}

//LOGIN FUNCTION
async function signin() {

    console.log(email.value)
    console.log(password.value)
    loading.style.display = "inline"
    btn.style.display = "none"
    await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((data) => {
            console.log(data.user)
            alert("LOGIN USER")
            loading.style.display = "none"
            btn.style.display = "inline"
            email.value = ""
            password.value = ""
            // alert("user regsister ")
        })
        .catch((err) => {
            alert(err.code)
            console.log(err.code)
            loading.style.display = "none"
            btn.style.display = "inline"
        })
}


imageSet.addEventListener("change",(e)=>{
    console.log(e.target.files[0].name)
    uploadImage(e)
    
})

function uploadImage(e){
    var storageRef = firebase.storage().ref();
    var storagePath = storageRef.child(`users/${e.target.files[0].name}`)

    storagePath.put(e.target.files[0]).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });

}