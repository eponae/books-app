import React, { useCallback, useEffect, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppStateType } from "../../../state/state.type";
import { getBookshelves, setBookshelf } from "../state/action";
import styles from "./Bookshelves.module.scss";
import NavLinkLabel from "../../../components/nav-link-label/NavLinkLabel";
import { BookShelfType } from "../bookshelf.type";

const Bookshelves = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    bookshelfIds,
    bookshelfTitles,
    bookshelfSlugs,
    selectedBookshelf,
  } = useSelector((state: AppStateType) => state.bookshelves);

  const selectBookshelf = useCallback(
    (bookshelfId: BookShelfType["id"]) => (
      event: MouseEvent<HTMLAnchorElement>
    ) => {
      dispatch(setBookshelf(bookshelfId));
    },
    [dispatch]
  );

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
      dispatch(setBookshelf(bookshelfId));
      history.push(`/${bookshlefSlug}/1`);
    }
  }, [bookshelfSlugs, bookshelfIds, history, selectedBookshelf, dispatch]);

  if (!bookshelfIds || !bookshelfIds.length) {
    return null;
  }

  return (
    <ul className={styles.list}>
      <li className={styles.title}>Étagères</li>
      {bookshelfIds.map((id) => (
        <li key={id}>
          <NavLinkLabel
            to={`/${bookshelfSlugs[id]}/1`}
            selected={selectedBookshelf === id}
            onClick={selectBookshelf(id)}
          >
            {bookshelfTitles[id]}
          </NavLinkLabel>
        </li>
      ))}
    </ul>
  );
};

export default Bookshelves;
