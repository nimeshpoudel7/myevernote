import { useState } from "react"
const Inputhook = (initialState='') => {
    const [value, setValue] = useState(initialState)
    const clearInput=()=>{
        setValue(initialState)
    }
    const bindForm={
        value:value,
        onChange:event=>{setValue(event.target.value)}
    }
    return [value,bindForm,clearInput]
}

export default Inputhook
