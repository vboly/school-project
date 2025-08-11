document.addEventListener('DOMContentLoaded', (event) => {
  const log_box        = document.getElementById('login-box');
  const welcome_top    = document.getElementById('welcome-top');
  const welcome_bottom = document.getElementById('welcome-bottom');
  const log_but        = document.getElementById('log-but');

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
    } else {
        welcome_top.textContent = 'Please login to continue';
        welcome_bottom.innerHTML = "Don't have an account? <a id='signup-link'>Sign up now!</a>";
        log_but.textContent = 'Login';
    }
  });
});

