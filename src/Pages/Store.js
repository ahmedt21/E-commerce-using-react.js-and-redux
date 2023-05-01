import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ChangeLang from "./ChangeLang"
// import { useShoppingCart } from "../Context/ShoppingCartContext";

function Store() {
    // const { getItemQuantity } = useShoppingCart();
    // const quantity = 0
    const [Products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products',
            {
                params: {
                    _page: 1,
                    _limit: 5
                }
            })

            .then((data) => setProducts(data.data.products))
            .catch((err) => console.log(err))
    }, [])


    return (
        <>
            


            
            

            <h1>NEW STORE</h1>

            <ChangeLang />
            <div className="row d-flex justify-content-arround">
                {

                    Products.map((product) => {
                        // console.log(product)
                        return (
                            <>
                                <div className="col-lg-4 col-md-6" key={product.id}>
                                    <div className="card" style={{ width: '200', height: 400, margin: 20 }}>
                                        <img src={`${product.images[0]}`} className="card-img-top" height={225} alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text"><label style={{ color: 'brown', fontSize: 18 }}>price: </label>{' '}${product.price}</p>
                                            <Link to={`/viewproduct/${product.id}`} className="btn btn-primary">View Product</Link>
                                            <div className="mt-auto">


                                            {/* {quantity === 0 ? <button className="btn btn-info" style={{width:'100%', marginTop:'5px'}}>Add To Cart</button> :
                                                <div className="d-flex align-items-center flex-column">
                                                        <div className="d-flex align-items-center justify-content-center" style={{gap:'0.5rem'}}>
                                                            <button className="btn btn-dark">-</button>
                                                            <span className="fs-3">1 in Cart</span>
                                                            <button className="btn btn-dark">+</button>
                                                        </div>
                                                    <button className="btn btn-danger">Remove</button>
                                                </div>
                                            } */}
                                                
                                                        
                                                    
                                            

                                        </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div >



            



        </>
    )

}

export default Store