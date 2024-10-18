import { writeContacts } from '../../src/utils/writeContacts.js';

export const removeAllContacts = async () => await writeContacts([]);

removeAllContacts();
