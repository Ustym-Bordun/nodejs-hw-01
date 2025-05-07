import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const allContacts = await readContacts();

  if (allContacts.length === 0) {
    console.log(`There are no contacts to delete`);
    return;
  }

  const contactsWithoutLastContact = allContacts;
  contactsWithoutLastContact.pop();

  await writeContacts(contactsWithoutLastContact);

  console.log(`Last contact successfully deleted`);
  console.log(`There are ${contactsWithoutLastContact.length} left`);
};

removeLastContact();
