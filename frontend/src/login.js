let loginUseremail = document.getElementById("login-user-email");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");

let userAuthToken = localStorage.getItem("token") || null;
// let userId = +localStorage.getItem("userId") || null;

const userLoginURL = 'https://scarlet-yak-toga.cyclic.app/users/login';


loginUserButton.addEventListener("click", loginUser);

function loginUser() {
  let obj ={
    email: loginUseremail.value,
    password: loginUserPassword.value
  };

  fetch(userLoginURL, {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
  })
  .then((res) => {
    if(res.ok) {
        return res.json()
    }
    throw new Error('Invalid credentials');
  })
  .then((data) => {
    console.log(data);
    localStorage.setItem("localAccessToken", data.token);
    alert("user successfully logged in.");
    window.location.href = 'notes.html';
  })
  .catch(error =>  alert("Invalid Credentials", JSON.stringify(error)));
  
}