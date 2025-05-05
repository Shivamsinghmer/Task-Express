const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    fs.readdir(`./files`, (err,files)=>{
        res.render('index',{files:files});
        if(err){
            console.log(err);
            return res.status(500).send('Error reading directory');
        }
    })
});

app.post('/create', (req, res)=>{
    const filename = req.body.title;
    const content = req.body.description;
    fs.writeFile(`./files/${filename.split(' ').join('')}.txt`, content, (err)=>{
        if(err){
            console.log(err);
            return res.status(500).send('Error creating file');
        }
        res.redirect('/');
    })
})

app.get("/files/:filename", (req, res)=>{
    const filename = req.params.filename;
    fs.readFile(`./files/${filename}`,"utf-8", (err, data)=>{
        if(err){
            console.log(err);
            return res.status(500).send('Error reading file');
        }
        res.render('show', {filename: filename, content: data});
    })
})

app.get("/edit/:filename", (req, res) => {
    const filename = req.params.filename;
    fs.readFile(`./files/${filename}`, (err, data) => { 
        if(err){
            console.log(err);
            return res.status(500).send('Error reading file');
        }
        res.render('edit', {filename: filename, content: data.toString()});
    });
});

app.post('/delete', (req, res)=>{
    const filename = req.body.filename;
    fs.unlink(`./files/${filename}`, (err)=>{
        if(err){
            console.log(err);
            return res.status(500).send('Error deleting file');
        }
        res.redirect('/');
    })
})

app.post('/update', (req, res)=>{
    const filename = req.body.filename;
    const content = req.body.content;
    fs.writeFile(`./files/${filename}`, content, (err)=>{
        if(err){
            console.log(err);
            return res.status(500).send('Error updating file');
        }
        res.redirect('/');
    })
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});