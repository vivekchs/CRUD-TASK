
const { MongoClient } = require('mongodb'); 
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);  
const database1 = 'test';


 async function dbconnect()
{
    let result =  await client.connect();
     let db = result.db(database1);
     console.log(db);
     return db.collection('product');
     
    // let response = await collection1.find({name:'VIVEK YADAV'}).toArray();
    // console.log(response);
}
// console.log(dbconnect());
// dbconnect().then((resp) => {
//     (resp.find().toArray()).then((data) => {
//         console.warn(data);
//     })
// })
// let main=async function print()
// {
//     let a = await dbconnect();
//     a = await a.find().toArray();
//     // a = a.toArray();
//     console.log(a);
// }
// main();
// dbconnect();
module.exports = dbconnect;