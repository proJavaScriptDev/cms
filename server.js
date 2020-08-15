const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/donation', (req, res) => {
	res.send('Donate Us')
})

app.listen(5000, () => {
	console.log(`Website has started in the url: http://localhost:5000`)
})
