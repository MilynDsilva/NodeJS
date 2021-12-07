const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('hello world!!!!!!!');
});

app.get('/api/courses',(req, res)=>{
    res.send([1,2,3]);
});

app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id);
});

// app.get('/api/courses/:year/:month',(req,res)=>{
//     res.send(req.params.id);
// });


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
// app.get()
// app.put()
// app.delete()


//https://codewithmosh.com/courses/the-complete-node-js-course/lectures/4509494