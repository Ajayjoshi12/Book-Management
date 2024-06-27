import { Link } from 'react-router-dom'
import './AdminBook.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function AdminBook() {

    const [bookdata, setBookData] = useState(false)

    useEffect(()=>{
        axios.get('http://localhost:8000/admin/books')
        .then(response => {
            setBookData(response.data.bookData)
        })
        .catch(error => {
            setBookData(false)
        });
    },[])



    return (
        <div className="container" style={{ padding: "50px 0px" }}>
            <div className="row">
                <div className='col-lg-12'>
                    <div className="text-center" style={{paddingBottom:"40px"}}>
                        <Link to="/add" style={{textDecoration:"none"}} className='btn-add'>Add Book</Link>
                    </div>
                </div>
            </div>
            {bookdata && bookdata.map((book)=>{
                return <div className='main-book'>
                <div className="row no-gutters">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div>
                            <img src={book.imgName} className="img-fluid img-size" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12" style={{ borderRight: "1px solid #ddd" }}>
                        <div >
                            <ul>
                                <li className="list-sub">Book Name : {book.name}</li>
                                <li className="list-sub">Book Category : {book.category}</li>
                                <li className="list-sub">Author : {book.author}</li>
                                <li className="list-sub">Language : {book.language}</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12' style={{position:"relative"}}>
                        <div >
                            {/* <div className='price-main'>
                                <h1>$9</h1>
                            </div> */}
                            <div className="text-center d-flex justify-content-center" style={{position:"absolute",top:"50%",margin:"0",transform:"translateY(-50%)"}}>
                                {/* <button formTarget='_blank' onClick={()=>{readBook(book.pdfName)}} className="btn-delete">Read</button>
                                 */}
                                 <a target='_blank' style={{textDecoration:"none"}} href={`http://localhost:8000/admin/read/${book.pdfName}`} className="btn-delete">Read</a>
                                <Link to="/edit" className="btn-delete" style={{textDecoration:"none"}}>Edit</Link>
                                <button className="btn-delete">Delete</button>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            })}

            {bookdata === false && <h1>Error while loading book data</h1>}
        </div>
    )
}