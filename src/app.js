const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../public/')));


const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
    console.log(`Server in son in ${PORT}`)
});

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/index.html'))
})
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/views/index.html'))
})