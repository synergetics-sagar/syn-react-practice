import React, { createRef } from "react";

export default class ClassUncontrolledForm extends React.Component {
    constructor(props){
        super(props)

        this.nameRef = createRef()
        this.emailRef = createRef()
        this.passwordRef = createRef()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(this.nameRef)
        console.log({
            name: this.nameRef.current.value,
            email: this.emailRef.current.value,
            password: this.passwordRef.current.value
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={this.nameRef}  placeholder="Enter Name" />
                    <input type="text"  ref={this.emailRef} placeholder="Enter Email" />
                    <input type="password"  ref={this.passwordRef} placeholder="Enter Password" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}