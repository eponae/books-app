import React, { FC, Fragment } from "react";
import { AuthorType } from "../../../author/author.type";
import styles from "./FormAuthors.module.scss";

type Props = {
  authors: Array<AuthorType>;
  formId: string;
};

const FormAuthors: FC<Props> = ({ authors, formId }) => {
  return (
    <div className={styles.author}>
      par{" "}
      {authors.map((author, index) => (
        <Fragment key={`${formId}-${author.id}`}>
          <a
            key={author.id}
            href={`https://glose.com/author/${author.slug}`}
            className={styles.authorLink}
          >
            {author.name}
          </a>
          {authors.length > 2 && index < authors.length - 2 && ", "}
          {authors.length > 1 && index === authors.length - 2 && " et "}
        </Fragment>
      ))}
    </div>
  );
};

export default FormAuthors;
