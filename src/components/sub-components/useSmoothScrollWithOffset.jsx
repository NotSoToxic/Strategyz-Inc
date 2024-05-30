import { useEffect } from "react";

const useSmoothScrollWithOffset = (offset = 0) => {
  useEffect(() => {
    const handleScroll = (event) => {
      const target = event.target.getAttribute("href");
      if (target && target.startsWith("#")) {
        event.preventDefault();
        const element = document.querySelector(target);
        if (element) {
          const yOffset = offset;
          const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };

    const links = document.querySelectorAll(".page-scroll");
    links.forEach((link) => link.addEventListener("click", handleScroll));

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleScroll));
    };
  }, [offset]);
};

export default useSmoothScrollWithOffset;
