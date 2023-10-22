import "./tintuc.css";
import Link from "next/link";

const Tintuc=()=>{
  const listGoodPrice = [
    {
      images: "https://balotour.nhanhtravel.com/upload/tour/20230418144836.png",
      name: "Côn Đảo",
      description: "Vùng đồng bằng sông Cửu Long hay còn gọi là sông Mekong có những thắng cảnh tuyệt đẹp",
    },
    {
      images: "https://balotour.nhanhtravel.com/upload/tour/20230404095423.png",
      name: "Hà Nội City nửa ngày (Tour riêng)",
      description: "Với vai trò thủ đô, Hà Nội là nơi tập trung nhiều địa điểm văn hóa giải trí, công trình thể thao quan trọng của đất nước,",
    },
    {
      images: "https://balotour.nhanhtravel.com/upload/tour/20230404094719.png",
      name: "TAM CHÚC - NGŨ ĐỘNG THI SƠN 1 NGÀY (T7&CN)",
      description: "Khu du lịch chùa Tam Chúc - Ngũ Động Thi Sơn thuộc tỉnh Hà Nam. Nằm cách thành phố Phủ Lý 8km khu danh thắng",
    },
  ];
    return(
      <section id="blog">
            <div className="blog-heading">
                <span>My Recent Posts</span>
                <h3>My Blog</h3>
            </div>

      
        <div className="blog-container">
          {listGoodPrice.map((item) => (
          <>
            <div className="blog-box">
                <div className="blog-img">
                  <img src={item.images} alt="" width="100%" />
                </div>
                <div className="blog-text">
                    <span></span>
                    <Link href="/tintuc" className="blog-title">
                      {item.name}
                    </Link>
                    <p>{item.description}</p>
                    <Link href="/tintuc" className="readmore">Read more</Link>
                </div>
            </div>
          </>
          ))}
        </div>
       
      </section>
    )
  }
  export default Tintuc