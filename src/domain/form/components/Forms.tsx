import { useCallback, useEffect } from "react";
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
import { getOffsetFromPage, getPageNumberFromUrl } from "../state/selector";
import FormsNavigation from "./navigation/FormsNavigation";
import { logAndSaveError } from "../../error/state/action";

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
  const { isLoading, page } = useSelector(
    (state: AppStateType) => state.forms.formsLoading
  );

  const loadPageForms = useCallback(
    async (
      currentBookshelfId: typeof bookshelfId,
      currentPage: typeof page,
      currentOffset: typeof page
    ) => {
      try {
        if (currentBookshelfId) {
          await dispatch(
            getFormsForBookshelfFromOffset(
              currentBookshelfId,
              currentPage,
              currentOffset,
              FORMS_COUNT_PER_PAGE
            )
          );
        }
      } catch (error) {
        dispatch(logAndSaveError(error));
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

  // Update if the selected bookshelf or the page number changes
  useEffect(() => {
    const currentPage = getPageNumberFromUrl(pageNumber);
    const currentOffset = getOffsetFromPage(currentPage, FORMS_COUNT_PER_PAGE);

    loadPageForms(bookshelfId, currentPage, currentOffset);
  }, [bookshelfId, loadPageForms, pageNumber]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {slug && bookshelfId && (
        <FormsNavigation page={page} slug={slug} bookshelfId={bookshelfId} />
      )}
      <ul className={styles.list}>
        {formIds.map((formId) => (
          <Form id={formId} key={formId} />
        ))}
      </ul>
      {slug && bookshelfId && (
        <FormsNavigation page={page} slug={slug} bookshelfId={bookshelfId} />
      )}
    </>
  );
};

export default Forms;
