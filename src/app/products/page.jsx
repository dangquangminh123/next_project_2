import "./product.css";
import Link from "next/link";

const Products=()=>{
  const listProduct = [
    {
      images: "https://balotour.nhanhtravel.com/upload/tour/20230224133544.png",
      title: "Sapa là một địa điểm du lịch nổi tiếng thuộc tỉnh Lào Cai, nằm tại phía Bắc của nước ta",
      text: "HÀ NỘI - SAPA - CÁT CÁT hoặc HÀM RỒNG ",
    },
    {
      images: "	https://balotour.nhanhtravel.com/upload/tour/20230404094719.png",
      title: "Khu du lịch chùa Tam Chúc - Ngũ Động Thi Sơn thuộc tỉnh Hà Nam.",
      text: "TAM CHÚC - NGŨ ĐỘNG THI SƠN 1 NGÀY (T7&CN)",
    },
    {
      images: "	https://balotour.nhanhtravel.com/upload/tour/20230627162753.png",
      title: "Spa, Đất cát, Hà Nam",
      text: "Khu du lịch chùa Tam Chúc - Ngũ Động Thi Sơn thuộc tỉnh Hà Nam",
    },
  ];

  return(
    <section id="product">
      <div className="product-heading">
          <span>Tour</span>
          <h3>My Tour</h3>
      </div>
      <div className="product-container">
        {listProduct.map((item) => (
        <>
          <div className="product-box">
              <div className="product-img">
                <img src={item.images} alt="" width="100%" />
              </div>
              <div className="product-text">
                  <span></span>
                  <Link href="/tintuc" className="product-title">
                    {item.title}
                  </Link>
                  <p>{item.text}</p>

              </div>
          </div>
        </>
        ))}
      </div>

      </section>
  )
}
export default Products