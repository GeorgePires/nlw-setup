const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const btn = document.querySelector("header button")

//const data = {
//  run: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06"],
//  water: ["01-01", "01-03", "01-06"],
//  food: ["01-03", "01-02", "01-06"],
//  english: ["01-01", "01-02", "01-04", "01-06"],
//}

//nlwSetup.setData(data)
//nlwSetup.load()

btn.addEventListener("click", add)

function add() {
  const today = new Date().toLocaleDateString().slice(0, 5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Day already exists ❌")
    return
  }

  alert("Registered day ✅")
  nlwSetup.addDay(today)
}
