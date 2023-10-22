import "./about.css";
function About() {
  const ListImg=[
    {url:'https://balotour.nhanhtravel.com/upload/balotour/64ac439f0e1b2e53a8d309c1254c8d21.png'},
    {url:'https://balotour.nhanhtravel.com/upload/balotour/6b13bb5e7d37c6946146f9bbc37d7214.png'},
    {url:'https://balotour.nhanhtravel.com/upload/balotour/31786a03dd8091ea694383eed2371fcb.jpg'},
    {url:'https://balotour.nhanhtravel.com/upload/balotour/4bf3f67a5db94eaa1ac297a139ab719f.gif'},
    {url:'https://balotour.nhanhtravel.com/upload/balotour/7d86d1f35524ab5a16720ecc3e5c6d1f.jpg'},
    ,{
      url: "https://balotour.nhanhtravel.com/upload/balotour/bea8a71e0d642fd4c02add812e77f993.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/e4fce4ce4f49a12c3998e71b517a1d7e.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/4bb5f3978723abdbf0482b8f053ff7be.jpg",
    },

    ,{
      url: "https://balotour.nhanhtravel.com/upload/balotour/b948b6d3810eedd26a788f6d724c389e.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/c08999a29e20e42fa367236c5cd490f4.png",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/30725bb433e8797d0b7ca4bf440a6597.png",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/49588b7ea93e309168fd1c0104d971c1.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/4363200733444724b3f8632315559779.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/a151df06794531d66406352ec0d21049.png",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/757e8cefc36ca6159ba89260b6d723ff.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/944eda7bb7c0ee35d8f82850b7294fd6.jpg",
    },
    
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/d7110b13328ecbd85a30bf48374f3d34.png",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/976e9021e44333e2914b336cd02e08f9.png",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/1e45f006454e601508e35fb32713791d.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/f777fbcc42d7d89ce8cedd6344dbe18c.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/3196cd90bd1f2354274ba6c14a55a089.png",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/b55145eb3fe4cae819cc6d677f0c3277.jpg",
    }, {
      url: "https://balotour.nhanhtravel.com/upload/balotour/70465b7351946d51782526ac305967d7.png",
    }, {
      url: "https://balotour.nhanhtravel.com/upload/balotour/a51cb46c12ab7883aa1fd993cfea4d5e.png",
    },


    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/1ac915cc79220a81b6814d3dea5ec3d2.png",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/9d50fe366d40fc5009c140af08defd11.png",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/64d735f1e4b0a8289d8963d7a495742f.png",
    },{
     url: "https://balotour.nhanhtravel.com/upload/balotour/1e058eea4f0534ae8ab047b5cea4998a.png",
    },{
     url: "https://balotour.nhanhtravel.com/upload/balotour/9a0f0b471a33ef79199cd719d36d324c.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/23705458c570b5a9ff64d719e63346c9.png",
    }, {
      url: "https://balotour.nhanhtravel.com/upload/balotour/28b8fc8e3fe9f345997039cc585a5bd0.jpg",
    }, {
      url: "https://balotour.nhanhtravel.com/upload/balotour/60ecf201fa6c9905b4398976e3b1af3b.jpg",
    },

    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/c0cbad1f8b8d5d0bc0ff392a7ad28cd9.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/99c5d9b1053184d5218c3dc175262615.png",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/858b80aa77e8ae475e4935c08f68af17.png",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/7f8617ebddb801ab10d3d1cbbdaac6d1.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/8460b19c5e790f1475e1acd93ce73751.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/944ef422c5bd9086a09b0bdb884b83e1.jpg",
    }, {
      url: "https://balotour.nhanhtravel.com/upload/balotour/a23fa6c17961b3a3d990f81098a7efe7.jpg",
    }, {
      url: "https://balotour.nhanhtravel.com/upload/balotour/51454cdd088a928591e502ce84e39e70.png",
    },

    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/30444cfb5ec7f9c2f59e4f7eccfcff96.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/dc0b9b50df797dcbba07145d1c7e0b9b.png",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/20d627c2d3db45041b6eac9ed1e5b853.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/f35e196c8228e63ef488b210f11e1022.png",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/82f5821a65cf4f648d7b65f39b625030.png",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/fc9d2a094b5b55c6bc7451bd6a3bd41e.jpg",
    }, {
      url: "https://balotour.nhanhtravel.com/upload/balotour/f417231c348cdf1733a00115df6938be.png",
    }, {
      url: "https://balotour.nhanhtravel.com/upload/balotour/6e77bcc5af01772811191cd4fd392b43.jpg",
    },

    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/bafed7a27a226b4022021354ba85355b.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/2963462787cb3111ac2d07a8725b1a7b.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/d76933a06c19a34d11da23b56bf03767.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/34e5b2543876b0ffa3ab830c1d5d2279.jpg",
    }

  ]
  const listKhachhang=[
    {url:'https://www.balotour.net/image/khach_hang/1.jpg'},
    {url:'https://www.balotour.net/image/khach_hang/2.jpg'},
    {url:'https://www.balotour.net/image/khach_hang/3.jpg'},
    {url:'https://www.balotour.net/image/khach_hang/4.jpg'},
    {url:'https://www.balotour.net/image/khach_hang/5.jpg'},
    {url:'https://www.balotour.net/image/khach_hang/6.jpg'},
    {url:'https://www.balotour.net/image/khach_hang/7.jpg'},
    {url:'https://www.balotour.net/image/khach_hang/16.jpg'},
    {url:'https://www.balotour.net/image/khach_hang/9.jpg'},
    {url:'https://www.balotour.net/image/khach_hang/10.jpg'},
    {url:'https://www.balotour.net/image/khach_hang/11.jpg'},
    {url:'https://www.balotour.net/image/khach_hang/12.jpg'},
    {url:'https://www.balotour.net/image/khach_hang/18.jpg'},
    {url:'https://www.balotour.net/image/khach_hang/14.jpg'},
    {url:'https://www.balotour.net/image/khach_hang/15.jpg'},

  ]
  return (
    <div>
      <div class="backgroundAbout">
        <div className="container text-white text-center">
          <div className="text-tileAbout">Về Balotour</div>
          <div className="text-contentAbout">
            Balotour chuyên tổ chức tour chất lượng trong và ngoài nước, Event
            sự kiện, Golf Tour và các giải đấu, Team Building, Cho thuê Xe,
            Hotel, Villa, Căn hộ, Hướng dẫn viên đa ngôn ngữ và Dịch vụ Visa.
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mb-3">
          <div className="col col-6">
            <div className="mt-3 mb-3">
              Nhiệm vụ của chúng tôi là thực hiện và tổ chức tốt chương trình
              tour mà khách hàng đã yêu cầu, đúng người đúng trách nhiệm. Hệ
              thống đội ngủ quản lý chặt chẻ của Balotour giúp cho chuyến đi của
              quý khách hàng luôn vui tươi và sản khoái, đội ngủ phục vụ nhiệt
              tình chu đáo từ điều hành, tài xế cho đến hướng dẫn viên. Để khách
              hàng luôn có trải nghiệm tốt nhất, với phương châm khách hàng vui
              là thành công của chúng tôi.
            </div>
            <div className="mt-3 mb-3">
              Chăm sóc trước và sau chuyến đi mang lại sự an toàn và hài lòng
              cho quý khách hàng.
            </div>
            <div className="mt-3 mb-3">
              Tổ chức Tour, Sự kiện, Team Building, Gala dinner với các trò chơi
              mới lạ. Nâng cao hiệu quả kinh doanh và đáp ứng được nhu cầu của
              khách hàng cũng như bắt kịp xu hướng dịch vụ mới trong ngành du
              lịch. Chúng tôi hy vọng mình có thể góp phần công sức nhỏ bé giúp
              phát triển ngành du lịch Việt Nam ngày càng phát triển thịnh
              vượng.
            </div>
            <div className="mt-3 mb-3">
              <strong>BALOTOUR</strong> đã và đang hợp tác rất hiệu quả với
              nhiều doanh nghiệp trong và ngoài nước. Với mong muốn mở rộng,
              phát triển kinh doanh và phát huy thế mạnh của mình
            </div>
            <div className="mt-3 mb-3">
              <strong>BALOTOUR</strong> Kính chúc quý khách luôn có những chuyến
              tham quan du lịch & nghỉ dưỡng vui vẻ.
            </div>
          </div>
          <div className="col col-6 mt-3">
            <img src="https://nhanhtravel.com/wp-content/uploads/2022/12/telework-g5879ec90a_1280.jpg" alt="" width="100%"/>
          </div>
        </div>
        <h1 className="text-center text-xanhdam mb-5 mt-5">
          TẦM NHÌN - SỨ MỆNH
        </h1>
        <div className="row mt-3 mb-3">
          <div className="col col-6 d-flex">
            <div className="col-1">
              <img style={{ height: "50px" }} src="https://nhanhtravel.com/wp-content/uploads/2022/12/focus-e1670649317822.png" alt="" width="50px" />
            </div>
            <div className="col">
              <h1 className="text-primary mb-3">TẦM NHÌN</h1>
                <div>
                  Balotour phấn đấu trở thành top 10 doanh nghiệp cung cấp dịch vụ
                  du lịch tốt nhất tại Việt Nam.
                </div>
            </div>
          </div>
          <div className="col col-6 d-flex">
            <div className="col-1">
              <img style={{ height: "50px" }} src="https://nhanhtravel.com/wp-content/uploads/2022/12/target-1-e1670648841357.png" alt="" width="50px"/>
            </div>
            <div className="col">
              <h1 className="text-primary mb-3">SỨ MỆNH</h1>
              <div>
                Chúng tôi ước mơ, khao khát được đồng hành cùng quý khách hàng
                Đi Khắp Muôn Nơi và mang lại sự vui vẻ cho mọi người. Giúp tất
                cả quý khách hàng gắn kết tình đồng đội và gia đình sau những
                chuyến đi. GIÁ TRỊ CỐT LÕI
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-xanhdam mb-3 text-center mb-5 mt-5">
          GIÁ TRỊ CỐT LÕI
        </h1>
        <div className="row">
          <div className="col col-4">
            <div className="card mb-3">
              <div className="card-title text-center">
                <h4 className="text-primary  mt-3 mb-3">Nhiệt huyết</h4>
                <div className="container">
                  Nhiệt quyết là hơi thở, mục đích sống, là mục tiêu của bản
                  thân và tập thể Balotour. Chúng tôi quyết chinh phục mọi thử
                  thách bằng nhiệt huyết và niềm đam mê của mình.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-title text-center">
                <h4 className="text-primary  mt-3 mb-3">Sáng tạo</h4>
                <div className="container">
                  Sáng tạo là linh hồn là sức sống, chúng tôi đề cao tin thần
                  dám nghĩ dám làm, không ngừng tìm kiếm giải pháp mang lại lợi
                  ích vượt trội cho khách hàng và đối tác.{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col col-4">
            <img width="100%" src="https://nhanhtravel.com/wp-content/uploads/2022/12/Group-19128.png" alt=""/>
          </div>
          <div className="col col-4">
            <div className="card mb-3">
              <div className="card-title text-center">
                <h4 className="text-primary  mt-3 mb-3">Trách Nhiệm</h4>
                <div className="container">
                  Balotour nhận thức rõ và có trách nhiệm đến cùng nhằm đảm bảo
                  tính đúng đắn, chắc chắn với các cam kết, hoạt động của doanh
                  nghiệp đối với chính mình, khách hàng, đối tác và xã hội.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-title text-center">
                <h4 className="text-primary  mt-3 mb-3">Trung thực</h4>
                <div className="container">
                  Cam kết tôn trọng sự thật khách quan. Ngay thẳng, liêm chính,
                  học hỏi từ sai lầm.
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-xanhdam mb-3 text-center mb-5 mt-5">
          SƠ ĐỒ CÔNG TY
        </h1>
        <img width="100%" src="https://www.balotour.net/image/so-do-cong-ty.jpg" alt="" />
        
          <h1 className="text-xanhdam mb-3 text-center mb-5 mt-5">ĐỐI TÁC</h1>
          <div className="row">
            {ListImg.map(item=>(
              <>
                <div className="col-2 mb-3">
                    <div className="card text-center">
                      <img className='mx-auto d-block' style={{height:'100px',width:'100px'}} src={item.url} alt="" />
                    </div>
                </div>
              </>
            ))}
          </div>
          <h1 className="text-center text-xanhdam mb-4">KHÁCH HÀNG</h1>
            <div className="row">
              {listKhachhang.map(item=>(
                  <div className="col-4 px-0">
                    <img src={item.url} style={{width:'100%',height:'200px'}} alt="" />
                  </div>
              ))}
           </div>
           <iframe className="mt-5" width="100%" height="315" src="https://youtu.be/hQmKOnxA-oQ" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  );
}
export default About;
