import Image from "next/image";


function Product({product}) {
  return (
    <div>
      <div className="box">
        <div>
          <div className="img-box">
            <Image src={product.primary_image} 
            width='100'
            height='65'
            sizes="100vw"
            style={{
                width:'100%',
                height:'auto'
            }}
            alt="product-image" />
          </div>
          <div className="detail-box">
            <h5>{product.name}</h5>
            <p>
              {product.description}
            </p>
            <div className="options">
              <h6>
             {product.is_sale?(
                <>
                <span>{product.sale_price}</span>
                <del className="me-1">{product.price}</del>
                </>
             ) :(
                <span>{product.price}</span>
             )}
                <span>تومان</span>
              </h6>
              <a href="">
                <i className="bi bi-cart-fill text-white fs-5"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
