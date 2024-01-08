const pi=3.14159;
let radius;
let circumference;


document.getElementById('mySubmit').onclick=function(){
   radius= document.getElementById('myText').value;
   radius=Number(radius);
   circumference=2*pi*radius;
   document.getElementById('myH3').textContent=circumference +"cm";


}
document.getElementById('mySubmit2').onclick=function(){
    radius=document.getElementById('myText2').value;
    radius=Number(radius);
    circumference=2*pi*radius;
    document.getElementById('myH4').textContent=circumference +"cm";
    

}

let dogumYili;
let hesaplama;
let bugun= new Date();
let kacgun;

document.getElementById("mySubmit3").onclick=function(Ac){
    dogumYili=document.getElementById("myText3").value;
    dogumYili=Number(dogumYili);
    hesaplama=(bugun.getFullYear())-dogumYili;
    document.getElementById("myH5").textContent=hesaplama +" Yaşındasın";
    kacgun=dogumYili/365;
    document.getElementById('myH6').textContent=kacgun + ' gündür hayattasın';
}