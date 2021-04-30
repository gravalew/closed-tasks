let templateNumber = document.querySelector('.template-ready-number');
let templateDefaultuser = document.querySelector('.template-ready-defaultuser');
let templateFromuser = document.querySelector('.template-ready-fromuser');
let templateSecret = document.querySelector('.template-ready-secret');
let templateHost = document.querySelector('.template-ready-host');
let templateFromdomain = document.querySelector('.template-ready-fromdomain');
let templateRegNumber = document.querySelector('.template-reg-number');
let templateRegLogin = document.querySelector('.template-reg-login');
let templateRegSecret = document.querySelector('.template-reg-secret');
let templateRegDomain = document.querySelector('.template-reg-domain');
let templatePanelId = document.querySelector('.template-ready-panel-id');
var items = ['значение1', 'значение2', 'значение3', 'значение4', 'значение5'];
//inputs
var number = document.getElementById('template-number');
var login = document.getElementById('template-login');
var secret = document.getElementById('template-secret');
var host = document.getElementById('template-host');
var companyId = document.getElementById('template-company-id');
//button
var getFromInput = document.getElementById('getFromInput');
getFromInput.onclick = function () {
items[0] = number.value;
items[1] = login.value;
items[2] = secret.value;
items[3] = host.value;
items[4] = companyId.value;

templateNumber.textContent = number.value;
templateDefaultuser.textContent = login.value;
templateFromuser.textContent = login.value;
templateSecret.textContent = secret.value;
templateHost.textContent = host.value;
templateFromdomain.textContent = host.value;
templateRegNumber.textContent = number.value;
templateRegLogin.textContent = login.value;
templateRegSecret.textContent = secret.value;
templateRegDomain.textContent = host.value;
templatePanelId.textContent = companyId.value;
};
