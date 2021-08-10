//inputs
var companyId = document.getElementById('template-company-id');
var number = document.getElementById('template-number');
var login = document.getElementById('template-login');
var defaultuser = document.getElementById('template-defaultuser');
var fromuser = document.getElementById('template-fromuser');
var secret = document.getElementById('template-secret');
var host = document.getElementById('template-host');
var fromdomain = document.getElementById('template-fromdomain');
/*=============================================================*/
let templatePanelId = document.querySelector('.template-panel-id');
let templateNumber = document.querySelector('.template-ready-body__number');
let templateDefaultuser = document.querySelector(
  '.template-ready-body__defaultuser'
);
let templateFromuser = document.querySelector('.template-ready-body__fromuser');
let templateSecret = document.querySelector('.template-ready-body__secret');
let templateHost = document.querySelector('.template-ready-body__host');
let templateFromdomain = document.querySelector(
  '.template-ready-body__fromdomain'
);
let reg_Line = document.querySelector('.template-ready__reg');

let template_OutboundproxyLine = document.querySelector(
  '.template-ready-body__outboundproxy-line'
);
let templateRegLogin = document.querySelector('.template-ready-reg__login');
let templateRegSecret = document.querySelector('.template-ready-reg__secret');
let templateRegDomain = document.querySelector('.template-ready-reg__domain');
let templateRegNumber = document.querySelector('.template-ready-reg__number');

var items = [
  'значение1',
  'значение2',
  'значение3',
  'значение4',
  'значение5',
  'значение6',
  'значение7',
  'значение8',
  'значение9',
  'значение10',
];
//button
items[0] = companyId.value;
items[1] = number.value;
items[2] = login.value;
items[3] = defaultuser.value;
items[4] = fromuser.value;
items[5] = secret.value;
items[6] = host.value;
items[7] = fromdomain.value;

