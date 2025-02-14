import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import styles from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateItems, setAnimateItems] = useState(false);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
    if (state.isOpen) {
      setTimeout(() => setAnimateItems(true), 100); // Задержка для появления элементов
    } else {
      setAnimateItems(false); // Убираем анимацию при закрытии
    }
  };

  const closeMenu = () => {
    setAnimateItems(false);
    setTimeout(() => setIsOpen(false), 800); // Закрываем после анимации
  };

  return (
    <>
      {/* Бургер-иконка */}
      <div
        className={`${styles["bm-icon"]} ${isOpen ? styles.open : ""}`}
        onClick={() => handleStateChange({ isOpen: !isOpen })}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Затемняющий фон */}
      {isOpen && (
        <div
          className={`${styles["bm-overlay"]} ${isOpen ? styles.open : ""}`}
          onClick={closeMenu}
        />
      )}

      {/* Меню */}
      <Menu
        right
        isOpen={isOpen}
        onStateChange={handleStateChange}
        customCrossIcon={false}
        customBurgerIcon={false}
        className={`${styles["bm-menu-wrap"]} ${isOpen ? styles.open : ""}`}
        menuClassName={styles["bm-menu"]}

      >
        <div
          className={`${styles["bm-item-list"]} ${animateItems ? styles.animate : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
               <a href="#home" className={styles["bm-item"]} onClick={closeMenu}>
          Home
        </a>
        <a href="#skills" className={styles["bm-item"]} onClick={closeMenu}>
        Skills
        </a>
        <a href="#about" className={styles["bm-item"]} onClick={closeMenu}>
          Über
        </a>
        <a href="#projects" className={styles["bm-item"]} onClick={closeMenu}>
        Projects
        </a>
        <a href="#contacts" className={styles["bm-item"]} onClick={closeMenu}>
        Contacts
        </a>
        </div>
      </Menu>
    </>
  );
};

export default BurgerMenu;
