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
      currentBookshelfId,
      currentOffset,
    }: {
      currentBookshelfId: typeof bookshelfId;
      currentOffset: typeof offset;
    }) => {
      if (currentBookshelfId) {
        dispatch(
          getFormsForBookshelfFromOffset(
            currentBookshelfId,
            currentOffset,
            FORMS_COUNT_PER_PAGE
          )
        );
      }
    },
    [dispatch]
  );

  const onNavButtonClicked = useCallback(
    (currentBookshelfId: typeof bookshelfId, currentOffset: typeof offset) => (
      event: MouseEvent<HTMLButtonElement>
    ) => {
      loadPageForms({ currentBookshelfId, currentOffset });
    },
    [loadPageForms]
  );

  // Handle page reloading
  useEffect(() => {
    const isPageReloading = slug && !bookshelfId;
    if (isPageReloading) {
      const bookshelfIdFromSlug = findBookshelfIdFromSlug(bookshelfSlugs, slug);
      if (bookshelfIdFromSlug) {
        dispatch(setBookshelf(bookshelfIdFromSlug));
      }
    }
  }, [dispatch, slug, bookshelfSlugs, bookshelfId, loadPageForms]);

  // Update if selected bookshlef changes
  useEffect(() => {
    loadPageForms({
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
        {offset > FORMS_COUNT_PER_PAGE && (
          <button
            type="button"
            onClick={onNavButtonClicked(
              bookshelfId,
              offset - FORMS_COUNT_PER_PAGE
            )}
            className={styles.button}
          >
            Précédent
          </button>
        )}
        {hasMore && (
          <button
            type="button"
            onClick={onNavButtonClicked(
              bookshelfId,
              offset + FORMS_COUNT_PER_PAGE
            )}
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
