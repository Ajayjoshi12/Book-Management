import { useRef, useState } from 'react'
import './Login.css'
import validator from 'validator'


export default function Login() {

    const i1 = useRef()
    const i2 = useRef()

    const [error, setError] = useState(null)

    const myClickHandler = (e) => {
        e.preventDefault()

        if (validator.isEmpty(i1.current.value)) {
            return setError("Email is Required");

        } else if (!validator.isEmail(i1.current.value)) {
            return setError("Invalid Email");
        } else {
            setError("")
        }


        if (validator.isEmpty(i2.current.value)) {
            return setError("password is Required");

        } else if (!validator.isStrongPassword(i2.current.value)) {
            return setError("Invalid Password");

        } else {
            setError("")
        }




    }

    return (
        <div>
            <div className="container" style={{padding: "50px 0px"}}>
                {/* <h1 className="text-center">Welcome to Book Management</h1> */}
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-9 col-sm-12">
                        <div className='main-div'>
                            <div className="text-center">
                                <h1 style={{ paddingBottom: "30px" }}>Login</h1>
                                <form action="">
                                    <div className='row'>
                                        <div className='col-lg-12'>
                                            <div className='radio-main'>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                    <label className="form-check-label" for="inlineRadio1">Admin</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                    <label className="form-check-label" for="inlineRadio1">User</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" style={{ paddingBottom: "20px" }}>
                                        <div className="col-lg-12">
                                            <input ref={i1} type="email" className="form-control" placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <div className="row" style={{ paddingBottom: "20px" }}>
                                        <div className="col">
                                            <input ref={i2} type="password" className="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="row text-center">
                                        <div className='col-lg-12'>
                                            <div>
                                                {error !== null && <p style={{ color: "red" }}>{error}</p>}
                                                <button onClick={myClickHandler} className="btn-main">Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}