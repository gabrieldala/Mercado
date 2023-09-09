import express from 'express';
const app = express();


// ROUTAS QUE RENDERIZA A VIEW DO MERCADO EXPRESS
app.get("/", (req, res) =>{
    res.send("Mercado Express Funcionando!")
})

const PORT = 4000
app.listen(PORT, () =>{
    console.log(`MERCADO EXPRESS NO AR! port: ${PORT}`)
})