let customerSelect = document.getElementById('customer_select');
function templateTypeSelect(customerSelect) {
  console.log('Template type: ' + customerSelect.value);
  templatePanelId.textContent = companyId.value;
  templateNumber.textContent = number.value;
  reg_Line.classList.remove('hide');

  switch (customerSelect.value) {
    case 'universal':
      defaultuser.classList.remove('hide');
      fromuser.classList.remove('hide');
      secret.classList.remove('hide');
      host.classList.remove('hide');
      fromdomain.classList.remove('hide');
      login.classList.add('hide');
      template_OutboundproxyLine.classList.add('hide');
      templateDefaultuser.textContent = defaultuser.value;
      templateFromuser.textContent = fromuser.value;
      templateSecret.textContent = secret.value;
      templateHost.textContent = host.value;
      templateFromdomain.textContent = fromdomain.value;
      templateRegNumber.textContent = number.value;
      templateRegLogin.textContent = defaultuser.value;
      templateRegSecret.textContent = secret.value;
      templateRegDomain.textContent = host.value;
      fromdomain.placeholder = 'fromdomain';
      console.log('universal');
      break;
    case 'sip-tele2':
      login.classList.remove('hide');
      secret.classList.remove('hide');
      fromuser.classList.add('hide');
      defaultuser.classList.add('hide');
      host.classList.add('hide');
      fromdomain.classList.add('hide');
      template_OutboundproxyLine.classList.add('hide');
      const tele_2_sip_Ip = '217.76.71.17';
      templateDefaultuser.textContent = login.value;
      templateFromuser.textContent = login.value;
      templateSecret.textContent = secret.value;
      templateHost.textContent = tele_2_sip_Ip;
      templateFromdomain.textContent = tele_2_sip_Ip;
      templateRegNumber.textContent = number.value;
      templateRegLogin.textContent = login.value;
      templateRegSecret.textContent = secret.value;
      templateRegDomain.textContent = tele_2_sip_Ip;
      console.log('sip-tele2');
      break;
    case 'sip-ukrtel':
      secret.classList.remove('hide');
      host.classList.add('hide');
      fromdomain.classList.add('hide');
      template_OutboundproxyLine.classList.remove('hide');
      login.classList.add('hide');
      const sip_ukrtel_Domain = 'sip.ukrtel.net';
      templateDefaultuser.textContent = '+38' + number.value;
      templateFromuser.textContent = '+38' + number.value;
      templateSecret.textContent = secret.value;
      templateHost.textContent = sip_ukrtel_Domain;
      templateFromdomain.textContent = sip_ukrtel_Domain;
      templateRegNumber.textContent = number.value;
      templateRegLogin.textContent =
        '+38' + number.value + '@' + sip_ukrtel_Domain;
      templateRegSecret.textContent = secret.value + ':' + '+38' + number.value;
      templateRegDomain.textContent = '195.5.0.164';
      console.log('sip-ukrtel');
      break;
    case 'sip-intertelecom':
      login.classList.remove('hide');
      secret.classList.remove('hide');
      defaultuser.classList.add('hide');
      fromuser.classList.add('hide');
      host.classList.add('hide');
      fromdomain.classList.add('hide');
      template_OutboundproxyLine.classList.add('hide');
      const sip_intertelecom_Domain = 'sip.intertelecom.ua';
      templateDefaultuser.textContent = login.value;
      templateFromuser.textContent = login.value;
      templateSecret.textContent = secret.value;
      templateHost.textContent = sip_intertelecom_Domain;
      templateFromdomain.textContent = sip_intertelecom_Domain;
      templateRegNumber.textContent = number.value;
      templateRegLogin.textContent = login.value;
      templateRegSecret.textContent = secret.value;
      templateRegDomain.textContent = sip_intertelecom_Domain;
      console.log('sip-intertelecom');
      break;
    case 'trunk-tele2':
      defaultuser.classList.remove('hide');
      secret.classList.remove('hide');
      login.classList.add('hide');
      fromuser.classList.add('hide');
      host.classList.add('hide');
      fromdomain.classList.add('hide');
      template_OutboundproxyLine.classList.add('hide');
      const tele_2_trunk_Ip = '217.76.78.7';
      templateDefaultuser.textContent = defaultuser.value;
      templateFromuser.textContent = number.value;
      templateSecret.textContent = secret.value;
      templateHost.textContent = tele_2_trunk_Ip;
      templateFromdomain.textContent = tele_2_trunk_Ip;
      reg_Line.classList.add('hide');
      console.log('trunk-tele2');
      break;
    case 'trunk':
      reg_Line.classList.add('hide');
      login.classList.add('hide');
      template_OutboundproxyLine.classList.add('hide');
      defaultuser.classList.remove('hide');
      fromuser.classList.remove('hide');
      secret.classList.remove('hide');
      host.classList.remove('hide');
      fromdomain.classList.remove('hide');
      templateDefaultuser.textContent = defaultuser.value;
      templateFromuser.textContent = fromuser.value;
      templateSecret.textContent = secret.value;
      templateHost.textContent = host.value;
      templateFromdomain.textContent = fromdomain.value;
      fromdomain.placeholder = 'fromdomain';
      console.log('trunk');
      break;
    case 'universal-lite':
      login.classList.remove('hide');
      secret.classList.remove('hide');
      fromdomain.classList.remove('hide');
      defaultuser.classList.add('hide');
      fromuser.classList.add('hide');
      host.classList.add('hide');
      template_OutboundproxyLine.classList.add('hide');
      templateDefaultuser.textContent = login.value;
      templateFromuser.textContent = login.value;
      templateSecret.textContent = secret.value;
      templateHost.textContent = fromdomain.value;
      templateFromdomain.textContent = fromdomain.value;
      templateRegNumber.textContent = number.value;
      templateRegLogin.textContent = login.value;
      templateRegSecret.textContent = secret.value;
      templateRegDomain.textContent = fromdomain.value;
      fromdomain.placeholder = 'domain';
      console.log('universal-lite');
      break;
    default:
      console.log('Hi, my little Binoman !\nDon`t worry !');
      break;
  }
}

let getFromInput = document.getElementById('getFromInput');
getFromInput.onclick = function () {
  templateTypeSelect(customerSelect);
  console.log('Click button! Generate template!');
};
