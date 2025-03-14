const express = require('express')
const app = express()

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('<h1>My first APIs</h1>')
})

 
app.get('/frasesmotivacionais',(req, res)=> {
    const frases = [
        {frase: 'Nao deixe o mundo te jogar para baixo'},
        {frase: 'Nao se cobre tanto, voce nao merece isso'},
        {frase: 'Se ame mais, so voce se conhece de verdade'}
    ]
    res.json(frases)
})

app.get('/frasedehoje', (req, res) => {
    const frases = [
        'Nao deixe o mundo te jogar para baixo',
         'Nao se cobre tanto, voce nao merece isso',
         'Se ame mais, so voce se conhece de verdade'
    ]
    const frasedehoje = Math.floor(Math.random() * frases.length)
    res.json({frasedehoje : frases[frasedehoje]});
})


app.listen(5000, () => {
    console.log('server is runnig')
})