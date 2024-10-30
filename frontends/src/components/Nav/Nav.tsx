import BaseButton from "../BaseButton/BaseButton";
import "./Nav.css";
import bulletArrowDown from "/arrowdown.svg";

type MenuItemType = {
  label: string;
  hasArrowDown: boolean;
  url: string;
};

function Nav() {
  const menuItems: MenuItemType[] = [
    { label: "Features", hasArrowDown: false, url: "#features" },
    { label: "Compare", hasArrowDown: true, url: "#compare" },
    { label: "Support", hasArrowDown: false, url: "#support" },
    { label: "Blog", hasArrowDown: true, url: "#blog" },
    { label: "Contact", hasArrowDown: true, url: "#contact-form" },
  ];

  return (
    <div className="Nav">
      <nav className="nav">
        <div className="header">
          <div className="nav-left">banquee.</div>

          <ul className="nav-center">
            {menuItems.map((item) => {
              return (
                <li key={item.label} className="nav-itens">
                  <a href={item.url}>
                    {item.label}

                    {item.hasArrowDown ? (
                      <span>
                        <img src={bulletArrowDown} />
                      </span>
                    ) : (
                      ""
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="nav-right">
            <BaseButton appearence="white" label="Login" />
            <BaseButton appearence="green" label="Open Account" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
