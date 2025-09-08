export const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const navHeight = 90;
  const targetId = e.currentTarget.getAttribute("href")?.slice(1);
  if (targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
};
