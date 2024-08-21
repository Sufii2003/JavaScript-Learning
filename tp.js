let contacts = [];

// Add a contact
function addContact(name, phone) {
  contacts.push({ name, phone });
}

// Remove a contact
function removeContact(name) {
  contacts = contacts.filter(contact => contact.name !== name);
}

// View all contacts
function viewContacts() {
  contacts.forEach(contact => {
    console.log(`${contact.name}: ${contact.phone}`);
  });
}

// Example usage
addContact('Alice', '123-456-7890');
addContact('Bob', '234-567-8901');
viewContacts();
removeContact('Alice');
viewContacts();
