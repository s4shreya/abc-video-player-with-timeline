import { FaCopyright } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <FaCopyright />
        Copyright@2023
      </p>
    </footer>
  );
};
export default Footer;
