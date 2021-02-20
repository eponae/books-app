import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppStateType } from "../../state/state.type";
import { setSelectedBookshelf } from "../bookshelf/state/action";
import { findBookshelfIdFromSlug } from "../bookshelf/state/selector";
import Form from "./Form";
import { getFormsForCurrentBookshelf } from "./state/action";
import styles from "./Forms.module.scss";

const Forms = () => {
  const { slug }: { slug?: string } = useParams();
  const dispatch = useDispatch();

  const bookshelfSlugs = useSelector(
    (state: AppStateType) => state.bookshelves.bookshelfSlugs
  );
  const formIds = useSelector((state: AppStateType) => state.forms.formIds);

  useEffect(() => {
    if (slug) {
      const bookshelfId = findBookshelfIdFromSlug(slug, bookshelfSlugs);
      if (bookshelfId) {
        dispatch(setSelectedBookshelf(bookshelfId));
        dispatch(getFormsForCurrentBookshelf(bookshelfId));
      }
    }
  }, [slug, dispatch, bookshelfSlugs]);

  return (
    <ul className={styles.list}>
      {formIds.map((formId) => (
        <Form id={formId} key={formId} />
      ))}
    </ul>
  );
};

export default Forms;
