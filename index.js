import express from 'express';

// create object of express
const app = express();
app.use(express.json());

// port number on which the application is running
const port = 3000;



// Logging request and response information for GET
app.get('/products', (req, res) => {
    console.log('> /products GET: received request')

    res.send("hello"); // Placeholder for response

    console.log(`< /products GET: sending response`);
})

// Logging request and response information for POST
// Showing the server uri and endpoints information on start-up
app.listen(port, () => {
    const baseUrl = `http://127.0.0.1:${port}`;
    console.log(`Server is running on: ${baseUrl}`);
    console.log(`Endpoints: ${baseUrl}/products method: GET, POST`);
})