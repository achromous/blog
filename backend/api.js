var express = require('express');
var matter = require('gray-matter');
var fs = require('fs');
var app = express();

var post = [];

app.get('/', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
    console.log('got a request');
    res.send(post);
})

app.listen(1234, function() {
    fs.readdir('posts', function(err, items) {
        for (var i = 0; i < items.length; i++) {
            fs.readFile('posts/' + items[i], 'utf8', function(err, data) {
                if (err) {
                    return console.log(err);
                }
                to_save = {};
                var parsed = matter(data);
                to_save.id = parsed.data.id;
                to_save.title = parsed.data.title;
                to_save.date = parsed.data.date;
                to_save.tags = parsed.data.tags;
                to_save.content = parsed.content;
                post.push(to_save);
            });
        }
    });
})
