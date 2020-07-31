import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="panel panel-default panel-khaos-footer">
          <div className="panel-body">
            <div className="footer-container">
              Copyright &copy; 2020{" "}
              <a href="http://www.uma.es/" target="_blank">
                University of M&aacute;laga
              </a>
              . All rights reserved. Powered by{" "}
              <a href="http://khaos.uma.es" target="_blank">
                Khaos Research
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
