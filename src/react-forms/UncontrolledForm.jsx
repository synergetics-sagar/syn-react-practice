import { useRef } from "react"

export default function UncontrolledForm(){
    
    const formRefs = useRef({})

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log({
            name: formRefs.current.name.value,
            email: formRefs.current.email.value,
            password: formRefs.current.password.value
        })
    }

    const registerInput = (name, el)=>{
        formRefs.current[name] = el
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={(el)=>registerInput("name", el)} placeholder="Enter Name" />
                <input type="text" ref={(el)=>registerInput("email", el)} placeholder="Enter Email" />
                <input type="password" ref={(el)=>registerInput("password", el)} placeholder="Enter Password" />
                <button>Submit</button>
            </form>
        </div>
    )
}