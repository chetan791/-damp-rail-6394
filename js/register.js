
// calling all inputs
let name =document.querySelector("#name");
let email =document.querySelector("#email");
let password =document.querySelector("#Password");
let re_Enter_password =document.querySelector("#Re-password");
let register =document.getElementById("register");

// on clicking register button function

let arr=[];

register.addEventListener("click",()=> {

    // checking if all fields are filled or not
    if(name.value == "" || email.value == "" || password.value == "" || re_Enter_password.value == ""){
        alert("All fields are required");
    }
    else if(!email.value.includes("@gmail.com")||email.value.includes(" ")){
        alert("Enter valid email");
    }
    else if(password.value.length<8){
        alert("Password must be 8 characters long");
    }
    else if(password.value!=re_Enter_password.value){
        alert("Password doesn't match");
    }
    else{
        // if all fields are filled

        // creating object
        let obj = {
            name:name.value,
            email:email.value,
            password:password.value,
            re_Enter_password:re_Enter_password.value
        }
        arr.push(obj);
        // converting object to string
        let objToString = JSON.stringify(arr);
        // storing object in local storage
        localStorage.setItem("user",objToString);
        // redirecting to login page
        window.location.href = "/login page.html";
    }
});