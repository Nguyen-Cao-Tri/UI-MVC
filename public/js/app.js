var CORRECT_USER='caotri';
var CORRECT_PASS='caotri123';

var inputUsername=document.getElementById('username');
var inputPassword=document.getElementById('password');

var LoginForm=document.getElementById('form-login');
if(LoginForm.attachEvent){
    LoginForm.attachEvent('submit',onFormSumit);
}else{
    LoginForm.addEventListener('submit',onFormSumit);
}
function onFormSumit(e){
    var username=inputUsername.value;
    var password=inputPassword.value;
    if(username == CORRECT_USER && password==CORRECT_PASS){
        alert('Dang nhap thanh cong')
    }
    else{
        alert('Sai tai khoan hoac mat khau')
    }
}