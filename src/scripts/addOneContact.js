import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  // ? ===== First variant =====

  // const oldContacts = await readContacts();
  // // console.log('Old contacts :', oldContacts);

  // const newContact = createFakeContact();
  // // console.log('New contact :', newContact);

  // const allContacts = [...oldContacts, newContact];
  // await writeContacts(allContacts);

  // ? ===== Second variant =====

  const oldContacts = await readContacts();
  // console.log('Old contacts :', oldContacts);

  const newContact = createFakeContact();
  // console.log('New contact :', newContact);

  const allContacts = oldContacts;
  allContacts.push(newContact);
  // console.log('All contacts :', allContacts);

  await writeContacts(allContacts);

  console.log(`One contact successfully added`);
};

addOneContact();
