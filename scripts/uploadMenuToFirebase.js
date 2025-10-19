import { db } from '../src/firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import fs from 'fs';

// Read and parse your JSON manually
const menuData = JSON.parse(fs.readFileSync('./src/menu.json', 'utf-8'));

async function uploadMenu() {
  try {
    for (const [categoryName, items] of Object.entries(menuData)) {
      const categoryRef = collection(db, 'menu', categoryName, 'items');

      for (const item of items) {
        await addDoc(categoryRef, {
          name: item.name,
          description: item.description || '',
          price: item.price,
          image: item.image,
          category: categoryName,
        });
      }

      console.log(`✅ Uploaded items for category: ${categoryName}`);
    }

    console.log('🎉 All menu items uploaded successfully!');
  } catch (error) {
    console.error('❌ Error uploading menu:', error);
  }
}

uploadMenu();
