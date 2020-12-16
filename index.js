const express = require('express')
const mongoose = require('mongoose');
const Blog = require('./modules/blog')
const dbURI = require('./config')

const app = express();
const x = 299;

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(9000))
    .catch((err) => console.log(err))
// rout

app.get('/all-data', (req, res)=> {
    Blog.find()
        .then((result) => res.send(result))
        .catch((err) => res.send(err))
})

app.get('/single-data', (req, res)=> {
    Blog.findById('5fda058e1b6b2d6065bec642')
        .then((result) => res.send(result))
        .catch((err) => res.send(err))
})

app.get('/add-data', (req, res)=> {
    const blogs = new Blog({
        title: 'success',
        snippet: 'hello gaudf',
        body: 'I will come back'
    });

    blogs.save()
        .then(result => res.send(result))
        .catch(err => res.send(err))

})



