function getActivity(event, queryString = ``) {
    fetch(`https://www.boredapi.com/api/activity${queryString}`)
    
        .then(response => response.json())
        .then(data => { 
            console.log(`https://www.boredapi.com/api/activity${queryString}`)
            console.log(data);
            renderActivity(data);
        })
}

function renderActivity(data) {
    const pageContent = document.querySelector('#page')
    const activityCore = ` 
        <h2>Activity</h2> 
        <span>Activity: ${data.activity}</span><br>
        <span>Accessibility: ${data.accessibility}</span><br>
        <span>Participants: ${data.participants}</span><br>
        <span>Price: ${data.price}</span><br>
    `
    const linkText = 
    document.querySelector('.page-CSS').innerHTML = `

    `
    if (data.link) {
        pageContent.innerHTML = `
        <section class="activity">
            ${activityCore}
            <span>Link: ${data.link}</span>
        </section>
        `
    } else {
        pageContent.innerHTML = `
        <section class="activity">
            ${activityCore}
        </section>
        `
    }
}
