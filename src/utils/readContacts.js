import { PATH_DB } from '../constants/contacts.js';
// console.log(PATH_DB);

import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    // const notParsedDbContent = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const dbContent = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    // console.log('notParsedDbContent :', dbContent);
    // console.log('typeof notParsedDbContent :', typeof dbContent);
    // console.log('');

    if (!dbContent) return [];

    const parsedDbContent = JSON.parse(dbContent);
    // console.log('parsedDbContent :', parsedDbContent);
    // console.log('typeof parsedDbContent :', typeof parsedDbContent);

    // return dbContent ? parsedDbContent : [];
    return Array.isArray(parsedDbContent) ? parsedDbContent : [];
    // return typeof parsedDbContent === 'object' ? JSON.parse(dbContent) : [];
  } catch (err) {
    console.log(err.message);
  }
};

// readContacts();
