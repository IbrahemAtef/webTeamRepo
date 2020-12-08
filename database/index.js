const mongoose = require('mongoose')

const connectDB = async () => {
  await mongoose
    .connect('mongodb://localhost/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((response) => {
      console.log('MongoDB Connected')
    })
    .catch((err) => {
      // Exit process with failure
      process.exit(1)
    })
}

module.exports = connectDB
