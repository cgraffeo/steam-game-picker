import express from 'express'
import bodyParser from 'body-parser'
import steamClient from './steamClient'
import cors from 'cors'

let api = express()

api.use(cors({
  origin: true,
  credentials: true
}))

api.use(bodyParser.json())
api.use(bodyParser.urlencoded())
api.get('/user/:vanityUrl/games', (req, res, next) => {
  steamClient
    .getUserGames(req.params.vanityUrl)
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.error(JSON.stringify(err, null, 2))
      next(err)
    })
})

api.listen(3010, (err) => {
  if (err) throw err
  console.log('listening for requests')
})
