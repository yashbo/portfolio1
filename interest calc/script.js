function compute()
{
    var p = document.getElementById("principal").value;
    
    var r= document.getElementById("rate").value;
    var t= document.getElementById("years").value;
    var interest=p*r*t/100;
    var amount=parseInt(p)+parseFloat(interest);
    var result=document.getElementById("result");
    var year=new Date().getFullYear()+parseInt(t);
    if(p<=0){
        alert("Enter a positive number!");
        document.getElementById("principal").focus();
    }
    else {
        result.innerHTML = "If you deposit $" + p + ",\<br\>at an interest rate of " + r + "%\<br\>You will receive an amount of $" + amount + ",\<br\>in the year " + year + "\<br\>";
    }
    
}
function updaterate(){
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}   