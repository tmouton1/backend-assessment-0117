const nameInput = document.querySelector('#name-input')
const submitForm = document.querySelector('#submit-form')
const nameList = document.querySelector('#name-container')


// ========================

const namesContainer = document.querySelector('#name-container')
const namesCallback = ({ data:name }) => displayNames(name)

// ========================

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



    const submitName = body =>axios.post('http://localhost:4000/api/name', body).then(() => {namesCallback})
    .catch(err => console.log(err))

    function submitHandler(e) {
        e.preventDefault()
        let name = document.querySelector('#name-input')
        
        let bodyObj = {
            name:name.value
        }
        submitName(bodyObj)
        console.log(bodyObj)


        name.value = ''
    }

   
// =====================


function submitNameCard(name) {
    const nameCard = document.createElement('div')
    nameCard.classList.add('name-card')
    nameCard.innerHTML = `
    <div class=btns-container">
    <p class="name-value">${name.id}</p>
    <button id="deleteButton" onclick="deleteName(${name.id})">delete</button>
     `
     namesContainer.appendChild(nameCard)
}
     function displayNames(arr) {
        namesContainer.innerHTML = ``
        for(let i =  0; i < arr.length; i++) {
            submitNameCard(arr[i])
        }}

        function deleteName(id) {
            axios.delete(`http://localhost:4000/api/name/${id}`)
                .then(() => displayNames())
                .catch(err => console.log(err))
        }
        
// =====================



submitForm.addEventListener('submit', submitHandler)
submitForm.addEventListener('submit', displayNames)
submitForm.addEventListener('submit', submitNameCard)
submitForm.addEventListener('submit', submitName)


console.log(submitName)

