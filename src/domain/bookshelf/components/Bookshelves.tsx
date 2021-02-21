import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppStateType } from "../../../state/state.type";
import { getBookshelves } from "../state/action";
import styles from "./Bookshelves.module.scss";
import NavLinkLabel from "../../../components/nav-link-label/NavLinkLabel";

const Bookshelves = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    bookshelfIds,
    bookshelfTitles,
    bookshelfSlugs,
    selectedBookshelf,
  } = useSelector((state: AppStateType) => state.bookshelves);

  // Load bookshelves
  useEffect(() => {
    dispatch(getBookshelves());
  }, [dispatch]);

  // Handle first page loading
  useEffect(() => {
    const isfirstPageLoading = window.location.pathname === "/";
    if (isfirstPageLoading && bookshelfIds.length) {
      const bookshelfId = bookshelfIds[0];
      const bookshlefSlug = bookshelfSlugs[bookshelfId];
      history.push(`/${bookshlefSlug}`);
    }
  }, [bookshelfSlugs, bookshelfIds, history, selectedBookshelf, dispatch]);

  if (!bookshelfIds || !bookshelfIds.length) {
    return null;
  }

  return (
    <ul className={styles.list}>
      {bookshelfIds.map((id) => (
        <li key={id}>
          <NavLinkLabel to={`/${bookshelfSlugs[id]}`}>
            {bookshelfTitles[id]}
          </NavLinkLabel>
        </li>
      ))}
    </ul>
  );
};

export default Bookshelves;
