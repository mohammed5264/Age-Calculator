let language="en"

function detectLanguage(){

let lang=navigator.language

if(lang.startsWith("ar")){

language="ar"
setArabic()

}

}

function toggleLanguage(){

if(language==="en"){

language="ar"
setArabic()

}else{

language="en"
setEnglish()

}

}

function setArabic(){

document.getElementById("title").innerHTML="حاسبة العمر"
document.getElementById("subtitle").innerHTML="ادخل تاريخ ميلادك"
document.getElementById("btn").innerHTML="احسب العمر"

}

function setEnglish(){

document.getElementById("title").innerHTML="Age Calculator"
document.getElementById("subtitle").innerHTML="Enter your birth date"
document.getElementById("btn").innerHTML="Calculate Age"

}

function calculateAge(){

let birth=document.getElementById("birthdate").value

if(!birth){

document.getElementById("result").innerHTML="Enter date"

return

}

let birthDate=new Date(birth)

let today=new Date()

let years=today.getFullYear()-birthDate.getFullYear()
let months=today.getMonth()-birthDate.getMonth()
let days=today.getDate()-birthDate.getDate()

if(days<0){

months--
days+=30

}

if(months<0){

years--
months+=12

}

if(language==="ar"){

document.getElementById("result").innerHTML=

"عمرك: "+years+" سنة "+months+" شهر "+days+" يوم"

}else{

document.getElementById("result").innerHTML=

"Your age: "+years+" years "+months+" months "+days+" days"

}

}

detectLanguage()