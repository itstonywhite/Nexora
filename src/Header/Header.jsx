import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <div className="header-menus">
              <div className="logo">
                <img src="../../public/images/favicon.png" alt="Nexora" />
                NEXORA
              </div>
              <div className="menus">
                <ul>
                  <li>
                    <a href="#">Solutions</a>
                  </li>
                  <li>
                    <a href="#">Platform</a>
                  </li>
                  <li>
                    <a href="#">AI</a>
                  </li>
                  <li>
                    <a href="#">Resources</a>
                  </li>
                  <li>
                    <a href="#">Company</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-contact-us-lang">
              <div className="language-selection">
                <form action="POST">
                  <select name="languages" id="languages">
                    <option value="en">EN</option>
                    <option value="persian">Persian</option>
                    <option value="germany">Germany</option>
                  </select>
                </form>
              </div>
              <div className="contact-us-btn"></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
