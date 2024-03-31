function generate(){

        alert("Your invoice has been created Successfully scoll down to print")
    // Invoice ID
    var invoiceId = document.getElementById("invoiceInput").value;
    document.getElementById("invoiceOut").innerHTML=invoiceId;

    // Tracking ID

    var trackingId = document.getElementById("trackingInput").value;
    document.getElementById("trackingOut").innerHTML=trackingId;

    // Name

    var name = document.getElementById("nameInput").value;
    document.getElementById("nameOut").innerHTML=name;

    // Phone number

    var phone1 = document.getElementById("phoneinput1").value;
    document.getElementById("phone1Out").innerHTML=phone1;

        // Email

        var email = document.getElementById("emailInput").value;
        document.getElementById("emailOut").innerHTML=email;

        // normal data base

        var address = document.getElementById("addressInput").value;
        document.getElementById("addressOut").innerHTML=address;


        var pincode = document.getElementById("pincodeInput").value;
        document.getElementById("pincodeOut").innerHTML=pincode;

        var phone2 = document.getElementById("phoneInput2").value;
        document.getElementById("phone2Out").innerHTML=phone2;

        var city = document.getElementById("cityInput").value;
        document.getElementById("cityOut").innerHTML=city;

        var product = document.getElementById("productInput").value;
        document.getElementById("productOut").innerHTML=product;

        var dealer = document.getElementById("dealerInput").value;
        document.getElementById("dealerOut").innerHTML=dealer;

        
}
// Print codes

function printPage(){
    var body = document.getElementById("body").innerHTML;
    var data = document.getElementById("content").innerHTML

    document.getElementById("body").innerHTML = data;
    window.print();
    document.getElementById("body").innerHTML = body;
  }
  alert("Please fill all the input to generate invoice")

console.log("Script Ideled")

function exit(){
    var ask = confirm ("Do you want to exit this page")
     if (ask==true){
        window.location.href = "https://shophf.netlify.app/admin";
     }else{
        window.location.href = "invoice.html";
     }
}