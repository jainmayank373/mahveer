var self =this;
(function(){
var counter=0;
    
var formPage = document.getElementById('formPage');

formPage.style.visibility='hidden';

function loginForm(){

var wrapper= document.getElementById('wrapper');

formPage.style.visibility="visible";
wrapper.style.filter='blur(3px)';



}
//createing Animation function for  Sliding Image on Scroll 
var opacity =0;

    
//window.addEventListener('scroll',sliding,false);
    
var loginButton = document.getElementsByClassName('account_sub')[0];
loginButton.addEventListener('click',loginForm,false);



})();



