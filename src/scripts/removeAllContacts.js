import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const allContacts = await readContacts();

  if (allContacts.length === 0) {
    console.log(`There are no contacts to delete`);
    return;
  }

  await writeContacts([]);

  console.log(`All contacts successfully deleted`);
};

removeAllContacts();
