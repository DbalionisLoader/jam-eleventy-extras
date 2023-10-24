console.log("js d working");

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })() 

  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a.nav-link");
    console.log("links should be here");
    console.log(links);
    const currentPath = window.location.pathname;
    console.log(currentPath);
    links.forEach(function (link) {
      console.log(link.getAttribute("href"));
      if (link.getAttribute("href") === currentPath) {
        link.parentElement.classList.add("nav-item-box-focus");
      }
    });
  });