let button = document.getElementById('button');
let seconds = 10
let systemValue = "Mac OS";
let widthValue = "1440";
let heightValue = "1080";

button.addEventListener('click', function(){

setCookie("System",systemValue, "secure")
console.log(getCookie("System"))

});

function getCookie(name){
  let cookieName = name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');

  let regex = new RegExp(`(?:^|;)\\s?${cookieName}=(.*?)(?:;|$)`, 'i');
  let match = document.cookie.match(regex);
  

  return match ? decodeURIComponent(match[1]) : `Cookie '${name}' not found`;
}
function setCookie(name, value, options = {}){
  const defaultOptions = {
   path: '/',
   SameSite: 'Lax',
   ...options
  }
  let keyArray = Object.keys(defaultOptions);
  let valueArray= Object.values(defaultOptions);

  console.log(keyArray)
  console.log(valueArray)
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; ${options}`;
  console.log(document.cookie.system)

}
