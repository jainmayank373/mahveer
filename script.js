
(function(){

var formPage =document.getElementById('formPage');

formPage.style.visibility='hidden';

function loginForm(){

var wrapper=document.getElementById('wrapper');

formPage.style.visibility="visible";
wrapper.style.filter='blur(3px)';



}

function wrapper()
{

}

var loginButton =document.getElementsByClassName('account_sub')[0];
loginButton.addEventListener('click',loginForm,false);



})();



