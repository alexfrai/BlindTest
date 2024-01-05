const APIRequest = require("../service/api_request.js")

module.exports = (app) => {

    app.get('/',(req,res) => {
        res.render('index')
    });

    app.post('/',(req,res) => {
        //console.log(req.body.userInput)
        console.log(APIRequest)
        APIRequest.getInfoWithApi(req.body.userInput).then((musics)=> {
            musics.forEach(music => {
                console.log(music.data.title)
                let musicDiv = document.querySelector('.')
            });
        })
        let userInput = ''
        res.render('index')
    });
}