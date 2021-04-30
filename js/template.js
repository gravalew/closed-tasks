let templateNumber = document.querySelector('.template-number');
let templateDefaultuser = document.querySelector('.template-defaultuser');
let templateFromuser = document.querySelector('.template-fromuser');
let templateSecret = document.querySelector('.template-secret');
let templateHost = document.querySelector('.template-host');
let templateFromdomain = document.querySelector('.template-fromdomain');
let templateRegNumber = document.querySelector('.template-reg-number');
let templateRegLogin = document.querySelector('.template-reg-login');
let templateRegSecret = document.querySelector('.template-reg-secret');
let templateRegDomain = document.querySelector('.template-reg-domain');
var items = ['значение1', 'значение2', 'значение3', 'значение4'];
//inputs
var first = document.getElementById('template-number');
var second = document.getElementById('template-login');
var third = document.getElementById('template-secret');
var fourth = document.getElementById('template-host');
//button
var getFromInput = document.getElementById('getFromInput');
getFromInput.onclick = function () {
  items[0] = first.value;
  items[1] = second.value;
  items[2] = third.value;
  items[3] = fourth.value;

  templateNumber.textContent = first.value;
  templateDefaultuser.textContent = second.value;
  templateFromuser.textContent = second.value;
  templateSecret.textContent = third.value;
  templateHost.textContent = fourth.value;
  templateFromdomain.textContent = fourth.value;
  templateRegNumber.textContent = first.value;
  templateRegLogin.textContent = second.value;
  templateRegSecret.textContent = third.value;
  templateRegDomain.textContent = fourth.value;
};
