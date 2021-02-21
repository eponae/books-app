import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../state/state.type";
import { setBookshelf } from "../../bookshelf/state/action";
import Form from "./Form";
import styles from "./Forms.module.scss";
import Loader from "../../../components/loader/Loader";
import { findBookshelfIdFromSlug } from "../../bookshelf/state/selector";
import { Link, useParams } from "react-router-dom";
import { getFormsForBookshelfFromOffset } from "../state/action";
import { FORMS_COUNT_PER_PAGE } from "../state/reducer/formsLoading";
import { getOffsetFromPage, getPageFromUrl } from "../state/selector";

const Forms = () => {
  const dispatch = useDispatch();
  const { slug, pageNumber } = useParams<{
    slug?: string;
    pageNumber?: string;
  }>();

  const bookshelfId = useSelector(
    (state: AppStateType) => state.bookshelves.selectedBookshelf
  );
  const formIds = useSelector((state: AppStateType) => state.forms.formIds);
  const bookshelfSlugs = useSelector(
    (state: AppStateType) => state.bookshelves.bookshelfSlugs
  );
  const { hasMore, isLoading, page } = useSelector(
    (state: AppStateType) => state.forms.formsLoading
  );

  const loadPageForms = useCallback(
    (
      currentBookshelfId: typeof bookshelfId,
      currentPage: typeof page,
      currentOffset: typeof page
    ) => {
      if (currentBookshelfId) {
        dispatch(
          getFormsForBookshelfFromOffset(
            currentBookshelfId,
            currentPage,
            currentOffset,
            FORMS_COUNT_PER_PAGE
          )
        );
      }
    },
    [dispatch]
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
  }, [dispatch, slug, bookshelfSlugs, bookshelfId]);

  // Update if selected bookshlef or page changes
  useEffect(() => {
    const currentPage = getPageFromUrl(pageNumber);
    const currentOffset = getOffsetFromPage(currentPage, FORMS_COUNT_PER_PAGE);

    loadPageForms(bookshelfId, currentPage, currentOffset);
  }, [bookshelfId, loadPageForms, pageNumber]);

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
        {page > 1 && (
          <Link to={`/${slug}/${page - 1}`} className={styles.link}>
            Précédent
          </Link>
        )}
        {hasMore && (
          <Link to={`/${slug}/${page + 1}`} className={styles.link}>
            Suivant
          </Link>
        )}
      </div>
    </>
  );
};

export default Forms;
