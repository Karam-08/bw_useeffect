import {useState, useEffect} from 'react'

function Counter(){
    const [count, setCount] = useState(0)
    useEffect(() =>{
        document.title = `Count: ${count}`
    }, [count])

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={(() => setCount(count + 1))}>Add</button>
        </>
    )
}

export default Counter;