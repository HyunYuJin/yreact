let currentStateKey = 0
const states = []

function useState (initState) {
  const index = currentStateKey

  if (states.length === index) {
    states.push(initState)
  }

  const setState = (newState) => {
    states[index] = newState

    render()
  }

  currentStateKey++

  return [states[index], setState]
}

function Americano () {
  const [americano, setAmericano] = useState(4500)

  window.addAmericano = () => setAmericano(americano + 4500)

  return `
    <div>
      <h2>아메리카노</h2>
      <button onclick="addAmericano()">아메리카노 추가</button>
      <p>총 금액: ${americano}원</p>
    </div>
  `
}

function Latte () {
  const [latte, setLatte] = useState(5000)

  window.addLatte = () => setLatte(latte + 5000)

  return `
    <div>
      <h2>라떼</h2>
      <button onclick="addLatte()">라떼 추가</button>
      <p>총 금액: ${latte}원</p>
    </div>
  `
}

let renderCount = 0
const render = () => {
  const $root = document.querySelector('#root')

  $root.innerHTML = `
    <div>
      ${Americano()}
      ${Latte()}
    </div>
  `

  console.log(renderCount)

  currentStateKey = 0
  renderCount++
}

render()