const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})




function checkIn (event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;

    if(name === "" || email === "" || password === "" || cpassword === ""){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill all the fields",
         
          });
        return;
    } else if(password !== cpassword){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password does not match. Please try again.",
         
          });
        return;
    }
    else{
        Swal.fire({
           
            icon: "success",
            title: `Welcome ${name}! Your account has been created successfully.`,
            showConfirmButton: false,
            timer: 1500
          });
          var userData ={
            name: name,
            email: email,
            password: password,
            cpassword: cpassword
        }
        //console.log(userData);
        localStorage.setItem("userData", JSON.stringify(userData));
        // var getData =JSON.parse(localStorage.getItem("userData"));
        // console.log(getData);
        // console.log(window.location);
        setTimeout(() =>{
       window.open("./dashboard.html", "_blank"); // we can add width and height of the window
        }, 2000)
        }
        
}




function logIn(event){
    event.preventDefault();
    var name = document.getElementById("loginName").value;
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
    
    var logInData = JSON.parse(localStorage.getItem("userData"));
  
    if(!logInData){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No account found. Please sign up first.",
     
      });
     }
      else if ( email !== logInData.email || password !== logInData.password){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect email or password",
      })
  }
  else{
    Swal.fire({
      icon: "success",
      title: `Welcome back ${logInData.name}!`,
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(() =>{
      window.open("./dashboard.html" , "_blank");
       }, 2000)
  }}