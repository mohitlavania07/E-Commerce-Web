// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');

const navbar = document.getElementById('navbar');

if(bar){
    bar.addEventListener(  'click', () =>{
    navbar.classList.add("active");
    })
}

if(close){
    close.addEventListener(  'click', () =>{
    navbar.classList.remove("active");
    })
}
const container = document.getElementById('containers');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// // registerBtn.addEventListener('click', () => {
// //     container.classList.add("active");
// });
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    console.warn(result);
    if (result.name) {
      localStorage.setItem('user', JSON.stringify(result.result));
      localStorage.setItem('token', JSON.stringify(result.auth));
      navigate('/');
    } else {
      // Handle registration failure
      console.error('Registration failed');
    }
  };




