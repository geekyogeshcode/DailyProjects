const userSelect=document.querySelector('#userSelect')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>{
        userSelect.innerHTML=""

        users.forEach(user =>{
            const option=document.createElement('option')
            option.value=user.id 
            option.textContent=user.name
            userSelect.appendChild(option)
        })
    }) 