/* Fill your code*/

// regexs
const input_fields = {
    username: /^[a-z\d]{8,15}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,20}$/,
    phone:/^\d{10}$/,
}

function formValidate(){
    // values
    let name = document.forms["RegForm"]["Name"];
    let address = document.forms["RegForm"]["Address"];
    let email = document.forms["RegForm"]["EMail"];
    let password = document.forms["RegForm"]["Password"];
    let cpassword = document.forms["RegForm"]["cPassword"];
    let phone = document.forms["RegForm"]["phone"];
    // error display
    let errname = document.getElementById("name");
    let erraddress = document.getElementById("address");
    let erremail = document.getElementById("email");
    let errpassword = document.getElementById("pwd");
    let errcpassword = document.getElementById("cpwd");
    let errphone = document.getElementById("phone");
    let result = document.getElementById("result");

    // name
    if(input_fields.username.test(name.value)){
        errname.textContent="";
    }
    else{
        errname.textContent="Atleast 8 to 15 Charecter Required";
        name.focus();
        return false;
    }

    // address
    if(address.value==""){
        erraddress.textContent="Kindly fill the address field";
        address.focus();
        return false;
    }
    else{
        erraddress.textContent="";
    }

    // //email
    if(email.value==""){
        erremail.textContent="Kindly fill Email field";
        email.focus();
        return false;
    }
    else if(input_fields.email.test(email.value)){
        erremail.textContent="";
    }
    else{
        erremail.textContent="Enter a vaild Email";
        email.focus();
        return false;
    }

    //password
    if(password.value==""){
        errpassword.textContent="Kindly fill Password field";
        password.focus();
        return false;
    }
    else if(input_fields.password.test(password.value)){
        errpassword.textContent="";
    }
    else{
        errpassword.textContent="password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number any Symbols";
        password.focus();
        return false;
    }

    // confirm password
    if(cpassword.value==""){
        errcpassword.textContent="Kindly fill this field";
        cpassword.focus();
        return false;
    }
    else if(cpassword.value==password.value){
        errcpassword.textContent="";
    }else{
        errcpassword.textContent="Password and confirm password must be same";
        cpassword.focus();
        return false;
    }
    // number
    if(phone.value==""){
        errphone.textContent="Kindly fill this field";
        phone.focus();
        return false;
    }
    else if(input_fields.phone.test(phone.value)){
        errphone.textContent="";
        result.textContent="Regex validation Success";
        return false;
    }
    else{
        errphone.textContent="Enter a valid 10 digit number";
        phone.focus();
        return false;   
    }
}