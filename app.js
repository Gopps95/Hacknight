function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if(username == 'Webdev' && password == 'learn')
    {
        alert('Login Successfuly!');
    }
    else{
        alert('Login Failed')
    }

}