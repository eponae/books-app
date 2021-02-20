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

  const { bookshelfSlugs, bookshelfTitles, selectedBookshelf } = useSelector(
    (state: AppStateType) => state.bookshelves
  );

  useEffect(() => {
    if (selectedBookshelf) {
      history.push(selectedBookshelf);
    }
  }, [selectedBookshelf, history]);

  return (
    <ul>
      {bookshelfSlugs.map((slug) => (
        <li key={slug}>
          <Link to={slug}>{bookshelfTitles[slug]}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Bookshelves;
