import { useState } from '../core/YReact'

export function Latte () {
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