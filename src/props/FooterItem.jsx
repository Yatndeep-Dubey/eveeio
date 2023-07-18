import { Link, useNavigate } from "react-router-dom";

const FooterItem = ({ title, links }) => {
  const navigate = useNavigate();

  const openFaq = () => {
    navigate("/");
    setTimeout(() => {
      const faqSection = document.getElementById("faq");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="space-y-[1.875rem] p-7 lg:border-r lg:py-16 lg:px-5 xl:px-16 2xl:px-24">
      <p className="text-xl text-white font-bold">{title}</p>
      <ul className="space-y-5">
        {links.map((link) => {
          if (link.url === "#faq") {
            return (
              <li
                className="text-[#969696] md:text-sm max-w-[13.688rem]"
                key={link}
              >
                <Link to="/" onClick={openFaq}>
                  {link.text}
                </Link>
              </li>
            );
          } else if (link.url === "#privacy") {
            return (
              <li
                className="text-[#969696] md:text-sm max-w-[13.688rem]"
                key={link}
              >
                <Link to="/">{link.text}</Link>
              </li>
            );
          } else if (link.url === "#disclaimer") {
            return (
              <li
                className="text-[#969696] md:text-sm max-w-[13.688rem]"
                key={link}
              >
                <Link to="/">{link.text}</Link>
              </li>
            );
          } else if (link.url === "#tnc") {
            return (
              <li
                className="text-[#969696] md:text-sm max-w-[13.688rem]"
                key={link}
              >
                <Link to="/">{link.text}</Link>
              </li>
            );
          } else {
            return (
              <li
                className="text-[#969696] md:text-sm max-w-[13.688rem]"
                key={link}
              >
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default FooterItem;
