import React from "react";

export default function Navbar(){
    function handleSignup(){

    }
    return(
        <nav className="bg-body-tertiary w-full">
        <div className="container mx-auto flex justify-between items-center">
          <a className="text-xl font-bold">Mess App</a>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success" type="submit" onClick={handleSignup()}>Signup</button>
          </form>
        </div>
      </nav>
    )
}