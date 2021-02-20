import React, { FC } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import styles from "./NavLinkLabel.module.scss";

type Props = NavLinkProps;

const NavLinkLabel: FC<Props> = ({ children, ...props }) => {
  return (
    <NavLink
      className={styles.container}
      {...props}
      activeClassName={styles.active}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkLabel;
