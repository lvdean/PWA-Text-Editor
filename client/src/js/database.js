import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      //checks if the database already exists
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Database updating...');

  // create a connection to the database
  const jateDb = await openDB('jate', 1);

  // create a transaction on the database
  const tx = jateDb.transaction('jate', 'readwrite');

  // access the object store
  const store = tx.objectStore('jate');

  // add the content to the object store
  const request = store.add({jate: content});

  // Get confirmation of the content being added to the object store
  const result = await request;
  console.log('Database updated:', result);
}
console.error('putDb not implemented');

//Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('Database fetching...');

  // create a connection to the database and the version we want to access
  const jateDb = await openDB('jate', 1);

  // create a transaction on the database
  const tx = jateDb.transaction('jate', 'readonly');

  // access the object store
  const store = tx.objectStore('jate');

  // get all the content from the object store
  const request = store.getAll();

  // Get the content from the object store
  const result = await request;
  console.log('Database fetched:', result);
  return result;
}
console.error('getDb not implemented');

initdb();
