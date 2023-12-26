const handle = () => {
    const times = document.getElementById('input1').value 
    const parent = document.querySelector('.content')

    console.log(times)
    
    for(let i = 0; i<times; i++) {
        
        const element = document.createElement('div')
        element.classList.add('card')
        element.innerHTML = '<div class="card-content" ><img src="https://picsum.photos/200/300"/><h1>hallo</h1></div>'
        
        parent.appendChild(element)
    }
}




