var express = require('express');
var router = express.Router();
var value = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    let x = search_params.get('x')
    console.log(x)
    if(x===null){
        value = Math.floor(Math.random()*100)
        res.render(`computation`, {val: value });
    }
    else{
        res.render(`computation`, {val: x });
    }
  //res.render('mydata', { title: 'Goutham Kumar Adunuri' });
});


module.exports = router;
