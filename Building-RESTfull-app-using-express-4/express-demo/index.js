const express = require('express');
const app = express();

const courses = [
    {id:1,name:'course1'},{id:2,name:'course2'},{id:3,name:'course3'},
];

app.get('/', (req, res)=>{
    res.send('hello world!!!!!!!');
});

app.get('/api/courses',(req, res)=>{
    //res.send([1,2,3]);
    res.send(courses);
});


app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("404 Course not found");
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
// app.get()
// app.put()
// app.delete()


//https://codewithmosh.com/courses/the-complete-node-js-course/lectures/4509494

// app.get('/api/courses/:id',(req,res)=>{
//     res.send(req.params.id);
// });

// app.get('/api/courses/:year/:month',(req,res)=>{
//     res.send(req.params);
// });

// app.get('/api/courses/:year/:month',(req,res)=>{
//     res.send(req.query);
// });
