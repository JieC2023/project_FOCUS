function renderSaveList() {
	document.querySelector('#page').innerHTML = `
		<h1>Well done, you have made your first list!</h1>
		<h3>You can 
			<span onClick="renderSignUp()">Signup</span> or 
			<span onClick="renderLogin()">Login</span> to create more lists!
		</h3>
		<p>Continue as a guest</p>
	`;
}
