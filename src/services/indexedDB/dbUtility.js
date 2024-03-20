const DB_NAME = 'userData';
const DB_VERSION = 1;
const STORE_NAME = 'userInfo';

function initDB() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      console.error("Your browser doesn't support IndexedDB.");
      return reject("IndexedDB not supported.");
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = (event) => {
      console.error('IndexedDB error:', event.target.errorCode);
      reject(event.target.errorCode);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };
  });
}

// Add or update user data
async function storeUserData(data) {
  const db = await initDB();
  const transaction = db.transaction([STORE_NAME], 'readwrite');
  const objectStore = transaction.objectStore(STORE_NAME);

  return new Promise((resolve, reject) => {
    const request = objectStore.put(data.userData);

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = (event) => {
      console.error('Error storing data:', event.target.error);
      reject(event.target.error);
    };
  });
}

// Retrieve user data by ID
async function getUserData(id) {
  const db = await initDB();
  const transaction = db.transaction([STORE_NAME], 'readonly');
  const objectStore = transaction.objectStore(STORE_NAME);

  return new Promise((resolve, reject) => {
    const request = objectStore.get(id);

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = (event) => {
      console.error('Error retrieving data:', event.target.error);
      reject(event.target.error);
    };
  });
}

export { storeUserData, getUserData };
