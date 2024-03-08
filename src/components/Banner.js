import React from "react";
import { Row, Col, Button } from "antd";
import Link from "next/link";

function IntroductionOne({ data }) {
  return (
    <div className="introduction-one">
      {data.map((item, index) => (
        <div
          key={index}
          className="introduction-one-item"
          style={{ backgroundImage: `url('${item.background}')` }}
        >
          <img src={item.image} alt="Introduction image" />
          <Button type="primary" shape="round">
            <Link href="">
              <a href="">
                Shop now
              </a>
            </Link>
          </Button>
        </div>
      ))}
    </div>
  );
}

export default React.memo(IntroductionOne);
