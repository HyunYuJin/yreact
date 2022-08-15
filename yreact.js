let currentStateKey = 0
const states = []

export function useState (initState) {
  const index = currentStateKey

  if (states.length === currentStateKey) {
    states.push(initState)
  }

  const setState = (newState) => {
    states[currentStateKey] = newState

    render()
  }

  currentStateKey++
  
  return [states[index], setState]
}

export const render = (...args) => {
  const $root = document.getElementById('root')

  $root.innerHTML =  `
    <div>
      ${args.map(arg => arg())}
    </div>
  `
  
  currentStateKey = 0
}