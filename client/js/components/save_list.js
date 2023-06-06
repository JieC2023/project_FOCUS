function renderSaveList() {
	document.querySelector('#page').innerHTML = `
		<h1>Well done, you have made your first list!</h1>
		<h3>You can 
			<span class="link" onClick="renderSignUp()">Signup</span> or 
			<span class="link" onClick="renderLogin()">Login</span> to create more lists!
		</h3>
		<p><span class="link" onClick="renderUserLists()">Continue</span> as a guest</p>
	`;
}
