const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('/home/yleo/Documents/! PROJETOS/site_samples/web/index.html')
})

app.get('/sobre', (req, res) => {
  res.sendFile('/home/yleo/Documents/! PROJETOS/site_samples/web/about.html')
})

app.listen(3000, () => {
  console.log('Servidor rodando!')
})