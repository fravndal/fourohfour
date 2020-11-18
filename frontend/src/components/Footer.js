import React from "react";
import "./../css/footer.css"

const Header = () => {
  return (
    <React.Fragment>

      <footer id="footer-container" className="py-3 bg-dark text-white-50">
        <div className="container text-center">
          <small className="text-muted credit">Copyright &copy; Counter-Strike Global Offensive</small>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Header;