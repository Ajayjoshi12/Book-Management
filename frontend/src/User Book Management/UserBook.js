import './UserBook.css'

export default function UserBook(){


    return(
        <div className="container" style={{ padding: "50px 0px" }}>
            <div className='main-book2'>
                <div className="row no-gutters">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div>
                            <img src="assets/img/book1.png" className="img-fluid img-size2" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12" style={{ borderRight: "1px solid #ddd" }}>
                        <div >
                            <ul>
                                <li className="list-sub2">Book Name</li>
                                <li className="list-sub2">Book Category</li>
                                <li className="list-sub2">Author</li>
                                <li className="list-sub2">Language</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12'>
                        <div>
                            <div className='price-main2'>
                                <h1>$9</h1>
                            </div>
                            <div className="text-center">
                                <a href="#" className="btn-read">Read</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}