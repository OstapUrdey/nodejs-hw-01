import { createFakeContact } from '../../src/utils/createFakeContact.js';
import { readContacts } from '../../src/utils/readContacts.js';
import { writeContacts } from '../../src/utils/writeContacts.js';

export const addOneContact = async () => {
    const contacts = await readContacts();
    const newContact = createFakeContact();
    await writeContacts([...contacts, newContact]);
};

addOneContact();
