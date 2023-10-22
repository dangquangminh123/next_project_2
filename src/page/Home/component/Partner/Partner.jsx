import React from "react";
import Slider from "react-slick";
import "./partner.css";

function Partner(props) {
  const settings = {
    dots: false, // hiển thị chỉ số ảnh
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true, // ảnh tự chuyển động
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false, // hiển thị hai đấu mũi tên điều hướng
    responsive: [
      {
        breakpoint: 790,
        settings: {
          slidesToScroll: 0,
          slidesToShow: 0,
        },
      },
    ],
  };
  const listVoucher = [
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/64ac439f0e1b2e53a8d309c1254c8d21.png",
    },
    {
      url: "https://balotour.nhanhtravel.com/upload/balotour/6b13bb5e7d37c6946146f9bbc37d7214.png",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/31786a03dd8091ea694383eed2371fcb.jpg",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/4bf3f67a5db94eaa1ac297a139ab719f.gif",
    },{
      url: "https://balotour.nhanhtravel.com/upload/balotour/7d86d1f35524ab5a16720ecc3e5c6d1f.jpg",
    },{
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
    
  ];

  return <div className="container mt-4">
    <h3>Đối tác</h3>
   <Slider {...settings}>
   {listVoucher.map(item=>(
      <>
      <div className="mx-2">
        <img src={item.url} alt="" width='100%' style={{height:'130px'}} />
      </div>
      </>
    ))}
   </Slider>
  </div>;
}

export default Partner;
