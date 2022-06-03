import React from 'react'
import Flag from "react-world-flags";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom'
import './header.css';

function Header() {
  const [languages, showLanguages] = React.useState(false);
  const [currency, showCurrency] = React.useState(false);
  return (
    <div className="mainDiv border-bottom">
      <div className="lanuagesCurrency">
        <div className="language">
          <div className="selected-Language">
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://countryflagsapi.com/png/america"
                alt=""
                className="flag"
              />
              <p className="text mt-3">English</p>
              <KeyboardArrowDownIcon
                style={{ fontSize: 18, marginTop: 5 }}
                onClick={() => {
                  showLanguages(!languages);
                  showCurrency(false);
                }}
              />
            </div>
            <ul className={languages ? "showLanguages" : "languageList"}>
              <li>
                <img
                  src="https://countryflagsapi.com/png/america"
                  alt=""
                  className="flag"
                />
                English
              </li>
              <li>
                <img
                  src="https://countryflagsapi.com/png/sa"
                  alt=""
                  className="flag"
                />
                Arabic
              </li>
              <li>
                <img
                  src="https://countryflagsapi.com/png/pk"
                  alt=""
                  className="flag"
                />
                Urdu
              </li>
              <li>
                <img
                  src="https://countryflagsapi.com/png/724"
                  alt=""
                  className="flag"
                />
                Spanish
              </li>
            </ul>
          </div>
        </div>
        <div className="currency">
          <div className="selectedCurrency">
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p className="text mt-3">U.S Dollar $</p>
              <KeyboardArrowDownIcon
                style={{ fontSize: 18, marginTop: 5 }}
                onClick={() => {
                  showCurrency(!currency);
                  showLanguages(false);
                }}
              />
            </div>
          </div>
          <ul className={currency ? "showCurrency" : "currencyList"}>
            <li>Dollar ($)</li>
            <li>Euro (€)</li>
            <li>Australian Dollar ($)</li>
            <li>Riyal (SR)</li>
            <li>Rupee (RS)</li>
            <li>Kuwaiti Dinar (KD)</li>
            <li>Mexico Pesu ($)</li>
          </ul>
        </div>
      </div>
      <div className="loginSignup">
        <Link to="/login">
          <a
            href=""
            style={{ borderRight: "1px solid black", paddingRight: 10 }}
          >
            Login
          </a>
        </Link>
        <Link to="/signup">
          <a href="">Registration</a>
        </Link>
      </div>
    </div>
  );
}

export default Header