  //Servidor
  const express = require('express')
  const server = express()
  
  const { 
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses 
  } = require('./pages')

  //Configurando o nunjucks (template engine)
  const nunjucks = require('nunjucks')
  nunjucks.configure('src/views', {
    express: server,
    noCache: true,
  })
  
//Configurando arquivos estáticos (css, scripts, imagens)
server
//receber os dados do req body
.use(express.urlencoded({ extended: true}))
.use(express.static('public'))
//rotas de aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-classes', saveClasses)
.listen(3000)