// define variables
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const city = document.querySelector('#city');
const postcode = document.querySelector('#postcode');
const phone = document.querySelector('#phone');

//app data
const form = document.querySelector('#contact-form');
const contacts-table = document.querySelector('');
// define event listeners
//add contact to table -submit button
form.addEventListener('submit', addContact);

// project functions
//add contact
function addContact(e){
    if (firstName.value === '' || lastName.value === '' || city.value === '' || street.value === '' || postcode.value === '' || phone.value === '') {
        alert("Add new contact data!")
    } else {

        // create tr
        const tr = document.createElement('tr');
        //create td
        const td = document.createElement('td');
        // add firstname value to td
        td.appendChild(document.createTextNode(firstName.value));
        // append td to tr
        tr.appendChild(td);
        // append  tr tp table
        contacts.appendChild(tr);
    }
}