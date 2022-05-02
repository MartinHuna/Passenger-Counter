let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}
let saveEl = document.getElementById("save-el")

function save() {
    let totalVisits = count + " - "
    saveEl.innerText += totalVisits

    console.log(count)
}
// youtube video: paused at 1:05:39 Good night!!!
