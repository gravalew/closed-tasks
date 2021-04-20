var today = new Date();

function firtsrun(){
	var fistAskRMuid = prompt ('Введи свой логин:');
	var ttest = inputCheck(fistAskRMuid);
	if (ttest==false){
		return false;
	}else{
		var SecondAskRMuid = confirm ('Записать "' + ttest + '"?');
		if (SecondAskRMuid){
			localStorage.LRMuid = ttest;
		}else{
			return false;
		}
	}
}


function getRMuid (){
	var RMuid = document.getElementById("RMuid").value;
	var ttest = inputCheck(RMuid);
	if (ttest==false){
		return def_RMuid();
	}else{
		return ttest;
	}
}

function inputCheck(testStting){
	var re = /^[A-Z]{2,4}$/;
	var testStrUp = testStting.toUpperCase();
	if (re.test(testStrUp)){
		return testStrUp;
	}else{
		return false;
	}
}


function checkLocal(){
	while (!localStorage.LRMuid){
			firtsrun();
	}
}


function def_RMuid(){
	return localStorage.LRMuid;
}

function ftoday(uid){
	var date = today.getFullYear() + '-' + monthFix(today.getMonth()) + '-' + dayfix(today.getDate());
	letsgo (uid, date); 							
}
					
function fyesterday(uid){
	var date = new Date();
	date.setDate(date.getDate() - 1);	
	var yesterday_day = date.getDate();
	var yesterday_month = date.getMonth();
	var yesterday_year = date.getFullYear();
	var date = yesterday_year + '-' + monthFix(yesterday_month) + '-' + dayfix(yesterday_day);
	letsgo (uid, date);
}
					
					
						
function monthFix (month){
	var monthnum = month + 1;
	if (monthnum < 10){
		return '0' + monthnum;
	}else{
		return monthnum;
	}
}

function dayfix (day){

	if (day < 10){
		return '0' + day;
	}else{
		return day;
	}
}	

function letsgo (uid, date){
	//var url = 'https://www.google.com/search?q=' + date + ' и ' + uid; //test
	var url = 'https://work.binotel.com/issues?c[]=cf_77&c[]=subject&c[]=cf_79&c[]=created_on&c[]=closed_on&f[]=status_id&f[]=cf_77&f[]=closed_on&f[]=&group_by=cf_79&op[cf_77]==&op[closed_on]==&op[status_id]=c&per_page=200&set_filter=1&utf8=✓&v[cf_77][]=' + uid + '&v[closed_on][]=' + date; //work
	window.open(url, "_blank");
}

function uidreset(){
	if (confirm ('Сбросить настройку логина?')){
		firtsrun();
	}
	document.getElementById('RMuid').placeholder = def_RMuid();
}


window.onload = function(){
	var datedef = document.getElementById('closed_date');
	datedef.value =today.getFullYear() + '-' + monthFix(today.getMonth()) + '-' + dayfix(today.getDate());
	checkLocal();
	document.getElementById('RMuid').placeholder = def_RMuid();
}

function btclick (){
	ftoday(getRMuid());
}

function byclick (){
	fyesterday(getRMuid());
}

function bgoclick (){
	var RMuid = getRMuid();
	var cdate = document.getElementById("closed_date").value;
	letsgo(RMuid, cdate);
}
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
