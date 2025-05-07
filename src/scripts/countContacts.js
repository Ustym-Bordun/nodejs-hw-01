import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  // ? ===== First variant =====

  const allContacts = await readContacts();
  // console.log(allContacts);

  const numberOfContacts = allContacts.length;
  // console.log(numberOfContacts);

  console.log(`Number of contacts is :`);

  return numberOfContacts;

  // ? ===== Second variant =====

  // const allContacts = await readContacts();
  // // console.log(allContacts);

  // let numberOfContacts = 0;
  // // for (const contact of allContacts) {
  // //   numberOfContacts + 1;
  // // }
  // for (let i = 0; i < allContacts.length; i++) {
  //   numberOfContacts += 1;
  // }

  // console.log(`Number of contacts is :`);

  // return numberOfContacts;
};

console.log(await countContacts());
