function renderUselessFact() {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#page').innerHTML = `
            <p>${data.text}</p>
            `
        })
        .catch(error => {
            console.error('Error:', error);
        });
}