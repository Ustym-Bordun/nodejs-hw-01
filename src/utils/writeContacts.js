import { PATH_DB } from '../constants/contacts.js';
// console.log(PATH_DB);

// import { readContacts } from './readContacts.js';

import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    // const dbContent = await readContacts();
    // console.log('dbContent', dbContent);

    const updatedContactsJSON = JSON.stringify(updatedContacts, undefined, 2);

    await fs.writeFile(PATH_DB, updatedContactsJSON);
    console.log('Db overwritten');
  } catch (err) {
    console.log(err);
  }
};
