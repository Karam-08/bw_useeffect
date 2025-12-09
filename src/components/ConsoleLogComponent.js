import {useEffect} from 'react'

function ConsoleLogComponent(){
    useEffect(() =>{
        console.log("Hello World!")
    }, []);

    return(
        <div>
            <h1>Hello World!</h1>
        </div>
    )
}

export default ConsoleLogComponent;