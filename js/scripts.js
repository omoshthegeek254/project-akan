
// ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

// cc -century
// yy year

// mm month
// dd date


var set = function (){
    var date = document.getElementById("myForm").elements.namedItem("date").value;
    
    var month = document.getElementById("myForm").elements.namedItem("month").value;


    var year = document.getElementById("myForm").elements.namedItem("year").value;
    

    document.getElementById("dob").innerHTML = date;
  document.getElementById("mob").innerHTML = month;
  document.getElementById("yob").innerHTML = year;




    
}