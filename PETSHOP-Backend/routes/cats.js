import { Router } from 'express'
import Cat from '../models/Cat.js'

const router = Router()

router.get('/', async (req, res) => {
  const cats = await Cat.find()
  res.json(cats)
})

router.post('/', async (req, res) => {
  const newCat = new Cat(req.body)
  await newCat.save()
  res.status(201).json(newCat)
})

export default router
