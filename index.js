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

//getting day of the week you were born

 var weekDay= Math.round( ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7) ;

 

 var maleName = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi", "Kwame"];

 var femaleName =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];


 if(weekDay===1 &&gender === "male"){
    document.getElementById("demo").innerHTML = maleName[0];

 }
 else if(weekDay=== 2 &&gender === "male"){
    document.getElementById("demo").innerHTML = maleName[1];

 }
 else if(weekDay===3 && gender === "male"){
    document.getElementById("demo").innerHTML = maleName[2];

 }
 else if(weekDay===4 &&gender === "male"){
    document.getElementById("demo").innerHTML = maleName[3];

 }
 else if(weekDay===5 &&gender === "male"){
    document.getElementById("demo").innerHTML = maleName[4];

 }
 else if(weekDay===6 &&gender === "male"){
    document.getElementById("demo").innerHTML = maleName[5];

 }
 else if(weekDay===7 &&gender === "male"){
    document.getElementById("demo").innerHTML = maleName[6];

 }




 

 if(weekDay===1 &&gender === "female"){
    document.getElementById("demo").innerHTML = femaleName[0];

 }
 else if(weekDay=== 2 &&gender === "female"){
    document.getElementById("demo").innerHTML = femaleName[1];

 }
 else if(weekDay===3 && gender === "female"){
    document.getElementById("demo").innerHTML = femaleName[2];

 }
 else if(weekDay===4 &&gender === "female"){
    document.getElementById("demo").innerHTML = femaleName[3];

 }
 else if(weekDay===5 &&gender === "female"){
    document.getElementById("demo").innerHTML = femaleName[4];

 }
 else if(weekDay===6 &&gender === "female"){
    document.getElementById("demo").innerHTML = femaleName[5];

 }
 else if(weekDay===7 &&gender === "female"){
    document.getElementById("demo").innerHTML = femaleName[6];

 }
 
     
 }

//  var validate= function(){
//     if(dd||mm ||yob ||gender == ""){
//         alert("Please fill in the details correctly")
//     }
//     else{
//         alert("Submitted Successfully")
//     }
    
// }


//}

