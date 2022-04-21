import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;

// In src folder we make a Layout.js
