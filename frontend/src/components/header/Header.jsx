import styles from "./Header.module.css";

const Header = () => {
  const s = ["s", "s"];

  return (
    <header className={styles.heading}>
      {"VIDEO-PLAYER".split("").map((letter, index) => (
        <span style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
          {letter}
        </span>
      ))}
      {/* <span>V</span>
      <span>I</span>
      <span>D</span>
      <span>E</span>
      <span>O</span>
      <span>-</span>
      <span>P</span>
      <span>L</span>
      <span>A</span>
      <span>Y</span>
      <span>E</span>
      <span>R</span> */}
    </header>
  );
};
export default Header;
