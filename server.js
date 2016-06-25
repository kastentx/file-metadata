var express = require( 'express' )
var path = require( 'path' )
var multer = require( 'multer' )
var upload = multer( )
var app = express( )

app.use( express.static( path.resolve( __dirname ) ) )

app.get( '/', function( req, res ) {
  res.render( 'index.html' )
} )

// handle file upload
app.post( '/upload', upload.single('targetFile'),  function ( req, res ) {
    
    // do something with image
    res.json( { 'size' : req.file.size } )
} )

app.listen( process.env.PORT, function( port ) {
  console.log( 'Listening at ' + process.env.PORT )
} )