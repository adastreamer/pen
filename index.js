
var gzippo = require('gzippo')
var express = require('express')
var app = express()

//app config
app.set('port', (process.env.PORT || 5001))

app.use(gzippo.staticGzip(__dirname + '/dist'))
app.use("/bower_components", express.static(__dirname + "/bower_components"))

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

