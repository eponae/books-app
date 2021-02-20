import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppStateType } from "../../state/state.type";
import { getBookshelves } from "./state/action";
import styles from "./Bookshelves.module.scss";
import NavLinkLabel from "../nav-link/NavLinkLabel";

const Bookshelves = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getBookshelves());
  }, [dispatch]);

  const {
    bookshelfIds,
    bookshelfTitles,
    bookshelfSlugs,
    selectedBookshelf,
  } = useSelector((state: AppStateType) => state.bookshelves);

  useEffect(() => {
    if (!selectedBookshelf && bookshelfSlugs.length) {
      history.push(bookshelfSlugs[0]);
    }
  }, [bookshelfSlugs, history, selectedBookshelf]);

  return (
    <ul className={styles.list}>
      {bookshelfIds.map((id) => (
        <li key={id}>
          <NavLinkLabel to={bookshelfSlugs[id]}>
            {bookshelfTitles[id]}
          </NavLinkLabel>
        </li>
      ))}
    </ul>
  );
};

export default Bookshelves;
