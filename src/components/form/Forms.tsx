import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppStateType } from "../../state/state.type";
import { setSelectedBookshelf } from "../bookshelf/state/action";
import { findBookshelfIdFromSlug } from "../bookshelf/state/selector";

const Forms = () => {
  const { slug }: { slug?: string } = useParams();

  const dispatch = useDispatch();
  const bookshelfSlugs = useSelector(
    (state: AppStateType) => state.bookshelves.bookshelfSlugs
  );

  useEffect(() => {
    if (slug) {
      const bookshelfId = findBookshelfIdFromSlug(slug, bookshelfSlugs);
      if (bookshelfId) {
        dispatch(setSelectedBookshelf(bookshelfId));
        dispatch(getForms(bookshelfId));
      }
    }
  }, [slug, dispatch, bookshelfSlugs]);

  return <div>{slug}</div>;
};

export default Forms;
