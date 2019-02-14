const express = require(`express`)
const app = express()

const port = 3000

app.use(express.static(`public`))

app.listen(port, () => {
    console.log(`The Tanks server is listening on port ${port}`)
})