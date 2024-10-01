import express from 'express';

// create object of express
const app = express();
app.use(express.json());

// port number on which the application is running
const port = 3000;

// Initializing the request counters for GET and POST
let products=[];
let getRequestCount = 0;
let postRequestCount = 0;

// Logging request and response information for GET
app.get('/products', (req, res) => {
    getRequestCount++;
    console.log('> /products GET: received request')

    // Retriving the list of all products as response to GET request
    res.json(products); 

    console.log(`< /products GET: sending response`);
    console.log(`Processed request count -- GET: ${getRequestCount}, POST: ${postRequestCount}`);
})

app.post('/products', (req, res) => {
    const {productID, name, price, quantity} = req.body;
    postRequestCount++;

    // Add the new product to the products array
    const newProduct = { productID, name, price, quantity };
    products.push(newProduct);  // Store the product in memory

    console.log('> /products POST: received request')
    console.log(name);
  
    // Send a response indicating the product was added
    res.status(201).json({ message: 'Product added successfully', product: newProduct });

    console.log(`< /products POST: sending response`);
    console.log(`Processed request count -- GET: ${getRequestCount}, POST: ${postRequestCount}`);

})

// HTTP Delete request
app.delete('/products', (req,res) => {
    products = [];
    console.log('> products DELETE: All products deleted')
    res.status(200).json({message: 'All products deleted'})
})

// Showing the server uri and endpoints information on start-up
app.listen(port, () => {
    const baseUrl = `http://127.0.0.1:${port}`;
    console.log(`Server is running on: ${baseUrl}`);
    console.log(`Endpoints: ${baseUrl}/products method: GET, POST`);
})