import { readContacts } from '../../src/utils/readContacts.js';
import { writeContacts } from '../../src/utils/writeContacts.js';

export const removeLastContact = async () => {
    const contacts = await readContacts();
    contacts.pop();
    await writeContacts(contacts);
};

removeLastContact();
