import { useRef, useState } from 'react'
import './EditBook.css'
import validator from 'validator'
import { useNavigate } from 'react-router-dom'

export default function EditBook() {

    const i3 = useRef()
    const i4 = useRef()
    const i5 = useRef()

    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const myClickAdd = (e) => {
        e.preventDefault()

        if (validator.isEmpty(i3.current.value)) {
            return setError("Book Name is Required");

        } else {
            setError("")
        }


        if (validator.isEmpty(i4.current.value)) {
            return setError("Author is Required");

        } else {
            setError("")
        }

        if (validator.isEmpty(i5.current.value)) {
            return setError("Language is Required");

        } else {
            setError("")
        }


        navigate("/admin")
    }

    return (
        <div className="container" style={{ padding: "50px 0px" }}>
            <div className="row justify-content-center">
                <div className="col-lg-9 col-sm-12">
                    <div className="main-add2">
                        <div >
                            <h1 className='text-center' style={{ paddingBottom: "30px" }}>Edit Book</h1>
                            <form action="">
                                <div className="row" style={{ paddingBottom: "20px" }}>
                                    <div className="col-lg-3 col-sm-12">
                                        <label for="inputtext">Book Name</label>
                                    </div>
                                    <div className="col-lg-9 col-sm-12">
                                        <input ref={i3} type="text" className="form-control" id="inputtext" />
                                    </div>
                                </div>
                                <div className="row" style={{ paddingBottom: "20px" }}>
                                    <div className="col-lg-3 col-sm-12">
                                        <label for="inputselect">Book Category</label>
                                    </div>
                                    <div className="col-lg-9 col-sm-12">
                                        <select className="form-control form-control-md">
                                            <option>category 1</option>
                                            <option>category 2</option>
                                            <option>category 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row" style={{ paddingBottom: "20px" }}>
                                    <div className="col-lg-3 col-sm-12">
                                        <label for="inputtext">Author</label>
                                    </div>
                                    <div className="col-lg-9 col-sm-12">
                                        <input ref={i4} type="text" className="form-control" id="inputtext" />
                                    </div>
                                </div>
                                <div className="row" style={{ paddingBottom: "20px" }}>
                                    <div className="col-lg-3 col-sm-12">
                                        <label for="inputtext">Language</label>
                                    </div>
                                    <div className="col-lg-9 col-sm-12">
                                        <input ref={i5} type="text" className="form-control" id="inputtext" />
                                    </div>
                                </div>
                                <div class="row" style={{ paddingBottom: "20px" }}>
                                    <div class="col-lg-3 col-sm-12">
                                        <label for="inputfile">Img Link</label>
                                    </div>
                                    <div class="col-lg-9 col-sm-12">
                                        <input type="file" id="inputfile" />
                                    </div>
                                </div>
                                <div class="row" style={{ paddingBottom: "20px" }}>
                                    <div class="col-lg-3 col-sm-12">
                                        <label for="inputfile">Pdf Link</label>
                                    </div>
                                    <div class="col-lg-9 col-sm-12">
                                        <input type="file" id="inputfile" />
                                    </div>
                                </div>
                                <div className='row text-center'>
                                    <div className='col-lg-12'>
                                        <div>
                                            {error !== null && <p style={{ color: "red" }}>{error}</p>}
                                            <button onClick={myClickAdd} className='btn-submit2'>Edit Book</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}