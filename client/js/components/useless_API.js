function renderUselessFact() {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
      .then(response => response.json())
      .then(data => {
        const fact = data.text;
        const factElement = document.createElement('p');
        factElement.textContent = fact;
  
        // Clear previous content
        const container = document.getElementById('page');
        container.innerHTML = '';
  
        // Add the new fact
        container.appendChild(factElement);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Create the main container element dynamically
  const mainContainer = document.createElement('main');
  mainContainer.id = 'factContainer';
  document.body.appendChild(mainContainer);
  
  // Add an event listener to the link element
  const linkElement = document.querySelector('.link');
  linkElement.addEventListener('click', renderUselessFact);