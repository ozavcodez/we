const form = document.querySelector('form')
form.addEventListener('submit', async event => {
    event.preventDefault();
  
   const email = document.querySelector('#email').value; 
   const fname = document.querySelector('#fullName').value; 
   const phoneNumber = document.querySelector('#phoneNumber').value; 
   const gender = document.querySelector('#gender').value; 
  //  const msg = document.getElementById("msg");
  //  const ermsg = document.getElementById("ermsg")
  
    const formData = {
        fullName: fname,
        email: email,
        phoneNumber: phoneNumber,
        gender: gender
    };

    saveFormData(formData);
  
  });
  function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];


    storedFormData.push(formData);
    // console.log(storedFormData)
    localStorage.setItem('formData', JSON.stringify(storedFormData));
}