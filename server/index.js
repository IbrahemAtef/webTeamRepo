const express = require('express')

const app = express()
const cors = require('cors');

const UsersRouter = require('./routes/users');
const AuthRouter = require('./routes/auth');
const RecipeRouter = require('./routes/recipes');

// MongoDB
const connectDB = require('./db/index')
connectDB()

// Middleware
app.use(express.json({ extended: false }))
app.use(cors());

// Defining Routes
app.use('/api/users', UsersRouter);
app.use('/api/auth', AuthRouter);
app.use('/api/recipes', RecipeRouter);

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
