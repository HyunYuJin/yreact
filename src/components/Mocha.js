import { useState } from '../core/YReact'

export function Mocha () {
  const [mocha, setMocha] = useState(5500)
  const [count, setCount] = useState(1)

  window.increment = () => {
    setMocha(mocha + 5500)
    setCount(count + 1)
  }
  window.decrement = () => {
    setMocha(mocha - 5500)
    setCount(count - 1)
  }

  return `
    <div>
      <h2>라떼</h2>
      <button onclick="increment()">라떼 추가</button>
      <button onclick="decrement()">라떼 취소</button>
      <p>총 개수: ${count}개</p>
      <p>총 금액: ${mocha}원</p>
    </div>
  `
}