let signUpUsername = document.getElementById("signUp-user-username");
let signUpUseremail = document.getElementById("signUp-user-email");
let signUpUserPassword = document.getElementById("signUp-user-passowrd");
let signUpUserage = document.getElementById("signUp-user-age");
let signUpUserButton = document.getElementById("signUp-user");






signUpUserButton.addEventListener("click", loginUser);

function loginUser() {
  let obj ={
    name: signUpUsername.value,
    email: signUpUseremail.value,
    password: signUpUserPassword.value,
    age: signUpUserage.value
  };

  fetch('https://scarlet-yak-toga.cyclic.app/users/register', {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj)
  })
  .then((res) => {
    if(res.ok) {
        return res.json()
    }
  })
  .then((data) => {
    console.log(data);
    alert("user successfully signed up.");
    window.location.href = 'login.html';
  })
  .catch(error =>  alert("Invalid Credentials", JSON.stringify(error)));
  
}