const express = require('express')
const next = require('next')


const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
        const server = express()

      
        server.get('/single/:id', (req, res) => {
            console.log(req.params)
            let page = '/single'
            let params = { id: req.params.id}
            app.render(req, res, page, params)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })


        server.listen(3000, (err) => {
            if (err) throw err
            console.log('runnin on port 3000')
        })
})
.catch((ex) => {
    console.log(ex.stack)
    process.exit(1)
})