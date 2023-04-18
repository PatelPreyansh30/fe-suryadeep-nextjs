import Link from "next/link";
import React, { useState } from "react";

const HeaderMenu = (props: { heading: string; options: string[] }) => {
  const [isOptionShow, setIsOptionShow] = useState(false);

  const toggleIsOptionShow = () => {
    setIsOptionShow(!isOptionShow);
  };

  return (
    <div className="header-main-menu">
      <button onClick={toggleIsOptionShow}>{props.heading}</button>

      {isOptionShow && (
        <div onMouseLeave={toggleIsOptionShow}>
          {props.options.map((item, index) => (
            <Link
              href={"/dashboard/society-master"}
              onClick={toggleIsOptionShow}
              className="header-main-menu-option"
              key={`header-menu-option:${index}`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <div className="">
      <HeaderMenu
        heading="Master"
        options={["Society Master", "User Master", "Member Master"]}
      />
      <HeaderMenu
        heading="Transaction"
        options={["Account Transaction", "Purchase Transaction", "Sales Transaction", "Member Receipt Transaction", "Billing Transaction"]}
      />
      <HeaderMenu
        heading="Reports"
        options={["Account Reports", "Purchase Reports", "Sales Reports", "Member Reports", "Billing Reports"]}
      />
      <HeaderMenu
        heading="Utilities"
        options={["Begin New Year", "New Month Process"]}
      />
    </div>
  );
};

export default Header;
