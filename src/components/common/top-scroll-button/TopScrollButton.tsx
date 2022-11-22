import { useState } from "react";
import ArrowIcon from "../../../assets/space-arrow.png";

const TopScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setVisible(true);
    } else if (scrolled <= 400) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className={
        visible
          ? "fixed z-50 bottom-0 right-0 m-2 w-[50px] animate-bounce"
          : "invisible"
      }
      onClick={scrollToTop}
    >
      <img src={ArrowIcon} alt="arrow-icon" className="w-full h-full" />
    </button>
  );
};

export default TopScrollButton;
