import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { AppStateType } from "../../state/state.type";
import { getBookshelves } from "./state/action";

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
    <ul>
      {bookshelfIds.map((id) => (
        <li key={id}>
          <Link to={bookshelfSlugs[id]}>{bookshelfTitles[id]}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Bookshelves;
