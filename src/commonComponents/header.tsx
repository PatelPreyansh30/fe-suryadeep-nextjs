import { ApplicationConstant } from "@/applicationConstant/constant";
import Link from "next/link";
import React, { useState } from "react";

const HeaderMenu = (props: {
  heading: string;
  options: { label: string; link: string }[];
}) => {
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
              href={item.link}
              onClick={toggleIsOptionShow}
              className="header-main-menu-option"
              key={`header-menu-option:${index}`}
            >
              {item.label}
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
        options={[
          {
            label: "Society Master",
            link: ApplicationConstant.SOCIETY_MASTER_PATH,
          },
          {
            label: "User Master",
            link: "",
          },
          {
            label: "Member Master",
            link: ApplicationConstant.MEMBER_MASTER_PATH,
          },
        ]}
      />
      <HeaderMenu
        heading="Transaction"
        options={[
          {
            label: "Account Transaction",
            link: "",
          },
          {
            label: "Purchase Transaction",
            link: "",
          },
          {
            label: "Sales Transaction",
            link: "",
          },
          {
            label: "Member Receipt Transaction",
            link: "",
          },
          {
            label: "Billing Transaction",
            link: "",
          },
        ]}
      />
      <HeaderMenu
        heading="Reports"
        options={[
          {
            label: "Account Reports",
            link: "",
          },
          {
            label: "Purchase Reports",
            link: "",
          },
          {
            label: "Sales Reports",
            link: "",
          },
          {
            label: "Member Reports",
            link: "",
          },
          {
            label: "Billing Reports",
            link: "",
          },
        ]}
      />
      <HeaderMenu
        heading="Utilities"
        options={[
          {
            label: "Begin New Year",
            link: "",
          },
          {
            label: "New Month Process",
            link: "",
          },
        ]}
      />
    </div>
  );
};

export default Header;
