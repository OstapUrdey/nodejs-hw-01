import { readContacts } from '../../src/utils/readContacts.js';

export const getAllContacts = () => readContacts();

console.log(await getAllContacts());
