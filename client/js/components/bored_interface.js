function getActivity(event, queryString = `?key=8264223`) {
    fetch(`https://www.boredapi.com/api/activity${queryString}`)
    
        .then(response => response.json())
        .then(data => { 
            console.log(`https://www.boredapi.com/api/activity${queryString}`)
            console.log(data);
            renderActivity(data);
        })
}

function renderLink(link) {
    if (link) {
        return `<span class="link">Link: <a href="${link}">${link}</a></span>`
    }
    return ''
}

function addRandomToList(taskData) {
    console.log(taskData)
}

function renderActivity(data) {
    const pageContent = document.querySelector('#page')
    const activityCore = ` 
        <h2>Here's an idea!</h2>
        <span>${data.activity}</span>
        <span>Accessibility: ${data.accessibility}</span>
        <span>Participants: ${data.participants}</span>
        <span>Price: ${data.price}</span>
    `
    pageContent.innerHTML = `
        <section class="activity">
            ${activityCore}
            ${renderLink(data.link)}
        </section>
    `
}
