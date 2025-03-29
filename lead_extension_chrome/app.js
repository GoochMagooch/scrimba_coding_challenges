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