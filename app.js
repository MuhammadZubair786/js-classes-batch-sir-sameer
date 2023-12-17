let email = document.getElementById("email")
let password = document.getElementById("password")
let loading = document.getElementById("loading")
let btn = document.getElementById("btn")
console.log(firebase.auth)

async function createAccount() {

    console.log(email.value)
    console.log(password.value)
    loading.style.display = "inline"
    btn.style.display = "none"
    await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((data) => {
            console.log(data.user)
            loading.style.display = "none"
            btn.style.display = "inline"
            email.value = ""
            password.value = ""
            // alert("user regsister ")
        })
        .catch((e) => {
            console.log(e)
            loading.style.display = "none"
            btn.style.display = "inline"
        })
}