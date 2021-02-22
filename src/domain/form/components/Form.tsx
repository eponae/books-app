import { FC, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../state/state.type";
import { logAndSaveError } from "../../error/state/action";
import { FormType } from "../form.type";
import { getForm } from "../state/action";
import { formatFormPrice, getFormVisibleInformation } from "../state/selector";
import styles from "./Form.module.scss";

type Props = {
  id: FormType["id"];
};

const Form: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchForm(formId: Props["id"]) {
      try {
        await dispatch(getForm(formId));
      } catch (error) {
        dispatch(logAndSaveError(error));
      }
    }
    fetchForm(id);
  }, [id, dispatch]);

  const formInformation = useSelector((state: AppStateType) =>
    getFormVisibleInformation(id, state.forms, state.authors)
  );

  if (!formInformation) {
    return null;
  }

  const { image, price, authors, short_title } = formInformation;

  return (
    <li className={styles.item}>
      <img src={image} alt="Couverture" className={styles.img} />
      {price ? (
        <div className={styles.price}>{formatFormPrice(price)}</div>
      ) : (
        <div className={styles.free}>Gratuit</div>
      )}
      <div className={styles.title}>{short_title}</div>
      {authors && authors.length > 0 && (
        <div className={styles.author}>
          par{" "}
          {authors.map((author, index) => (
            <Fragment key={`${id}-${author.id}`}>
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
      )}
    </li>
  );
};

export default Form;
