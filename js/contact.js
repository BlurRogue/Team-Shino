

const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const address1 = document.getElementById('address1')
const address2 = document.getElementById('address2')

const form =  document.getElementById('form')

form.addEventListener('submit', (e) =>{

    e.preventDefault()
})


/* there should be a message, after pressing submit, that thanks the user for submitting a message*/