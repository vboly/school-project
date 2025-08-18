if(localStorage.getItem("LoginLIST")) {
  window.location.replace('home.html');
}

document.addEventListener('DOMContentLoaded', (event) => {
  const log_box        = document.getElementById('login-box');
  const welcome_top    = document.getElementById('welcome-top');
  const welcome_bottom = document.getElementById('welcome-bottom');
  const log_but        = document.getElementById('log-but');

  var signup = false;

  if(!localStorage.getItem("UserDB")) {
    localStorage.setItem('UserDB', JSON.stringify({
      admin: "123456789",
      Username: "Password"
    }));
  }

  welcome_bottom.addEventListener('click', (e) => {
    if(e.target.id == 'signup-link') {
      log_box.classList.toggle('swapped');
    } else {
        return;
    }

    if (log_box.classList.contains('swapped')) {
      welcome_top.textContent = 'Please sign up to continue';
      welcome_bottom.innerHTML = 'Already have an account? <a id="signup-link">Login now!</a>';
      log_but.textContent = 'Sign Up';
      signup = true;
    } else {
      welcome_top.textContent = 'Please login to continue';
      welcome_bottom.innerHTML = "Don't have an account? <a id='signup-link'>Sign up now!</a>";
      log_but.textContent = 'Login';
      signup = false;
    }
  });

  log_but.addEventListener('click', (e) => {
    const userDB = JSON.parse(localStorage.getItem('UserDB'));
    const user_field    = document.getElementById('User-field');
    const user_login    = document.getElementById('User-login');

    if(!signup){
      if (userDB[user_field.value] && userDB[user_field.value] === user_login.value) {
          alert('Login successful!');
          localStorage.setItem("LoginLIST", user_field.value);
          window.location.replace('home.html');
        } else {
          alert('Invalid username or password.');
      }
    }

    if(signup) {
      if(user_field.value && user_login.value) {
        if(!userDB[user_field.value]) {
          alert("Account created!");
          userDB[user_field.value] = user_login.value;
          localStorage.setItem('UserDB', JSON.stringify(userDB));
        } else {
          alert("Username already exists.");
        }
      } else {
        alert('Please enter username or password.');
      }
    }

  });
});


