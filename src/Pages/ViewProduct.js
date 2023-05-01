import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ViewProduct() {
    const id = useParams()
    const [Products, setProducts] = useState([])
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id.id}`)
            .then((data) => setProducts(data.data.products))
            .catch((err) => console.log(err))
    }, [])
    console.log()


    return (
        <>
            <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src='' className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <p className="card-text"></p>
                            <p className="card-text"><small className="text-body-secondary"></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewProduct