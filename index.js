
function save(event) {
    event.preventDefault()
   
    const formData = {
      name: document.getElementById('inputName').value,
      nip: document.getElementById('nip').value,
      city: document.getElementById('inputCity').value,
      street: document.getElementById('inputStreet').value,
      houseNumber: document.getElementById('inputHouseNumber').value,
      apartmentNumber: document.getElementById('inputApartNumber').value,
      postalCode: document.getElementById('inputPostcode').value,
      comments: document.getElementById('comments').value,
      field: document.getElementById('field').value,
      isActive: document.getElementById('isActive').checked
    };
    console.log(formData);
    document.getElementById('inputName').value=null
    document.getElementById('nip').value=null
    document.getElementById('inputCity').value=null
    document.getElementById('inputStreet').value=null
    document.getElementById('inputHouseNumber').value=null
    document.getElementById('inputApartNumber').value=null
    document.getElementById('inputPostcode').value=null
    document.getElementById('field').value=null
    document.getElementById('isActive').checked=null
    document.getElementById('comments').value=null

    const formElements = document.querySelectorAll('form input, form select, form textarea');
    formElements.forEach(element=>{element.disabled=false})
}
function  insertData(){
  document.getElementById('inputName').value="Corpo",
  document.getElementById('nip').value=1234567,
  document.getElementById('inputCity').value='Kraków',
  document.getElementById('inputStreet').value='Krakowska',
  document.getElementById('inputHouseNumber').value='19',
  document.getElementById('inputApartNumber').value='1',
  document.getElementById('inputPostcode').value='12-345',
  document.getElementById('field').value='IT',
  document.getElementById('isActive').checked=true

  document.getElementById('inputName').disabled=true,
  document.getElementById('nip').disabled=true,
  document.getElementById('inputCity').disabled=true,
  document.getElementById('inputStreet').disabled=true,
  document.getElementById('inputHouseNumber').disabled=true,
  document.getElementById('inputApartNumber').disabled=true,
  document.getElementById('inputPostcode').disabled=true,
  document.getElementById('comments').disabled=true,
  document.getElementById('field').disabled=true,
  document.getElementById('isActive').disabled=true


}
