import Express from "express";



const app = Express();

// basic get request
app.get('/', (req, res) => {
    res.json({hey:"Hello"});
});

app.listen(3000, () => {   
    console.log(`server is running on localhost`);
});