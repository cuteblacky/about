
// TweenLite.to(".shoot", 2, {width: "100px", height: "60px"});

window.onload = function(){
  var logo = document.getElementById("logo");
  TweenLite.to(".logo", 1, { width: 60, top: "100px",borderRadius: 30, boxShadow: "0px 0px 20px red", ease:Power2.easeInOut});

  var firstSlice = document.getElementById("firstSlice");
  TweenLite.to(".firstSlice", 2, { width: 550, color: "white", left:"400px", ease:Elastic.easeOut, delay: 1});
  TweenLite.to(".firstSlice", 1, {scale: 1.1, opacity:0.7, delay: 2 });
  TweenMax.to(".firstSlice", 2, { left: 300, repeat: 2, yoyo: true, delay: 2});
  TweenLite.to(".firstSlice", 2, {text: "Welcome to Cuteblacky Official Webpage" , ease:Linear.easeNone,fontSize: 50, color:"#ebebeb", display:"flex", flexDirection: "column", align: "center", justifyContent: "center"});
  TweenLite.to(".firstSlice", 2, {text: "Express creativity" , ease:Linear.easeIn, fontSize: 50, color:"#FF8000", textAlign: "center", delay: 5});
  TweenLite.to(".firstSlice", 2, {text: "I love challenges" , ease:Linear.easeIn, fontSize: 50, color:"#C0FF00", textAlign: "center", delay: 10});
  TweenLite.to(".firstSlice", 2, {text:{value: "Programming is the closest thing human have to super power", delimiter:" " } , ease:Linear.easeNone, color:"#FFFFE0", textAlign: "center", delay: 15, padSpace: true});
  TweenLite.to(".firstSlice", 2, {text: "Africa is beautiful! #lifeofacuteprogrammer" , ease:Linear.easeIn, fontSize: 50, color:"#40FFFF", textAlign: "center", delay: 20});


}

TweenLite.to(".firstSlice", 2, {text:"THIS IS NEW TEXT"});



// window.alert("Your JavaScript is Running");

// function myFunction() {
//
// var photo = document.getElementById("para");
// TweenLite.to(para, 2, {width: "200px", height: "150px"});
//
//s
// }
