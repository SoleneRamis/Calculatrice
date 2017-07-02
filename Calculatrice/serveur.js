let express = require('express') ()

let app = express()

// Moteur de template
app.set('view', 'vue')


// Middleware

app.use(express.static('src'))
app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())


// Routes
app.get('/', (request, reponse) => {
  reponse.render('src/components/Calculatrice.vue')
})

app.post('/', (request, reponse) => {
  if (request.body) {
    reponse.redirect('/')
  }
})

app.listen(8080)
