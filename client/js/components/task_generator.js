function renderTaskGenerator() {
    document.querySelector('.page-CSS').innerHTML = `
        <link rel="stylesheet" href="./css/generator.css">
    `
    document.querySelector('#page').innerHTML = `  
        <form action="" class="filters" onSubmit="addFilters(event)">
            <fieldset class="type-controls">
                <label for="" class="types-label">Types: </label>
                ${renderTypes()}
            </fieldset>
            <section class="slider-controls">
                <fieldset>
                    <label for="">Participants: </label>
                    <input type="range" name="participants" min="1" max="5" value="1" step="1" class="slider">
                </fieldset>
                <fieldset>
                    <label for="">Accessibility: </label>
                    <section class="slider-group">
                        <label for="">Min: </label>
                        <input type="range" name="minaccessibility" min="0" max="1" value="0" step="0.05" class="slider">
                        <label for="">Max: </label>
                        <input type="range" name="maxaccessibility" min="0" max="1" value="1" step="0.05" class="slider">
                    </section>
                </fieldset>
                <fieldset>
                    <label for="">Price: </label>
                    <section class="slider-group">
                        <label for="">Min: </label>
                        <input type="range" name="minprice" min="0" max="1" value="0" step="0.05" class="slider">
                        <label for="">Max: </label>
                        <input type="range" name="maxprice" min="0" max="1" value="1" step="0.05" class="slider">
                    </section>
                </fieldset>
            </section>
            <button class="filter button">Gimme something!</button>
        </form>
        <h2 class="link" id="surprise" onClick="getActivity(event)">Surprise Me</h2>
    `
}

function renderTypes() {
    return state.activityTypes.map(type => `
        <section class="type">
            <label for="">${type}:</label>
            <input type="radio" name="type" value="${type.toLowerCase()}">
        </section>
    `).join('')
}

function addFilters(event) {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    const dataPairs = Object.entries(data)
    const queryString = `?${dataPairs.map(pair => `${pair[0]}=${pair[1]}`).join('&')}`
    getActivity(event, queryString)
}
