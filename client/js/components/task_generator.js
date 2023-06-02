////////////////// RANDOM TASK GENERATOR FUNCTIONS ////////////////// 

function renderTaskGenerator() {
    document.querySelector('#page').innerHTML =
    `  
    <li onClick="surpriseMe()">Surprise Me</li>
    `
}

function renderActivity(data) {
    document.querySelector('#page').innerHTML = ` 
        <h2>Activity</h2> 
        <span>Activity: ${data.activity}</span><br>
        <span>Accessibility: ${data.accessibility}</span><br>
        <span>Participants: ${data.participants}</span><br>
        <span>Price: ${data.price}</span><br>
        <span>Link: ${data.link}</span><br>
        
    `
}

document.getElementById("activityForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    fetch("https://www.boredapi.com/api/activity") // Fetch API 
    .then(response => response.json())
    .then(data => {

        console.log(data);
    });
});



// accessibility
// : 
// 0.3
// activity
// : 
// "Go to an escape room"
// key
// : 
// "5585829"
// link
// : 
// ""
// participants
// : 
// 4
// price
// : 
// 0.5
// type
// : 
// "social"