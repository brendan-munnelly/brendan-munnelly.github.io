import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

const FooterApp = () => {
  return (
    <Footer>
      <div>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand>
              <Link to="/">
                <img
                  src="../public/images/website-logo-sample.png"
                  className="mr-3 h-6 sm:h-9"
                  alt="Sample website logo"
                />
              </Link>
            </Footer.Brand>
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        </div>
      </div>
    </Footer>
  );
};

export default FooterApp;
