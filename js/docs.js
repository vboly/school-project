document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.DOCS-tabs');
  const tabslist = document.querySelectorAll('.DOCS-tabs button');
 
  tabslist.forEach(tab => {
    tab.addEventListener('click', (event) => {
        tabslist.forEach(btn => btn.classList.remove('active'));
        tabslist.forEach(btn => { document.getElementById(btn.id + '-Content').style.display = "None" });
        tab.classList.add('active');
        document.getElementById(tab.id + '-Content').style.display = "Block"
    });
  });
});

