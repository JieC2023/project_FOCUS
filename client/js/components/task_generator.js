function renderTaskGenerator() {
    document.querySelector('.page-CSS').innerHTML = `
        <link rel="stylesheet" href="./css/generator.css">
    `
    document.querySelector('#page').innerHTML = `  
        <h2 class="link" id="surprise" onClick="getActivity(event)">Surprise Me</h2>
        <form action="" class="filters">
            <section class="type-controls">
                <fieldset>
                    <label for="">Types: </label>
                    ${renderTypes()}
                </fieldset>
            </section>
            <section class="slider-controls">
                <fieldset>
                    <label for="">Participants: </label>
                    <input type="range" name="participants" min="1" max="5" value="1" step="1" class="slider">
                </fieldset>
                <fieldset>
                    <label for="">Accessibility: </label>
                    <section class="slider-group">
                        <label for="">Min: </label>
                        <input type="range" name="min-accessibility" min="0" max="1" value="0.5" step="0.05" class="slider">
                        <label for="">Max: </label>
                        <input type="range" name="max-accessibility" min="0" max="1" value="0.5" step="0.05" class="slider">
                    </section>
                </fieldset>
                <fieldset>
                    <label for="">Price: </label>
                    <section class="slider-group">
                        <label for="">Min: </label>
                        <input type="range" name="min-price" min="0" max="1" value="0.5" step="0.05" class="slider">
                        <label for="">Max: </label>
                        <input type="range" name="min-price" min="0" max="1" value="0.5" step="0.05" class="slider">
                    </section>
                </fieldset>
            </section>
            <h3 class"filtered" onClick="addFilters(event)>
        </form>
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
    console.log(data)
}
