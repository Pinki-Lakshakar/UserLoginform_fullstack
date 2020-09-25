let form = document .querySelector("#form");
let username= document.querySelector("#username");
let password= document.querySelector("#password");
//let  errorBlock=document.querySelector("#error");
let small = document.querySelector("small");
let formGroup = document.querySelector(".form-group");
//let button=document.querySelector("button");

username.addEventListener("input",validate);
password.addEventListener("input",validate);
let reg_password= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
//button.disabled=true;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(username.value);
    console.log(password.value);

});

function validate (e) {
    let target=e.target;

    if(target.name ==="password"){
        //innerText
    if(reg_password.test(target.value)){
        //should have test regular Expression 
        target.classList.add("text-success");
        target.classList.remove("text-danger");
        /*small.textContent="valid password";
        small.classList.add("text-success");
        small.classList.remove("text-danger");*/
        target.nextSibling.textContent ='valid Password';
    }else {
        target.classList.add("text-danger");
        target.classList.remove("text-success");
        //innerText
      /*small.textContent="invalid password";
      small.classList.add("text-danger");
        small.classList.remove("text-success");*/
        target.nextSibling.textContent ='invalid Password';

    }
    }
}
    //console.log(target);



/*console.log(form);
console.log(username);
console.log(password);
console.log(small);
console.log(formGroup);*



/*form.addEventListener("submit", (e) => {
    //e.preventDefault();
    let errorMessage =[];
    if(username.value === ""|| username.value === undefined){
        errorMessages.push('<p>Username is Required</p>');

    }
    

    if(password.value ===""   && password.value <= 5) {
    errorMessages.push('<p>Password should be minimum  5 character ..!</p>');

}
//console.log(errorMessage);
if (errorMessage.length > 0){
    e.preventDefault();
    errorBlock.innerHtml = errorMessages.join(" ");
}
});*/


