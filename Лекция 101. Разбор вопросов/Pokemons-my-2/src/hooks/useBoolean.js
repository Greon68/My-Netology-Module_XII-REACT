import { useState } from "react"

export const useBoolean = (defaultValue) => {
    const [state, setState] = useState(defaultValue)
    const control = {
        on: ()=> setState(true),
        off: ()=> setState(false),
        toggle: (value)=> setState(!value),
        set: (value)=> setState(value)
    }
    return [state, control]

}