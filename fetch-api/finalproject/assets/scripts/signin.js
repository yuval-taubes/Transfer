
let usernamekey = 'guest'
let passwordKey = '123'
let test = true;
let usernameInput = document.getElementById('username')
let passwordInput = document.getElementById('password')
let error = document.getElementById('error')
let button = document.getElementById('button')

console.log(username, password, button)

button.addEventListener('click', function () {
  let username = usernameInput.value
  let password = passwordInput.value
  console.log(username, password)
  if(username === usernamekey && password === passwordKey){
    console.log('logged in')
    error.innerText = " "
    window.location.href = "http://stackoverflow.com";
  }
  else{
    error.innerText = 'That is not a registered User'
  }
  test = false;
})
console.log(test)