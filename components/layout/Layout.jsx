import Header from "./header/Header";
import Footer from "./Footer";
import * as styles from "../../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div>
        <Header></Header>
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
