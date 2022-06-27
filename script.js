function compute(){
    var principal = document.getElementById("Amount").value;

    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("Amount").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("No_of_Years").value;
    var interest = principal * years * rate / 100;

    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML =  "Interest: "+ interest;
    
}