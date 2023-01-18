let namesList = []

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

    getNameList: (req,res) => {
        res.status(200).send(namesList);
    },
    
    submitName: (req,res) => {
        console.log(req.body)
        let {name} = req.body
        namesList.push(name)
        res.status(200).send(namesList)

    },
    deleteName: (req, res) => {
        let { index } = req.params
        namesList.splice(index,1)
        res.status(200).send(namesList)
    
          
        },

    displayRadioValue: (req,res) => {
        const confirmation = ["Thank you for your selection."]
        res.status(200).send(confirmation);

    }

};