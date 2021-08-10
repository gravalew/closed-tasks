var today = new Date();
function firtsrun() {
  var fistAskRMuid = prompt('Введи свой логин:');
  var ttest = inputCheck(fistAskRMuid);
  if (ttest == false) {
    return false;
  } else {
    var SecondAskRMuid = confirm('Записать "' + ttest + '"?');
    if (SecondAskRMuid) {
      localStorage.LRMuid = ttest;
    } else {
      return false;
    }
  }
}
function getRMuid() {
  var RMuid = document.getElementById('RMuid').value;
  var ttest = inputCheck(RMuid);
  if (ttest == false) {
    return def_RMuid();
  } else {
    return ttest;
  }
}
function inputCheck(testStting) {
  var re = /^[A-Z]{2,4}$/;
  var testStrUp = testStting.toUpperCase();
  if (re.test(testStrUp)) {
    return testStrUp;
  } else {
    return false;
  }
}
function checkLocal() {
  while (!localStorage.LRMuid) {
    firtsrun();
  }
}
function def_RMuid() {
  return localStorage.LRMuid;
}
function ftoday(uid) {
  var date =
    today.getFullYear() +
    '-' +
    monthFix(today.getMonth()) +
    '-' +
    dayfix(today.getDate());
  letsgo(uid, date);
}
function q1d(uid) {
  var date =
    today.getFullYear() +
    '-' +
    monthFix(today.getMonth()) +
    '-' +
    dayfix(today.getDate());
  q1(uid, date);
}

function s1d(uid) {
  var date =
    today.getFullYear() +
    '-' +
    monthFix(today.getMonth()) +
    '-' +
    dayfix(today.getDate());
  s1(uid, date);
}

function fyesterday(uid) {
  var date = new Date();
  date.setDate(date.getDate() - 1);
  var yesterday_day = date.getDate();
  var yesterday_month = date.getMonth();
  var yesterday_year = date.getFullYear();
  var date =
    yesterday_year +
    '-' +
    monthFix(yesterday_month) +
    '-' +
    dayfix(yesterday_day);
  letsgo(uid, date);
}
function monthFix(month) {
  var monthnum = month + 1;
  if (monthnum < 10) {
    return '0' + monthnum;
  } else {
    return monthnum;
  }
}
function dayfix(day) {
  if (day < 10) {
    return '0' + day;
  } else {
    return day;
  }
}
function letsgo(uid, date) {
  //var url = 'https://www.google.com/search?q=' + date + ' и ' + uid; //test
  var url =
    'https://work.binotel.com/issues?c[]=cf_77&c[]=subject&c[]=cf_79&c[]=created_on&c[]=closed_on&f[]=status_id&f[]=cf_77&f[]=closed_on&f[]=&group_by=cf_79&op[cf_77]==&op[closed_on]==&op[status_id]=c&per_page=200&set_filter=1&utf8=✓&v[cf_77][]=' +
    uid +
    '&v[closed_on][]=' +
    date; //work
  window.open(url, '_blank');
}
function q1(uid, date) {
  var url =
    'https://work.binotel.com/issues?c[]=cf_77&c[]=subject&c[]=cf_79&c[]=created_on&c[]=closed_on&f[]=cf_79&f[]=status_id&f[]=closed_on&f[]=&group_by=cf_77&op[cf_79]==&op[closed_on]==&op[status_id]=c&per_page=500&set_filter=1&utf8=%E2%9C%93&v[cf_79][]=38. %D0%9E%D0%A2%D0%9F %D0%98%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5 c%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D1%8F %D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8 %D0%92%D1%85%D0%BE%D0%B4%D1%8F%D1%89%D0%B8%D1%85 %D0%B7%D0%B2%D0%BE%D0%BD%D0%BA%D0%BE%D0%B2 | %D0%98%D1%81%D1%85%D0%BE%D0%B4%D1%8F%D1%89%D0%B8%D1%85 %D0%B7%D0%B2%D0%BE%D0%BD%D0%BA%D0%BE%D0%B2&v[cf_79][]=5. %D0%9E%D0%A2%D0%9F %D0%9F%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0 %D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82%D0%B0 &v[closed_on][]=' +
    date;
  window.open(url, '_blank');
}

function s1(uid, date) {
  var url =
    'https://work.binotel.com/issues?c[]=cf_77&c[]=subject&c[]=cf_79&c[]=created_on&c[]=closed_on&f[]=cf_79&f[]=status_id&f[]=closed_on&f[]=&group_by=cf_77&op[cf_79]==&op[closed_on]==&op[status_id]=c&per_page=200&set_filter=1&utf8=%E2%9C%93&v[cf_79][]=2.%20%D0%9E%D0%A2%D0%9F%20%D0%90%D0%B2%D0%B0%D1%80%D0%B8%D1%8F%20%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%20%D0%BA%D0%BB%D0%B8%D0%B5%D0%BD%D1%82&v[cf_79][]=3.%20%D0%9E%D0%A2%D0%9F%20%D0%90%D0%B2%D0%B0%D1%80%D0%B8%D1%8F%20%D0%91%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%BB&v[cf_79][]=4.%20%D0%9E%D0%A2%D0%9F%20%D0%9E%D0%9A%20%D0%90%D0%B2%D0%B0%D1%80%D0%B8%D1%8F&v[closed_on][]=' +
    today.getFullYear() +
    '-' +
    monthFix(today.getMonth()) +
    '-' +
    dayfix(today.getDate());
  window.open(url, '_blank');
}

