import "./Banner.css";

function Banner() {
  return (
    <div className="mt-3 backgroundBanner">
      <div className="container">
        <div className="row">
          <div className="col-3 pt-4 pb-4">
            <img src="https://www.balotour.net/image/Group%20191.png" alt="" />
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <div className="card-img ">
              <img
                src="https://www.balotour.net/image/Vigolf.svg"
                alt=""
                width="100%"
              />
              <img
                src="https://www.balotour.net/image/appstore%20chplay.png"
                alt=""
                width="100%"
              />
            </div>
          </div>

          <div className="col-5  text-white d-flex flex-column justify-content-center">
            {" "}
            <h5>TẢI ỨNG DỤNG BALOTOUR </h5>
            <h4>NHẬN NGAY 10% ƯU ĐÃI CHO ĐƠN HÀNG ĐẦU TIÊN </h4>
            <ul>
              <div className="desc d-flex align-items-center">
                <img src="https://www.balotour.net/image/Layer%2011.svg"/>
                <div>Đặt các dịch vụ du lịch nhanh chóng tiện lợi.</div>
              </div>
              <div className="desc d-flex align-items-center">
                <img src="https://www.balotour.net/image/Layer%2011.svg"/>
                <div>Luôn có giá tốt nhất và nhiều chương trình khuyến mãi hấp dẫn và tích lũy điểm.</div>
              </div>
              <div className="desc d-flex align-items-center">
                <img src="https://www.balotour.net/image/Layer%2011.svg"/>
                <div>Giao diện ứng dụng trực quan dễ dàng tham khảo thông tin sản phẩm, dịch vụ.</div>
              </div>
              <div className="desc d-flex align-items-center">
                <img src="https://www.balotour.net/image/Layer%2011.svg"/>
                <div>Thanh toán trục tuyến dễ dàng với nhiều hình thức thanh toán đa dạng.</div>
              </div><div className="desc d-flex align-items-center">
                <img src="https://www.balotour.net/image/Layer%2011.svg"/>
                <div>Đội ngũ nhân viên tư vấn nhiều kinh nghiệm, chăm sóc tận tình.</div>
              </div> 
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
