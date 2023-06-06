function renderAdvice() {
  // Fetch the advice from the API
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      // Extract the advice from the response
      const advice = data.slip.advice;
			console.log(advice)

      // Render the advice on the HTML page
			const adviceSection = document.querySelector('#page');
			adviceSection.innerHTML = `
				<section class='render-advice'>
					<h2>${advice}</h2>
				</section>
			`	

    })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
}