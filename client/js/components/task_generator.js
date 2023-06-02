document.getElementById("activityForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    fetch("https://www.boredapi.com/api/activity") // Fetch API 
    .then(response => response.json())
    .then(data => {

        console.log(data);
    });
});

////////////////// RANDOM TASK GENERATOR FUNCTIONS ////////////////// 

function renderTaskGenerator() {
    document.querySelector('#page').innerHTML =
    `  
    <li onClick="surpriseMe()">Surprise Me</li>
    `
}

function surpriseMe() {
    fetch("https://www.boredapi.com/api/activity")
    
        .then(response => response.json())
        .then(data => { 

        console.log(data);
        renderActivity(data)
    })
}

function renderActivity(data) {
    document.querySelector('#page').innerHTML = ` <h2>Activity</h2> 
        <p>${data.activity}</p>
        <p>${data.type}</p>
    
    `
}
