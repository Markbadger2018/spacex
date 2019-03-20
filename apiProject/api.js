const baseURL = 'https://api.spacexdata.com/v3/cores';

const searchForm = document.querySelector('form'); 
const spaceShips = document.querySelector('ul'); 

searchForm.addEventListener('submit', fetchSpace); 
function fetchSpace(e) { 
    e.preventDefault(); 

    fetch(baseURL) 
    
    .then(results => { 
        return results.json() 
    })
    .then( json => { 
        console.log(json)
        //displayRockets(json) 
        let i;
for (i = 0; i < json.length; i++) { 
json[i];
console.log(json[i])
}
    })
} 

/*function displayRockets(data) { 
    let rockets = data.forEach(r => { 
        let rocket = document.createElement('li'); 
        let cost = document.createElement('li'); 
        rocket.innerText = r.name;  
        cost.innerText = r.cost_per_launch; 
        spaceShips.appendChild(rocket) 
        spaceShips.appendChild(cost) 
    })    
}*/