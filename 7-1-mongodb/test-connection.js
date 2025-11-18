import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://s202282120_db_user:swelab@cluster0.prqxyuz.mongodb.net/";
const client = new MongoClient(uri);

async function testConnection() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas successfully!");
    
    // List databases
    const admin = client.db().admin();
    const result = await admin.listDatabases();
    console.log("Available databases:");
    result.databases.forEach(db => {
      console.log(`- ${db.name}`);
    });
    
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
  } finally {
    await client.close();
  }
}

testConnection();
