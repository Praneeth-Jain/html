
var submitbtn=document.querySelector(".login-form");
submitbtn.addEventListener("submit",function(e){
    console.log("Inside the function");
    e.preventDefault();
    var usr=document.querySelector("#email");
    var pass=document.querySelector("#password");
    var username=usr.value
    var password=pass.value
    if(!username){
        alert("Enter the Username !!")
    }else if(!password){
        alert("Enter the password !!")
    }
    else
    {
        alert("Login succesfull")
    }
});
console.log("done");
