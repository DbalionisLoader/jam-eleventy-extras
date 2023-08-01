// ---To do list---
//Add bootstrap DONE
//Learn how to style bootsrap website DONE
//Create index page using boostrap DONE
//Create blog page 
//Create a few blogs 
//Add images
//Add custom fonts
//Fix display second blog onward in the cards


console.log("js working");

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