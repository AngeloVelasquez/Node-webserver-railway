const http = require('http')

http.createServer( (req, res) => {

    // res.writeHead(200, { 'Content-Type': 'application/json' })
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, { 'Content-Type': 'application/csv' })

    res.write("hola ma")
    res.end()

})
.listen( 3000 )

console.log('Escuchando en el pueto 3000')