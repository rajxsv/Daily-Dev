const getData = async() => {
    const response = await fetch('https://www.arbeitnow.com/api/job-board-api')
    const data = await response.json()
    
    display(data)
}

const display = (response) => {
    console.log(response)
    const div = document.createElement('div')
    div.classList.add('content')
    for(let i=0; i<response.data.length; i++){
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const body = document.body

        h1.textContent = response.data[i].title
        h2.textContent = response.data[i].company_name
        p.innerHTML = response.data[i].description

        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(p)
        body.appendChild(div)
    }
}