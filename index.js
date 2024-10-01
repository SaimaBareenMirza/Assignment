import express from 'express';

// create object of express
const app = express();
app.use(express.json());

// port number on which the application is running
const port = 3000;

// Initializing the request counters for GET and POST
let getRequestCount = 0;
let postRequestCount = 0;

// Logging request and response information for GET
app.get('/products', (req, res) => {
    getRequestCount++;
    console.log('> /products GET: received request')

    res.send("hello"); // Placeholder for response

    console.log(`< /products GET: sending response`);
    console.log(`Processed request count -- GET: ${getRequestCount}, POST: ${postRequestCount}`);
})

app.post('/products', (req, res) => {
    postRequestCount++;
    console.log('> /products POST: received request')

    res.send("hello"); // Placeholder for response

    console.log(`< /products POST: sending response`);
    console.log(`Processed request count -- GET: ${getRequestCount}, POST: ${postRequestCount}`);
})

// Logging request and response information for POST
// Showing the server uri and endpoints information on start-up
app.listen(port, () => {
    const baseUrl = `http://127.0.0.1:${port}`;
    console.log(`Server is running on: ${baseUrl}`);
    console.log(`Endpoints: ${baseUrl}/products method: GET, POST`);
})