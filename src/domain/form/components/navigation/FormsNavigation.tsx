import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppStateType } from "../../../../state/state.type";
import { FORMS_COUNT_PER_PAGE } from "../../state/reducer/formsLoading";
import { getLastPageNumber } from "../../state/selector";
import styles from "./FormsNavigation.module.scss";

type Props = {
  page: number;
  slug: string;
  bookshelfId: string;
};

const FormsNavigation: FC<Props> = ({ page, slug, bookshelfId }) => {
  const bookshelfFormCount = useSelector(
    (state: AppStateType) => state.bookshelves.bookshelfFormCount
  );
  const bookshelfTitles = useSelector(
    (state: AppStateType) => state.bookshelves.bookshelfTitles
  );

  const numberOfPages =
    bookshelfId && bookshelfFormCount[bookshelfId]
      ? getLastPageNumber(bookshelfFormCount[bookshelfId], FORMS_COUNT_PER_PAGE)
      : 1;
  return (
    <div className={styles.actions}>
      <span className={styles.title}>{bookshelfTitles[bookshelfId]}</span>
      <div>
        {page > 1 && (
          <Link to={`/${slug}/${page - 1}`} className={styles.link}>
            Précédent
          </Link>
        )}
        {page < numberOfPages && (
          <Link to={`/${slug}/${page + 1}`} className={styles.link}>
            Suivant
          </Link>
        )}
      </div>
    </div>
  );
};

export default FormsNavigation;
