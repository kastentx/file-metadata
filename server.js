var express = require( 'express' )
var path = require( 'path' )
var app = express( )

app.use( express.static( path.resolve( __dirname ) ) )

app.get( '/', function( req, res ) {
  res.render( 'index.html' )
} )

app.listen( process.env.PORT, function( port ) {
  console.log( "Listening at " + process.env.PORT )
} )