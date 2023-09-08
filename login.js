document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const registerlink = document.getElementById("registerlink").value;
    
   registerlink.addEventListener('click', ()=>{
    login-container.classlist.add('active');
   });
   username.addEventListener('click', ()=>{
    login-container.classlist.add('active');
   });
   password.addEventListener('click', ()=>{
    login-container.classlist.add('active');
   });