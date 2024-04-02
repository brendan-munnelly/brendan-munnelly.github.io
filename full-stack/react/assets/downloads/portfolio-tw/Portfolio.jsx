import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <h1>
        <b>Portfolio page</b>
      </h1>
      <p>This is some placeholder text.</p>

      <section className="lg:py-13 md-pl-2 xl-pl-16 xl:py-22  py-6 pl-8 md:px-14 md:py-12 lg:py-14 2xl:pl-28">
        <h2 className="mb-1 text-3xl font-semibold tracking-tight text-black md:mb-4 md:max-w-2xl md:text-5xl lg:mb-6 lg:max-w-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Tailwind section
        </h2>
        <p
          className="text-lg leading-relaxed text-black md:max-w-2xl md:text-2xl
        md:leading-relaxed lg:max-w-3xl lg:text-2xl lg:leading-relaxed xl:max-w-4xl xl:text-3xl xl:leading-relaxed
        2xl:max-w-4xl 2xl:text-3xl 2xl:leading-relaxed"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          commodi repellendus <a href="dgffdg.html">hyperlink</a> aliquam illo
          ut temporibus voluptatum totam iste vitae doloremque ipsum officiis,
          autem dolore earum praesentium? Quae voluptatum maxime at?
        </p>
      </section>


      <img
        src="../public/images/project-fashion.jpg"
        alt="Fashion web page project"
      />
      <img
        src="../public/images/project-smoothie.jpg"
        alt="Smoothie web page project"
      />

      <img
        src="../public/images/project-crypto-wallet.jpg"
        alt="Crypto wallet web page project"
      />

      <img
        src="../public/images/project-hero.png"
        alt="Hero blocks web page project"
      />

      <img
        src="../public/images/project-multi-col.png"
        alt="Multi-column web page project"
      />

      <img
        src="../public/images/store.png"
        alt="Amazon affiliate web page project"
      />
    </>
  );
};

export default Portfolio;
