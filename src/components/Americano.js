import { useState } from '../core/YReact'

export function Americano () {
  const [americano, setAmericano] = useState(4500)

  window.addAmericano = () => { 
    setAmericano(americano + 4500)
  }

  return `
    <div>
      <h2>아메리카노</h2>
      <button onclick="addAmericano()">아메리카노 추가</button>
      <p>총 금액: ${americano}원</p>
    </div>
  `
}