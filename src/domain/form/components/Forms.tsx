import { useCallback, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../state/state.type";
import { setBookshelfId } from "../../bookshelf/state/action";
import Form from "./Form";
import { getFormsForCurrentBookshelf } from "../state/action";
import styles from "./Forms.module.scss";
import Loader from "../../../components/loader/Loader";
import { findBookshelfIdFromSlug } from "../../bookshelf/state/selector";
import { useParams } from "react-router-dom";

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
  const hasMore = useSelector(
    (state: AppStateType) => state.forms.formsLoading.hasMore
  );
  const offset = useSelector(
    (state: AppStateType) => state.forms.formsLoading.offset
  );

  useEffect(() => {
    if (slug) {
      const bookshelfIdFromSlug = findBookshelfIdFromSlug(slug, bookshelfSlugs);
      if (bookshelfIdFromSlug) {
        dispatch(setBookshelfId(bookshelfIdFromSlug));
      }
    }
  }, [dispatch, slug, bookshelfSlugs]);

  const loadMoreForms = useCallback(() => {
    if (bookshelfId) {
      dispatch(getFormsForCurrentBookshelf(bookshelfId, offset));
    }
  }, [dispatch, offset, bookshelfId]);

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMoreForms}
      hasMore={hasMore}
      loader={<Loader key="forms-loader" />}
    >
      <ul className={styles.list}>
        {formIds.map((formId) => (
          <Form id={formId} key={formId} />
        ))}
      </ul>
    </InfiniteScroll>
  );
};

export default Forms;
