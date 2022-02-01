import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div className="container border border-1 mt-5 p-5">
                <div className="text-center"><h1>Mon Formulaire</h1></div>
                <div>
                    <form action="" className="form-group">
                        <input type="text" name="last-name" placeholder="Last name"  className="form-control" /><br />
                        <input type="text" name="last-name" placeholder="First name"  className="form-control" /><br />
                        <input type="password" name="password" placeholder="Password"  className="form-control"/><br />
                        <input type="email" name="emael" placeholder="name@example.com" className="form-control"/><br />
                        <textarea name="" id="" cols="30" rows="6" placeholder="Message"  className="form-control" ></textarea> 
                        <div className="text-center">
                        <button  class="btn btn-primary p-3 px-5 mt-4 ">Envoyer</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}