const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const btn = document.querySelector("header button")

btn.addEventListener("click", add)
form.addEventListener("change", save)

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

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const getHabits = JSON.parse(localStorage.getItem("NLWSetup@habits"))

const data = getHabits || {}
nlwSetup.setData(data)
nlwSetup.load()
