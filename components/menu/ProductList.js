import { getFetch } from "@/utils/fetch";
import Product from "../products/Product";
import Image from "next/image";
import Paginate from "./Paginate";

export default async function ProductList({params}) {

    const data = await getFetch(`/menu?${params}`)
    // console.log(data);
    
  return (
    <>
      
        <div className="row gx-3">
            {
                data.products.map(product => (
                    <div  key={product.id} className="col-sm-6 col-lg-4">
                    {/* <div className="box">
                        <div>
                            <div className="img-box">
                                <img className="img-fluid" src="./images/b1.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    لورم ایپسوم متن
                                </h5>
                                <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                    از
                                    طراحان
                                    گرافیک است.
                                </p>
                                <div className="options">
                                    <h6>
                                        <del>45,000</del>
                                        34,000
                                        <span>تومان</span>
                                    </h6>
                                    <a href="">
                                        <i className="bi bi-cart-fill text-white fs-5"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <Product product={product}/>
                </div>
                ))
            }
                        
                       
                    </div>
         
        
      
    <Paginate links={data.meta.links}/>
      
    </>
  );
}