function i1(uid, date) {
  var url =
    'https://work.binotel.com/issues?c[]=cf_77&c[]=subject&c[]=cf_79&c[]=created_on&c[]=closed_on&f[]=cf_79&f[]=status_id&f[]=closed_on&f[]=&group_by=cf_77&op[cf_79]==&op[closed_on]==&op[status_id]=c&per_page=200&set_filter=1&utf8=%E2%9C%93&v[cf_79][]=32.%20%D0%9E%D0%A2%D0%9F%20%D0%A3%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0%20-%20%D0%98%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F%20c%20Bitrix24%20&v[cf_79][]=33.%20%D0%9E%D0%A2%D0%9F%20%D0%A3%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0%20-%20%D0%98%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F%20c%20AmoCRM%20&v[cf_79][]=36.%20%D0%9E%D0%A2%D0%9F%20%D0%9A%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F%20API%20&v[cf_79][]=8.%20%D0%9E%D0%A2%D0%9F%20%D0%A3%D0%B4%D0%B0%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F%20%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0%20-%20%D0%98%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F%20CRM%20&v[closed_on][]=' +
    today.getFullYear() +
    '-' +
    monthFix(today.getMonth()) +
    '-' +
    dayfix(today.getDate());
  window.open(url, '_blank');
}

function tz1(uid, date) {
  var url =
    'https://work.binotel.com/issues?c[]=cf_77&c[]=subject&c[]=cf_79&c[]=created_on&c[]=closed_on&f[]=cf_79&f[]=status_id&f[]=closed_on&f[]=&group_by=cf_77&op[cf_79]==&op[closed_on]==&op[status_id]=c&per_page=200&set_filter=1&utf8=%E2%9C%93&v[cf_79][]=12. ОТП Включение - Исполнить ТЗ сложное&v[cf_79][]=11. ОТП Включение - Исполнить ТЗ легкое&v[closed_on][]=' +
    today.getFullYear() +
    '-' +
    monthFix(today.getMonth()) +
    '-' +
    dayfix(today.getDate());
  window.open(url, '_blank');
}

function u1(uid, date) {
  var url =
    'https://work.binotel.com/issues?c[]=cf_77&c[]=subject&c[]=cf_79&c[]=created_on&c[]=closed_on&f[]=cf_79&f[]=status_id&f[]=closed_on&f[]=&group_by=cf_77&op[cf_79]==&op[closed_on]==&op[status_id]=c&per_page=200&set_filter=1&utf8=%E2%9C%93&v[cf_79][]=17. ОТП Включение - Подключение номера&v[cf_79][]=6. ОТП Удаленная настройка - Программный телефон&v[cf_79][]=7. ОТП Удаленная настройка - IP телефон&v[cf_79][]=9. ОТП Удаленная настройка - GSM шлюз&v[closed_on][]=' +
    today.getFullYear() +
    '-' +
    monthFix(today.getMonth()) +
    '-' +
    dayfix(today.getDate());
  window.open(url, '_blank');
}

function au1(uid, date) {
  var url =
    'https://work.binotel.com/issues?c[]=cf_77&c[]=subject&c[]=cf_79&c[]=created_on&c[]=closed_on&f[]=cf_79&f[]=status_id&f[]=closed_on&f[]=&group_by=cf_77&op[cf_79]==&op[closed_on]==&op[status_id]=c&per_page=200&set_filter=1&utf8=%E2%9C%93&v[cf_79][]=16. АЗ Включение - Аудиозапись Медиасистем&v[closed_on][]=' +
    today.getFullYear() +
    '-' +
    monthFix(today.getMonth()) +
    '-' +
    dayfix(today.getDate());
  window.open(url, '_blank');
}

function z1(uid, date) {
  var url =
    'https://work.binotel.com/issues?c[]=cf_77&c[]=subject&c[]=cf_79&c[]=created_on&f[]=status_id&f[]=cf_77&f[]=&group_by=cf_79&op[cf_77]==&op[status_id]=c&per_page=500&set_filter=1&utf8=%E2%9C%93&v[cf_77][]=' +
    uid;
  window.open(url, '_blank');
}
function uidreset() {
  if (confirm('Сбросить настройку логина?')) {
    firtsrun();
  }
  document.getElementById('RMuid').placeholder = def_RMuid();
}
window.onload = function () {
  var datedef = document.getElementById('closed_date');
  datedef.value =
    today.getFullYear() +
    '-' +
    monthFix(today.getMonth()) +
    '-' +
    dayfix(today.getDate());
  checkLocal();
  document.getElementById('RMuid').placeholder = def_RMuid();
};
function btclick() {
  ftoday(getRMuid());
}
function byclick() {
  fyesterday(getRMuid());
}
function bqclick() {
  q1d(getRMuid());
}
function bzclick() {
  z1(getRMuid());
}

function biclick() {
  i1(getRMuid());
}

function bauclick() {
  au1(getRMuid());
}

function buclick() {
  u1(getRMuid());
}

function btzclick() {
  tz1(getRMuid());
}

function bsclick() {
  s1(getRMuid());
}
function bgoclick() {
  var RMuid = getRMuid();
  var cdate = document.getElementById('closed_date').value;
  letsgo(RMuid, cdate);
}
