function renderUserLists() {
    document.querySelector('#page').innerHTML = `
      <section class="user-lists">
        ${renderLists()}
      </section>
    `
}
  
function renderLists() {
    let sectionOpener
    return state.lists.map(list => {
        if (state.guestUser) {
            sectionOpener = `
                <section class="list" data-id="${state.lists.indexOf(list)}">
            `
        } else {
            sectionOpener = `
                <section class="list" data-id="${list.listId}">
            `
        }
        return `${sectionOpener}
            <header>
                <h2>${list.name}</h2>
                <span class="material-symbols-outlined delete" onClick="deleteList(event)">delete</span>
                <span onClick="renderUpdateList(${list.listId})">update</span>
            </header>
            <p>${list.description}</p>
        </section>
    `}).join('')
}
  
function deleteList(event) {
    const deleteBtn = event.target
    const listDOM = deleteBtn.closest('.list')
    const listId = listDOM.dataset.id
    fetch(`/api/lists/${listId}`, {
      method: 'DELETE'
    })
      .then(() => {
        state.lists = state.lists.filter(l => l.listId != listId)
        renderUserLists()
      })
}

function renderList() {
  document.querySelector('#page').innerHTML = `
    <section class="task-list">
      ${renderTasks()}
    </section>
  `
}
