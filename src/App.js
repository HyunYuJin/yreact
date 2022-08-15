import { Americano } from "./components/Americano"
import { Latte } from "./components/Latte"
import { Mocha } from "./components/Mocha"

export const App = () => `
  <div>
    ${Americano()}
    ${Latte()}
    ${Mocha()}
  </div>
`