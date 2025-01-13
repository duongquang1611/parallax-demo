import React, { useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  // SOLUTION 1: scroll bg
  // const handleScroll = () => {
  //   const bg = document.querySelector(".bg") as HTMLElement;
  //   const container = document.querySelector(".container") as HTMLElement;

  //   if (bg && container) {
  //     const containerHeight = container.scrollHeight - window.innerHeight; // Phần cuộn thực tế
  //     const bgHeight = bg.offsetHeight; // Chiều cao thực tế của ảnh
  //     const scrollY = window.scrollY; // Vị trí cuộn hiện tại
  //     // Tính tỉ lệ di chuyển dựa trên sự chênh lệch chiều cao
  //     const scrollRatio = scrollY / containerHeight;

  //     // Dịch chuyển ảnh theo tỉ lệ
  //     const translateY = (container.scrollHeight - bgHeight) * scrollRatio;

  //     bg.style.transform = `translateY(${translateY}px)`;
  //   }
  // };

  // SOLUTION 2: scroll bg2
  const handleScroll = () => {
    const bg = bgRef.current;
    const container = containerRef.current;

    if (bg && container) {
      const containerHeight = container.scrollHeight - window.innerHeight; // Phần cuộn thực tế
      const bgHeight = bg.offsetHeight;
      const scrollY = window.scrollY;

      const scrollRatio = scrollY / containerHeight;

      bg.scrollTo({
        // because img height 150%
        top: (bgHeight / 2) * scrollRatio,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      {/* <div className="bg"></div> */}
      <div className="bg2" ref={bgRef}>
        <div className="img2"></div>
      </div>
      {/* <img className="bg" src={"src/assets/sir.jpg"} /> */}
      {/* <div className="content">QQQQQQ</div> */}
      {/* <img src="rock1.png" className="rock1" alt="rock1" />
        <img src="rock1.png" className="rock2" alt="rock2" /> */}
      <div className="static">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum minus
        repellat. Veritatis est, facilis cupiditate veniam distinctio minima,
        voluptates delectus odio dicta dignissimos corporis harum, reprehenderit
        praesentium. Consequatur, sint. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Eius eum minus repellat. Veritatis est, facilis
        cupiditate veniam distinctio minima, voluptates delectus odio dicta
        dignissimos corporis harum, reprehenderit praesentium. Consequatur,
        sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum minus
        repellat. Veritatis est, facilis cupiditate veniam distinctio minima,
        voluptates delectus odio dicta dignissimos corporis harum, reprehenderit
        praesentium. Consequatur, sint. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Eius eum minus repellat. Veritatis est, facilis
        cupiditate veniam distinctio minima, voluptates delectus odio dicta
        dignissimos corporis harum, reprehenderit praesentium. Consequatur,
        sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum minus
        repellat. Veritatis est, facilis cupiditate veniam distinctio minima,
        voluptates delectus odio dicta dignissimos corporis harum, reprehenderit
        praesentium. Consequatur, sint. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Eius eum minus repellat. Veritatis est, facilis
        cupiditate veniam distinctio minima, voluptates delectus odio dicta
        dignissimos corporis harum, reprehenderit praesentium. Consequatur,
        sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum minus
        repellat. Veritatis est, facilis cupiditate veniam distinctio minima,
        voluptates delectus odio dicta dignissimos corporis harum, reprehenderit
        praesentium. Consequatur, sint. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Eius eum minus repellat. Veritatis est, facilis
        cupiditate veniam distinctio minima, voluptates delectus odio dicta
        dignissimos corporis harum, reprehenderit praesentium. Consequatur,
        sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum minus
        repellat. Veritatis est, facilis cupiditate veniam distinctio minima,
        voluptates delectus odio dicta dignissimos corporis harum, reprehenderit
        praesentium. Consequatur, sint. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Eius eum minus repellat. Veritatis est, facilis
        cupiditate veniam distinctio minima, voluptates delectus odio dicta
        dignissimos corporis harum, reprehenderit praesentium. Consequatur,
        sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius eum
        minus repellat. Veritatis est, facilis cupiditate veniam distinctio
        minima, voluptates delectus odio dicta dignissimos corporis harum,
        reprehenderit praesentium. Consequatur, sint. Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Eius eum minus repellat. Veritatis
        est, facilis cupiditate veniam distinctio minima, voluptates delectus
        odio dicta dignissimos corporis harum, reprehenderit praesentium.
        Consequatur, sint. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Eius eum minus repellat. Veritatis est, facilis cupiditate veniam
        distinctio minima, volupt
      </div>
    </div>
  );
};

export default App;
