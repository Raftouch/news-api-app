const express = require('express')
const router = express.Router()
const axios = require('axios')
const apiKey = process.env.API_KEY

router.get('/', async (req, res) => {
  try {
    const newsAPI = await axios.get(
      `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${apiKey}`
    )
    res.render('index', {
      articles: newsAPI.data.articles,
    })
  } catch (error) {
    res.render('error')
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.error('Error', error.message)
    }
  }
})

module.exports = router
