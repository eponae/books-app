import React, { FC } from "react";
import { LinkProps, Link } from "react-router-dom";
import styles from "./NavLinkLabel.module.scss";

type Props = LinkProps & {
  selected: boolean;
};

const NavLinkLabel: FC<Props> = ({ children, selected, ...props }) => {
  return (
    <Link
      className={`${styles.container} ${selected && styles.active}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLinkLabel;
