import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      {/* image */}
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/41u2mCeGKiL.jpg"
        alt=""
      />
      {/* Product */}
      <div className="product__product">
        <div className="home__product">
          <Product
            id={1}
            title="awesome AmaZon Home with a perfect settings"
            image="https://images-eu.ssl-images-amazon.com/images/G/08/FR-hq/2020/img/Home_Improvement/XCM_Manual_1226818_1187715_FR_fr_fr_sh_jun20_storefront_3119316_200x200_2X_fr_FR.jpg"
            price={60}
            rating={3}
            key={1}
          />
        </div>
        <div className="home__product">
          <Product
            id={2}
            title="awesome AmaZon Home with a perfect settings"
            image="https://images-eu.ssl-images-amazon.com/images/G/08/FR-hq/2020/img/Home_Improvement/XCM_Manual_1226818_1187715_FR_fr_fr_sh_jun20_storefront_3119316_200x200_2X_fr_FR.jpg"
            price={60}
            rating={3}
            key={2}
          />
        </div>
        <div className="home__product">
          <Product
            id={3}
            title="awesome AmaZon Home with a perfect settings"
            image="https://images-eu.ssl-images-amazon.com/images/G/08/FR-hq/2020/img/Home_Improvement/XCM_Manual_1226818_1187715_FR_fr_fr_sh_jun20_storefront_3119316_200x200_2X_fr_FR.jpg"
            price={60}
            rating={3}
            key={3}
          />
        </div>

        <div className="home__product">
          <Product
            id={4}
            title="rich dad poor dad"
            image="https://booklife.com/image-factory/http/localhost/amazongetcover/9780446693219.jpg/w204.jpg"
            price={30}
            rating={4}
            key={4}
          />
        </div>
        <div className="home__product">
          <Product
            id={5}
            title="Google home"
            image="https://i.ytimg.com/an/56miYa3-7gY/5eb1e608-e641-4bba-9b77-dd99ec9f016e_mq.jpg?v=59807994"
            price={60}
            rating={3}
            key={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
