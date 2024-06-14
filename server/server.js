import express from 'express';
import fs from 'fs'
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';



const app = express();
const router = express.Router();

const PORT = 14400;

router.use('^/$', (req, res)=>{
    fs.readFile(path.resolve('./build/index.html'),'utf-8' , (error, data) =>{
        if(error){
            console.log(error);
            return res.status(500).send('Error', error);
        }
        res.send(
            data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`)
        )
    })
})

router.use(express.static(path.resolve(__dirname, '..', 'build'), {maxAge: '30d'}))

app.use(router)


app.listen(PORT , ()=> console.log(`Server is running on PORT ${PORT}`));