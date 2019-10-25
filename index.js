var set = function(){
    var dd = parseInt(document.getElementById("myForm").elements.namedItem("dob").value);
  var mm = parseInt(document.getElementById("myForm").elements.namedItem("mob").value);
  var yob = document.getElementById("myForm").elements.namedItem("yob").value;
  var gender = document.getElementById("myForm").elements.namedItem("gender").value;
//   document.getElementById("demo").innerHTML = dob;
//   document.getElementById("demo1").innerHTML = mob;
//   document.getElementById("demo2").innerHTML = yob;


var cc =parseInt(yob.slice(0,2));
var yy= parseInt(yob.slice(2,4));
document.getElementById("demo").innerHTML = typeof dob;

 var weekDay= Math.round( ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7) ;

 document.getElementById("demo").innerHTML = gender;




}
