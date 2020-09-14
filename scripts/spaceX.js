const space_url = 'https://api.spacexdata.com/v3/launches/upcoming';


//change data to readable

function readdate(misdate) {
    var n = new Date(misdate);
    return n.toLocaleString();
}


// output template
function spacetemplate(mission){
    return `
        <div class="gameTitles sameColor topcente totheleft gamespaces overvlow">
            <h2 class="text-center" >${mission.mission_name}</h2>
            <p class="text-center smalltext">${readdate(mission.launch_date_local)}</p>
        </div>
        `
}





//get the Json data from spaceX api
async function getSpace(){
    try {
        const response = await fetch(space_url);
        const data = await response.json();
        console.log(data);
        console.log(data[0].flight_number);
        console.log(data[0].mission_name);
         document.getElementById("Space").innerHTML = `
         <h1 class="sameColor text-center"> SpaceX upcomming launches</h1>
         ${data.map(spacetemplate).join('')}`

    } catch (error) {
        console.log("Car no go space");
        console.log(error);
    }
    
}

getSpace();