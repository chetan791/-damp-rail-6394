
// calling all inputs
let email= document.getElementById("email");
let password= document.getElementById("password");
let loginBtn= document.getElementById("button");


// calling logout ancor tag
// let logout=document.getElementById("logout");
// calling p in ancor tag
// let loginP=document.getElementById("loginsucess");


let check=JSON.parse(localStorage.getItem("user"));

let loginsucccess=document.getElementById("loginsucess");

// on clicking login button function
loginBtn.addEventListener("click",()=> {
    // checking if all fields are filled or not
    if(email.value == "" || password.value == ""){
        alert("All fields are required");
    }
    else if(logincrediantials()){
        // changing the ancor tag after login
        // loginsucccess.innerText="Logout";
        window.location.href="index.html";
    }
    else{
        alert("Not a valid user");
    }

    
});


function logincrediantials(){
    for(let i=0;i<check.length;i++){
        if(email.value == check[i].email && password.value == check[i].password){
            localStorage.setItem("username",JSON.stringify(check[i].name));
            return true;
        }
    }
    return false;
}