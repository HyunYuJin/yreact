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
    if (states.length === key) {
      states.push(initState)
    }

    console.log(states.length, key, states)
    
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