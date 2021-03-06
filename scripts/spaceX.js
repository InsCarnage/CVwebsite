
const space_url = 'https://api.spacexdata.com/v3/launches/upcoming';


//change data to readable data convert time stamp into readable time in South Africa time Zone
function readdate(misdate) {
    var n = new Date(misdate);
    return n.toLocaleString();
}


// output template for HTML 
//displays mission name and date
function spacetemplate(mission){
    return `
        <div class="samebox sameColor topcente totheleft gamespaces overvlow">
            <h2 class="text-center maxspace" >${mission.mission_name}</h2>
            <p class="text-center smalltext">${readdate(mission.launch_date_local)}</p>
        </div>
        `
}


//async is used to let the html web page still continue and not wait for the api to loud
async function getSpace(){
    try {
        //get the Json data from spaceX api
        const response = await fetch(space_url);
        const data = await response.json();
        console.log(data);
        console.log(data[0].flight_number);
        console.log(data[0].mission_name);
        //writes data into HTML page
         document.getElementById("Space").innerHTML = `
         <a class="spaceX"href="https://www.spacex.com/">
         <h1 class="sameColor text-center"> SpaceX upcomming launches</h1>
         </a>
         ${data.map(spacetemplate).join('')}`

    } catch (error) {
        console.log("Car no go space");
        console.log(error);
    }
    
}

getSpace();