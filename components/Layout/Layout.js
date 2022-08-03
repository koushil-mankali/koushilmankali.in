import Header from "../Header/Header";
import Footer from "../Footer/Footer";

let Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
