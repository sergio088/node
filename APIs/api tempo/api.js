const express = require ("express")
const app = express()


app.use(express.json())

const cidades = {
    SaoPaulo: "13°",
    RiodeJaneiro: "37°",
    Londrina: "23°",
    Fortaleza: "39°"
}

app.get('/clima', (req, res)=>{
    res.json(cidades())
})

app.listen(3000, console.log('api is running'))