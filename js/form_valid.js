document.getElementById("submit-btn").addEventListener("click",function(){
    var oke = true; //chua co loi
    //xoa thong bao loi
    document.getElementById("fullname_err").innerHTML = "";
    document.getElementById("phonenumber_err").innerHTML = "";
    document.getElementById("birthdate_err").innerHTML = "";
    document.getElementById("address_err").innerHTML = "";
    //kiem tra cac input
    if(document.getElementById("fullname").value == ""){
        document.getElementById("fullname_err").innerHTML = "You should supply your fullname";
        document.getElementById("fullname").focus()
        oke = false;
    }
    if(document.getElementById('birthdate').value == ""){
        document.getElementById("birthdate_err").innerHTML = "You should supply your birthdate";
        document.getElementById("birthdate").focus()
        oke = false;
    }
    if(document.getElementById('phonenumber').value == ""){
        document.getElementById("phonenumber_err").innerHTML = "How can we communicate with you without phonenumbers?";
        document.getElementById("phonenumber").focus()
        oke = false;
    }
    else{
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if(vnf_regex.test(document.getElementById('phonenumber').value) ==false){
            document.getElementById("phonenumber_err").innerHTML = "Please enter right phonenumber";
        document.getElementById("phonenumber").focus()
        oke = false;
        }
    }
    if(document.getElementById('address').value == ""){
        document.getElementById("address_err").innerHTML = "Where do you live?";
        document.getElementById("adrress").focus()
        oke = false;
    }
    
})