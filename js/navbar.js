
// replacing th login / signup up with username
let loginuser=document.getElementById("loginsucess");
let username= JSON.parse(localStorage.getItem("username"))||"";
console.log(username);

if(username!=""){
    loginuser.innerText=username;
}

