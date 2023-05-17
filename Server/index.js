const { MongoClient, ServerApiVersion } = require('mongodb');
 const express = require('express');
 const app = express();
 require('dotenv').config()
 const cors = require('cors');
  const port = process.env.PORT || 4000;
  // Use Middleware
  app.use(cors())
  app.use(express.json())

  // Server Start here
   app.get('/', (req,res)=>{

    res.send('John  Server Is Ready To use  ')

   })

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cddd89w.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const emaData = await client.db("emaZone").collection("emaDB");

    //  get SHopping 

    app.get('/shopping', async(req,res)=>{

       
        const result = await emaData.find().toArray();
        res.send(result)


    })
    //  get SHopping 
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

  
   app.listen(port, () => {
    console.log(`John Is Running On  ${port} port`)
  })

  // Server Ends Here 