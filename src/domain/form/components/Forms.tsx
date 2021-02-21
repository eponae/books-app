import { useCallback, useEffect, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../state/state.type";
import { setBookshelf } from "../../bookshelf/state/action";
import Form from "./Form";
import styles from "./Forms.module.scss";
import Loader from "../../../components/loader/Loader";
import { findBookshelfIdFromSlug } from "../../bookshelf/state/selector";
import { useParams } from "react-router-dom";
import { getFormsForBookshelfFromOffset } from "../state/action";
import { FORMS_COUNT_PER_PAGE } from "../state/reducer/formsLoading";

const Forms = () => {
  const dispatch = useDispatch();
  const { slug } = useParams<{ slug?: string }>();

  const bookshelfId = useSelector(
    (state: AppStateType) => state.bookshelves.selectedBookshelf
  );
  const formIds = useSelector((state: AppStateType) => state.forms.formIds);
  const bookshelfSlugs = useSelector(
    (state: AppStateType) => state.bookshelves.bookshelfSlugs
  );
  const { hasMore, offset, isLoading } = useSelector(
    (state: AppStateType) => state.forms.formsLoading
  );

  const loadPageForms = useCallback(
    ({
      goNext,
      currentBookshelfId,
      currentOffset,
    }: {
      goNext: boolean;
      currentBookshelfId: typeof bookshelfId;
      currentOffset: typeof offset;
    }) => {
      if (currentBookshelfId) {
        dispatch(
          getFormsForBookshelfFromOffset(
            currentBookshelfId,
            currentOffset,
            FORMS_COUNT_PER_PAGE,
            goNext
          )
        );
      }
    },
    [dispatch]
  );

  const onNavButtonClicked = useCallback(
    (
      goNext: boolean,
      currentBookshelfId: typeof bookshelfId,
      currentOffset: typeof offset
    ) => (event: MouseEvent<HTMLButtonElement>) => {
      loadPageForms({ goNext, currentBookshelfId, currentOffset });
    },
    [loadPageForms]
  );

  useEffect(() => {
    // handle page reloading

    if (slug && !bookshelfId) {
      const bookshelfIdFromSlug = findBookshelfIdFromSlug(slug, bookshelfSlugs);
      if (bookshelfIdFromSlug) {
        dispatch(setBookshelf(bookshelfIdFromSlug));
      }
    }
  }, [dispatch, slug, bookshelfSlugs, bookshelfId, loadPageForms]);

  useEffect(() => {
    loadPageForms({
      goNext: true,
      currentBookshelfId: bookshelfId,
      currentOffset: 0,
    });
  }, [bookshelfId, loadPageForms]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ul className={styles.list}>
        {formIds.map((formId) => (
          <Form id={formId} key={formId} />
        ))}
      </ul>
      <div className={styles.actions}>
        {offset > 10 && (
          <button
            type="button"
            onClick={onNavButtonClicked(false, bookshelfId, offset)}
            className={styles.button}
          >
            Précédent
          </button>
        )}
        {hasMore && (
          <button
            type="button"
            onClick={onNavButtonClicked(true, bookshelfId, offset)}
            className={styles.button}
          >
            Suivant
          </button>
        )}
      </div>
    </>
  );
};

export default Forms;
