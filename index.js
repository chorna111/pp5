function showForm() {
  document.getElementById('customer-list').style.display = "none";
  document.getElementById('customer-form').style.display = "block";
}

function showList() {
  document.getElementById('customer-list').style.display = "block";
  document.getElementById('customer-form').style.display = "none";
  
  let ul = document.getElementById('customer-list-data');
  ul.innerHTML = "Lista klientów:";
  
  customersList.forEach((customer) => {
    ul.innerHTML += `<li>${customer.name} 
        <button class="btn btn-primary" onclick="showCustomer(${customer.id})">Edytuj</button>
      </li>`;
  });
}

var customersList = [];

function showCustomer(customerId) {
  const customer = customersList.find((customer) => customer.id === customerId);
  if(customer){
    document.getElementById('customerId').value=customer.id
    addDataToForm(customer)
    enableFormEl()
    showForm()
  }
 
}

function save(event) {
  event.preventDefault();
  const clientId=document.getElementById('customerId').value
  
  const clientData = {
    id: clientId ? parseInt(clientId): Math.floor(Math.random() * 10001),
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
  if(clientId){
    const index=customersList.findIndex(c=>c.id===parseInt(clientId))
    customersList[index]=clientData
  }else{
    customersList.push(clientData)
  }
  document.getElementById('customerId').value=""
  showList();
  addDataToForm(getEmptyCustomer()); 
  return false;
}
function getCustomer() {
  return {
    name: 'Corpo',
    nip: '1234567',
    city: 'Kraków',
    street: 'Krakowska',
    houseNumber: '19',
    apartmentNumber: '1',
    postalCode: '12-345',
    comments: '',
    field: 'IT',
    isActive: true
  };
}

function getEmptyCustomer() {
  return {
    id: null,
    name: "",
    nip: "",
    city: "",
    street: "",
    houseNumber: "",
    apartmentNumber: "",
    postalCode: "",
    comments: "",
    field: "",
    isActive: false
  };
}

function addDataToForm(newCustomer) {
  document.getElementById('inputName').value = newCustomer.name;
  document.getElementById('nip').value = newCustomer.nip;
  document.getElementById('inputCity').value = newCustomer.city;
  document.getElementById('inputStreet').value = newCustomer.street;
  document.getElementById('inputHouseNumber').value = newCustomer.houseNumber;
  document.getElementById('inputApartNumber').value = newCustomer.apartmentNumber;
  document.getElementById('inputPostcode').value = newCustomer.postalCode;
  document.getElementById('field').value = newCustomer.field;
  document.getElementById('isActive').checked = newCustomer.isActive;
}

function disableFormEl() {
  const formElements = document.querySelectorAll('form input, form select, form textarea');
  formElements.forEach(element => { element.disabled = true; });
}

function enableFormEl() {
  const formElements = document.querySelectorAll('form input, form select, form textarea');
  formElements.forEach(element => { element.disabled = false; });
}
