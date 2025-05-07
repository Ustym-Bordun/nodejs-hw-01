import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  // ? ===== First variant =====

  // const oldContacts = await readContacts();
  // // console.log('Old contacts :', oldContacts);

  // const newContacts = [];
  // for (let i = 0; i < number; i++) {
  //   const fakeContact = createFakeContact();
  //   // console.log(`Contact ${i + 1} :`, fakeContact);

  //   newContacts.push(fakeContact);
  // }
  // // console.log('New contacts :', newContacts);

  // await writeContacts([...oldContacts, ...newContacts]);

  // ? ===== Second variant =====

  const oldContacts = await readContacts();
  // console.log('Old contacts :', oldContacts);

  const newContacts = [];
  for (let i = 0; i < number; i++) {
    const fakeContact = createFakeContact();
    // console.log(`Contact ${i + 1} :`, fakeContact);

    newContacts.push(fakeContact);
  }
  // console.log('New contacts :', newContacts);

  const allContacts = oldContacts;
  // console.log('All contacts before adding :', allContacts);
  for (const contact of newContacts) {
    allContacts.push(contact);
  }
  // console.log('All contacts after adding :', allContacts);

  await writeContacts(allContacts);

  console.log(`${number} contacts successfully added`);
};

generateContacts(2);
