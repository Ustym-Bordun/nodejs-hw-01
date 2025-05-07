import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  console.log(`Here's all your contacts:`);

  return await readContacts();
};

console.log(await getAllContacts());
