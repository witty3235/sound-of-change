const express = require('express')
const path = require('path')
const app = express()
const portnum = 3000

app.get('/video/', function (req, res) {
    res.sendFile(path.join(proj_root, 'server/mock-data/video.json'))
})

const proj_root = path.join(__dirname, '../')
console.log('Project root is set to ' + proj_root)
// static resources
app.get('/', function (req, res) {
    res.sendFile(path.join(proj_root, 'client/index.html'))
})
app.get('/favicon.png', function (req, res) {
    res.sendFile(path.join(proj_root, 'client/favicon.png'))
})

app.use('/translations', express.static(path.join(proj_root, 'client/translations')))

app.use('/themes/frontend/css', express.static(path.join(proj_root, 'client/css')))
app.use('/themes/frontend/fonts', express.static(path.join(proj_root, 'client/fonts')))
app.use('/themes/frontend/img', express.static(path.join(proj_root, 'client/img')))
app.use('/themes/frontend/js', express.static(path.join(proj_root, 'client/js')))
app.use('/themes/frontend/uploads', express.static(path.join(proj_root, 'client/uploads')))
app.use('/themes/frontend/view', express.static(path.join(proj_root, 'client/view')))

app.listen(portnum)
console.log('server started at ' + portnum);