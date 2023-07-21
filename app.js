const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 4444

app.set('view engine', 'ejs')
app.set('views', './src/views')
// app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts)
app.use(express.static('public'))
// app.use('/styles', express.static(__dirname + 'public/styles'))
// app.use('/images', express.static(__dirname + 'public/images'))
// app.use('/javascripts', express.static(__dirname + 'public/javascripts'))
app.use(express.urlencoded({ extended: false }))

app.use('/', require('./src/routes/index'))

app.listen(port, () => console.log(`App listening on port ${port}`))
