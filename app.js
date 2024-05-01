//define some array variables

const keys = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','.','"','/','?','-','/','_','@','!','#','$','%','^','&','*','.'];

//define the display variable

const display = document.querySelector('.display');

//define the generate button variable

const generate = document.querySelector('.generate')


generate.addEventListener('click', function() {
  let password = '';

  for(let i =0;i<=12;i++) {
    let ranIndex = Math.floor(Math.random() * keys.length);
    password = password + keys[ranIndex]
  }
  display.classList.remove('hidden')
  display.textContent = password;
})