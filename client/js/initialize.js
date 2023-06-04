const state = {
  tasks: [],
  lists: [],
  activityTypes: ['Busywork', 'Charity', 'Cooking', 'DIY', 'Education', 'Music', 'Recreational', 'Relaxation', 'Social']
}

function renderHome() {
    document.querySelector('.page-CSS').innerHTML = `
    <link rel="stylesheet" href="./css/home.css">
    `
    document.querySelector('#page').innerHTML = `
        <h1 class="link" onClick="renderAddTask()">Get Started!</h2>
        <h2 class="link" onClick="renderTaskGenerator()">
            I'm bored... <br>
            Any suggestions?
        </h2>
    `
}

function checkUser() {
    fetch('/api/sessions')
    .then(res => res.json())
    .then(data => {
      if (data.result === 'successful') {
          state.loggedInUser = data.email
          document.querySelector('.user-controls ul').innerHTML = `
              <h3>Welcome back!</h3>
              <span class="button" onClick="">Log Out</span>
          `
      } else {
          document.querySelector('.user-controls ul').innerHTML = `
                <li class="button" onClick="renderSignUp()">Sign Up</li>
                <li class="button" onClick="renderLogin()">Login</li>
          `
      }
    })
}

checkUser()