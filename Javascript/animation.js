function Animation(name,values)
{

var animName ="";

    for(var i=0;i<=5;i++)
        {
            var percnt =(i*100)/5;
            animName+= percnt+"%{" + "top:"+values[i]+"px"+";opacity:"+ i/5 +"}" ; 
        }
    console.log(animName);
    
  var idx = document.styleSheets[0].cssRules.length;
//    console.log(idx);
document.styleSheets[0].insertRule("@keyframes  "+  name +"{ " +animName+ " }" ,idx);  
}
var elm= document.getElementsByClassName('box');

function anim(scroll,values,elmnt,name){
        Animation(name,values);
        if(window.scrollY > scroll  )
            {
            console.log("ANimation Created",name)
            elmnt.style.animation="0.6s " +name +" forwards";
            }
        }
    console.log(scrollY);

window.addEventListener('scroll',function(){
    anim(242,[400,350,300,250,200,148],elm[0],'sliding1')
},false);


window.addEventListener('scroll',function(){
    anim(342,[500,450,400,350,300,264],elm[1],'sliding2')
},false);

window.addEventListener('scroll',function(){
    anim(440,[600,550,500,450,400,386],elm[2],'sliding3')
},false);


window.addEventListener('scroll',function(){
    anim(540,[500,450,400,350,300,252],elm[3],'sliding4')
},false);

window.addEventListener('scroll',function(){
    anim(640,[600,550,500,450,400,369],elm[4],'sliding5')
},false);

window.addEventListener('scroll',function(){
    anim(690,[300,250,200,150,100,72],elm[5],'sliding6')
},false);
