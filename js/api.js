document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementsByClassName('api-tabs');
  const active = document.querySelector('button.active');
  
  nav.addEventListener('mouseover', (event) => {
    if (event.target.tagName === 'A' && event.target !== active) {   
        active.classList.remove('active');
      }
  });

  nav.addEventListener('mouseout', (event) => {
    if (!active.classList.contains('active')) {   
        active.classList.add('active');
      }
  });
});