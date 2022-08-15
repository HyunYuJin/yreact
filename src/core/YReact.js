function YReact () {
  const options = {
    currentStateKey: 0,
    renderCount: 0,
    states: [],
    root: null,
    rootComponent: null,
  }

  function useState (initState) {
    const { currentStateKey: key, states } = options
    
    console.log(states.length, key, states)
    // 0부터 접근할 수 있게 하는 이유는 initState를 넣냐 마냐를 위한 것이고,
    // key를 찾아갈 수 있는건 클로저의 개념을 대입해봤을 때 해당 컴포넌트에 key 값이 죽지 않고 살아있기 때문이다...?

    if (states.length === key) {
      states.push(initState)
    }

    
    const setState = (newState) => {
      if (states[key] === newState) {
        return
      }
      states[key] = newState

      _render()
    }

    options.currentStateKey++

    return [states[key], setState]
  }
  
  function render (rootComponent, root) {
    options.root = root
    options.rootComponent = rootComponent

    _render()
  }
  
  const _render = () => {
    const { root, rootComponent } = options
    if (!root || !rootComponent) {
      return
    }

    root.innerHTML = rootComponent()
    options.currentStateKey = 0
    options.renderCount++
  }

  return { useState, render }
}

export const { useState, render } = YReact()