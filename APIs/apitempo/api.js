const express = require ("express")
const app = express()

app.use(express.json())

const cidades = {
    SaoPaulo: {temperatura:"13°", clima:"Nublado"},
    RiodeJaneiro: {temperatura:"34°", clima:"Ensolarado"},
    Londrina: {temperatura:"23°", clima:"chuva fraca"},
    Fortaleza: {temperatura:"37°", clima:"Ensolarado"}
}

app.get('/clima', (req, res)=>{
    res.json(cidades)
})
app.get('/clima/:cidade', (req, res) => {
    const cidade = req.params.cidade
    if(cidades[cidade]){
        res.json(cidades[cidade])
    }
})

app.listen(3000, console.log('api is running'))