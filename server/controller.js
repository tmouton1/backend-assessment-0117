
const database = require('./db.json')
module.exports = {

    getFortune: (req,res) => {
        const fortunes = ["Rest your doubts, you are alright.", "There is something great coming to your future!", "You will do great in your current undertaking!", "There is something you should reconsider.", "You are on the right path!"];
      
        let randomIndex2 = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex2];
      
        res.status(200).send(randomFortune);
    },

    getCompliment: (req,res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
// ============================================================

    
    submitName: (req,res) => {
        console.log(req.body)
        let {name} = req.body
        let newName = {
            name
        }
        database.push(name)
        res.status(200).send(`Welcome, ${name}! It's great to have you!`)
        console.log(name)
      
    },

deleteName: (req,res) => {
    let {id} = req.params
    let index = database.findIndex(namesObj => namesObj.id === +id)
    database.splice(index,1)
    res.status(200).send(database)

}

}
// ========================================
