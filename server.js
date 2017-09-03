var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
 'article-one'={
    title:'article one|varsha ',
    heading:'article one',
    date:'sept 5 2017',
    content:`   
    <p>
                    this is the content for my first article.this is the content for my first article..this is the content for my first article.this is the content for my first article
            </p>
               <p> 
                     this is the content for my first article.this is the content for my first article..this is the content for my first article.this is the content for my first article
                </p>
                 <p>
                     this is the content for my first article.this is the content for my first article..this is the content for my first article.this is the content for my first article
                </p>`
},
'article-two'={
     title:'article two|varsha ',
    heading:'article two',
    date:'sept 10 2017',
    content:`   
    <p>
                    this is the content for my first article.this is the content for my first article..this is the content for my first article.this is the content for my first article
            </p>`
               
},
'article-three'={
title:'article three|varsha ',
    heading:'article three',
    date:'sept 15 2017',
    content: 
    <p>
                    this is the content for my first article.this is the content for my first article..this is the content for my first article.this is the content for my first article
           </p>
   

};
function createtemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmltemplate=`
    <html>
     <head>
        <title>
            S{title}
        </title>
        <meta name="viewport"content="width=device-width,initial-scale=1 " />
        <link href="/ui/style.css" rel="stylesheet" />
        
        </head>
    <body>
        <div class="container">
        <div>
            <a href='/'>home</a>
            </div>
            <hr/>
            <h1>
                S{heading}
            </h1>
            <div>
            S{date}
            </div>
            <div>
                S{content}
                
            </div>
            
            </div>
    </body>
    </html>`;
    
    return htmltemplte;
    
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
   res.send(createtemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.send(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
