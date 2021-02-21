import React, { MouseEvent, useCallback, useEffect } from "react";
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
    // handle first page loading

    if (!selectedBookshelf && bookshelfIds.length) {
      const bookshelfId = bookshelfIds[0];
      const bookshlefSlug = bookshelfSlugs[bookshelfId];
      dispatch(setBookshelf(bookshelfId));
      history.push(bookshlefSlug);
    }
  }, [bookshelfSlugs, bookshelfIds, history, selectedBookshelf, dispatch]);

  const selectBookshelf = useCallback(
    (bookshelfId: BookShelfType["id"]) => (
      event: MouseEvent<HTMLAnchorElement>
    ) => {
      dispatch(setBookshelf(bookshelfId));
    },
    [dispatch]
  );

  if (!bookshelfIds || !bookshelfIds.length) {
    return null;
  }

  return (
    <ul className={styles.list}>
      {bookshelfIds.map((id) => (
        <li key={id}>
          <NavLinkLabel to={bookshelfSlugs[id]} onClick={selectBookshelf(id)}>
            {bookshelfTitles[id]}
          </NavLinkLabel>
        </li>
      ))}
    </ul>
  );
};

export default Bookshelves;
