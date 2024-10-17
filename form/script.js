// var form=document.querySelector(".reg-form")
// form.addEventListener("submit",function(e){
//     // e.preventDefault();
//     var username=document.getElementById("email").value
//     var password=document.getElementById("pass").value
//     var address=document.getElementById("address").value
//     var gender=document.getElementsByName("gender")
//     var isGender=false;
//     var education=document.getElementById("education")
//     var department=document.getElementById("department")
//     var Hobbies=document.getElementsByName("Hobby")
//     var isHobby=false
//     var hobbyCount=0

//     for(var j=0;j<Hobbies.length;j++){
//         const hob=Hobbies[j];
//         if(hob.checked){
//             hobbyCount++
//             isHobby=true
//         }
//     }
    

//     for(var i=0;i<gender.length;i++){
//         const options=gender[i];
//         if(options.checked){
//             isGender=true;
//         }
//     }
//     if(!username){
//        $(".email-err").show();
//     }else{
//         $(".email-err").hide();
//     }
//     if(!password){
//         $(".pass-err").show()
//     }
//     else{
//         $(".pass-err").hide();
//     }
//      if(!address){
//         $(".add-err").show()
//     }else{
//         $(".add-err").hide();
//     }
//      if(!isGender){
//         $(".gender-err").show()
//     }else{
//         $(".gender-err").hide();
//     }
//     if(!education.value){
//             $(".ed-err").show()
//         }else{
//             $(".ed-err").hide();
//         }
//      if(!department.value){
//         $(".dept-err").show()
//     }else{
//         $(".dept-err").hide();
//     }
    
//      if(!isHobby){
//         $(".hobby-err").show()
//     }
//     else if(hobbyCount<2){
//         alert("Please select atleast 2 hobbies")
//     }
//     else{
//         $(".hobby-err").hide();
//         alert("Account is Successfully Registered ")
//     }
// });

// function passCheck(){
//     document.getElementById("pinfo").innerHTML=""
//     var value=document.querySelector("#pass")
//     if(value?.value.length<8){
//         console.log(value?.length);
//         document.getElementById("perror").innerHTML="Enter minimum of 8 characters for password"
//     }else{
//         document.getElementById("perror").innerHTML=""
        
//     }
// }

// function pInfo(){
//     document.getElementById("pinfo").innerHTML="Enter the password containg numbers,words"
// }


// $(document).ready(function(){
//     $(".contact-btn").click(function(){
//         $("#contact-label").slideToggle("slow");
//         $("#contact-inp").slideToggle("slow");
//     });
// });

// function contactClick(e){
//     e.preventDefault();
// }



var form=document.querySelector(".reg-form")
form.addEventListener("submit",function(e){
    e.preventDefault();
    var username=document.getElementById("email").value
    var password=document.getElementById("pass").value
    var address=document.getElementById("address").value
    var gender=document.getElementsByName("gender")
    var isGender=false;
    var education=document.getElementById("education")
    var department=document.getElementById("department")
    var Hobbies=document.getElementsByName("Hobby")
    var isHobby=false
    var hobbyCount=0

    for(var j=0;j<Hobbies.length;j++){
        const hob=Hobbies[j];
        if(hob.checked){
            hobbyCount++
            isHobby=true
        }
    }
    

    for(var i=0;i<gender.length;i++){
        const options=gender[i];
        if(options.checked){
            isGender=true;
        }
    }
    if(!username){
       $(".error-msg").text("Email is required !!")
    }else
    if(!password){
        $(".error-msg").text("Password is required !!")
    }else   
     if(!address){
        $(".error-msg").text("Address is required !!")
    }else
     if(!isGender){
        $(".error-msg").text("Gender is required !!")
    }else
    if(!education.value){
        $(".error-msg").text("education is required !!")
    }else
     if(!department.value){
        $(".error-msg").text("department is required !!")
    }else
     if(!isHobby){
        $(".error-msg").text("Hobby is required !!")
    }
    else if(hobbyCount<2){
        $(".error-msg").text("More than 1 hobbies are   required !!")
    }
    else{
        $(".error-msg").hide()
        alert("Account is Successfully Registered ")
    }
});

function passCheck(){
    document.getElementById("pinfo").innerHTML=""
    var value=document.querySelector("#pass")
    if(value?.value.length<8){
        console.log(value?.length);
        document.getElementById("perror").innerHTML="Enter minimum of 8 characters for password"
    }else{
        document.getElementById("perror").innerHTML=""
        
    }
}

function pInfo(){
    document.getElementById("pinfo").innerHTML="Enter the password containg numbers,words"
}


$(document).ready(function(){
    $(".contact-btn").click(function(){
        $("#contact-label").slideToggle("slow");
        $("#contact-inp").slideToggle("slow");
    });
});

function contactClick(e){
    e.preventDefault();
}