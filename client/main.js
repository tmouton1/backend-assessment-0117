const listContainer = document.querySelector('#list-container')
const form = document.querySelector('form')
// const nameInput = document.querySelector('#name-input')
const namesCallback = ({ data: names }) => displaynames(names)

 
const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune')
    .then(res => {
        const data = res.data;
        alert(data);
    });
}

fortuneBtn.addEventListener('click', getFortune)

const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get('http://localhost:4000/api/compliment')
        .then(res => {
            const data = res.data;
            alert(data);
    });
}
complimentBtn.addEventListener('click', getCompliment)



const createList = arr => {
    list.innerHTML = 'Names List:'
    arr.forEach((name,index) => {
        list.innerHTML = 'Names List:'
        
            let listItem = document.createElement('li')
            let nameSpan = document.createElement('span')
            let deleteButton = document.createElement('button')
            let cityItem = document.
            listItem.appendChild(nameSpan)
            listItem.appendChild(deleteButton)
            
            nameSpan.textContent = name
            deleteButton.textContent = "delete"
            deleteButton.id = index

            deleteButton.addEventListener('click', deleteName )

            list.appendChild(listItem)       
        }) 
}

const getNameList = () => {
    axios.get('http://localhost:4000/api/users')
    .then(namesCallback)
    .catch(err => console.log(err))

    const submitName = body =>axios.post('http://localhost:4000/api/name', body).then(namesCallback).catch(err => console.log(err))

    const deleteName = id =>axios.delete(`http//localhost:4000/api/name/${id}`).then(namesCallback).catch(err => console.log(err))

    function submitHandler(e) {
        e.preventDefault()

        let name = document.querySelector('#name-input')
        
        let bodyObj = {
            name:name.value
        }

        submitName(bodyObj)

        name.value = ''
    }

    function displayNames(arr) {
        namesContainer.innerHTML = ``
        for(let i =0; i<arr.length; i++) {
            addNameCard(arr[i])
        }
    }
form.addEventListener('submit',submitHandler)
}

getNameList()

console.log(submitName)

// const submitName = evt => {
//     evt.preventDefault()
//     axios.post('http://localhost:4000/api/name', {name: nameInput.value})
//     .then(response => {
//         let { data } = response
//         createList(data)
        
//           })
//           .catch(err => console.log(err))
// }
// }
// form.addEventListener('submit', submitName)


// const deleteName = evt => {
//     console.log(evt.target)
//     axios.delete(`http://localhost:4000/api/name/${evt.target.id}`)
//     .then(response => {
//         let { data } = response
//         createList(data)

//     })
//     .catch(err => console.log(err))
// }
// form.addEventListener('delete', deleteName)



// getNameList()


