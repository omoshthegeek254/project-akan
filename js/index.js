var set = function(){
    var dd = parseInt(document.getElementById("myForm").elements.namedItem("dob").value);
  var mm = parseInt(document.getElementById("myForm").elements.namedItem("mob").value);
  var yob = document.getElementById("myForm").elements.namedItem("yob").value;
  var gender = document.getElementById("myForm").elements.namedItem("gender").value;

//   verification 

if (mm < 1 || mm > 12 || mm == 2 && dd > 29) {
   return document.getElementById("alert2").innerHTML = ("Invalid Month ,Please Try Again")

   }
   else if (dd < 1 || dd > 31) {
      return document.getElementById("alert2").innerHTML = ("Invalid Date ,Please Try Again")
   }
   else if(yob.length !=4 || parseInt(yob)=== NaN || parseInt(yob)<1990 || parseInt(yob)>2019){
      document.getElementById("alert2").innerHTML = ("Invalid year please try Again");
   }


var cc =parseInt(yob.slice(0,2));
var yy= parseInt(yob.slice(2,4));

//getting day of the week you were born

 var weekDay= Math.round( ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);

 

 var maleName = ["bbbb","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi", "Kwame"];

 var femaleName =["bbbb","Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

 var daysOfTheWeek = ["bbbb","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



 



 if(weekDay===1 &&gender === "male"){
   return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ maleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);

 }
 else if(weekDay=== 2 &&gender === "male"){
   return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ maleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);

 }
 else if(weekDay===3 && gender === "male"){
   return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ maleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);

 }
 else if(weekDay===4 &&gender === "male"){
   return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ maleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);

 }
 else if(weekDay===5 &&gender === "male"){
   return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ maleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);

 }
 else if(weekDay===6 &&gender === "male"){
   return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ maleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);

 }
 else if(weekDay===7 &&gender === "male"){
   return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ maleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);

 }



 if(weekDay===1 &&gender === "female"){
   return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ femaleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);

 }
 else if(weekDay=== 2 &&gender === "female"){
   return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ femaleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);

 }
 else if(weekDay===3 && gender === "female"){
   return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ femaleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);

 }
 else if(weekDay===4 &&gender === "female"){
   return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ femaleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);


 }
 else if(weekDay===5 &&gender === "female"){
   return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ femaleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);


 }
 else if(weekDay===6 &&gender === "female"){
   return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ femaleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);


 }
 else if(weekDay===7 &&gender === "female"){
   return document.getElementById("alert").innerHTML = ("Your Akan name is : ")+ femaleName[weekDay]+("  .You were born on a : "+ daysOfTheWeek[weekDay]);


 }
 
     
 }


