let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeadsStorage", myLeads)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let storageItems = localStorage.getItem("myLeadsStorage")
    let storageItemsArray = storageItems.split(",")
    let storageArrayItems = ""
    for (let i = 0; i < storageItemsArray.length; i++) {
        storageArrayItems += `<li><a target="_blank" href="${storageItemsArray[i]}">${storageItemsArray[i]}</a></li>`
    }
ulEl.innerHTML = storageArrayItems
}

renderLeads()

// Stores old leads
/*
let allLeads = ''
function oldLeads() {
    allLeads = JSON.parse(localStorage.getItem("myLeadsStorage")) || []
    myLeads.push(storageArray)
    localStorage.setItem("myLeadsStorage", JSON.stringify(myLeads))
}

oldLeads()
*/

// What I think I have to do:
// Take current local storage (item 1)
// Store as second local storage item (item 2)
// Upon document reload both items will store original list of leads
// Item 1 will be cleared, with the event listener, item 2 will be appended with new leads
// Upon next reload, item 1 will contain previous leads, item 2 will contain all leads up to that point