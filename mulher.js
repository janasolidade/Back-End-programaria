const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
response.json({
    nome: "Janaina Solidade",
    imagem: "https://media.licdn.com/dms/image/D4D03AQFYJ8V3pmGZTw/profile-displayphoto-shrink_800_800/0/1678996115001?e=1700092800&v=beta&t=fFwVTEISBQAQ4kH21lsmpROMPgO8OHLHSu_AX6y5N1E",
    minibio: "Estudante de tecnologia"
})
}

function mostraPorta (){
    console.log("Servidor criado e rodando na porta ", porta) 
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)