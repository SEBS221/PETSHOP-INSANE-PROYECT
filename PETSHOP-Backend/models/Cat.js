import mongoose from 'mongoose'

export default mongoose.model(
  'Cat',
  new mongoose.Schema({
    name: String,
    description: String,
    image: String,
  }),
)
