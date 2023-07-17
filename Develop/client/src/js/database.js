import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');

  // Create a connection to the database and version 
  const contactDB = await openDB('jate', 1);

  // Create a new transaction and specify database and data privileges 
  const tx = contactDB.transaction('jate', 'readwrite');

  // open up the desired object store
  const store = tx.objectStore('jate');

  // use the .add()

  const request = store.put({ id: 1, value: content });


  // conformation 

  const result = await request;
  console.log('Saved data in database', result);
};

// use the .getAll() method to get all data 
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

  const contactDb = await openDB('jate', 1);

  const tx = contactDB.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');

  const request = store.getAll();

  const result = await request;
  console.log('result.value', result);
  return result?.value;

};

initdb();
