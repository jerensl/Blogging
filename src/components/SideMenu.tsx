import React, { useReducer } from 'react'

interface State {
  toggle: boolean
}

type Action = {
  type: 'on' | 'off'
}

const initialState: State = {
  toggle: false,
}

type Dispatch = (action: Action) => void

const MenuContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

function menuReducer(state: State, action: Action) {
  switch (action.type) {
    case 'on': {
      return {
        ...state,
        toggle: true,
      }
    }
    case 'off': {
      return {
        ...state,
        toggle: false,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

type Props = {
  children: JSX.Element
}

function MenuProvider({ children }: Props): React.ReactElement {
  const [state, dispatch] = useReducer(menuReducer, initialState)

  const value = { state, dispatch }

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

function useMenu() {
  const context = React.useContext(MenuContext)
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider')
  }
  return context
}

export { MenuProvider, useMenu }
