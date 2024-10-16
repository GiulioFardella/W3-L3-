const contactForm = document.getElementById('new-Contact')
contactForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const firstNameInput = document.getElementById('firstname')
  const lastNameInput = document.getElementById('lastname')
  const phoneInput = document.getElementById('phone')
  const emailInput = document.getElementById('email')
  const newContact = {
    firstName: firstNameInput.value, 
    lastName: lastNameInput.value, 
    phone: phoneInput.value, 
    email: emailInput.value, 
  }
  const card = document.createElement('article')
  card.classList.add('contact-card')

  card.innerHTML = `
        <p>${newContact.firstName}</p>
        <p>${newContact.lastName}</p>
        <p>${newContact.phone}</p>
        <p>${newContact.email}</p>
      `
  
      const savedSection = document.getElementById('saved-contacts')
      savedSection.appendChild(card)
      constactForm.reset()
})