import 'dotenv/config';
import express from 'express';

const app = express();

app.get("/",(req,res,next)=>{
    console.log(7,req);
    res.json({status:1})
})

// Function to handle a request
async function handleRequest() {
    // Mock request and response objects
    const req = {
        method: 'GET',
        url: '/',
        headers: {
            'user-agent': 'Mozilla/5.0', // Example user-agent header
            'content-type': 'application/json' // Example content-type header
        },
        params: {}, // Example of route parameters
        query: {} // Example of query parameters
    };

    const res = {
        status: function(code) {
            this.statusCode = code;
            return this; // Allow chaining
        },
        statusText: 'OK',
        headers: {},
        body: '',
        getHeader: function(header) {
            return this.headers[header.toLowerCase()];
        },
        setHeader: function(header, value) {
            this.headers[header.toLowerCase()] = value;
        },
        write: function(chunk) {
            this.body += chunk.toString();
        },
        end: function(data) {
            if (data) {
                this.write(data);
            }
            console.log('Response:', this.status, this.statusText);
            console.log('Headers:', this.headers);
            console.log('Body:', this.body);
        },
        send: function(message) {
            console.log('Response:', this.statusCode, this.headers);
            console.log('Body:', message);
        },
        json: function(data) {
            console.log('Response:', this.statusCode, this.headers);
            console.log('Body:', data);
        }
    };

    // Use the app to handle the request
    app(req, res);
}

// Call the function to handle the request
// handleRequest();



app.listen(process.env.PORT, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log(`listening to port ${process.env.PORT}`);
    }
})