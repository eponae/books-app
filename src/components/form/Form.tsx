import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../state/state.type";
import { FormType } from "./form.type";
import { getForm } from "./state/action";
import { getFormVisibleInformation } from "./state/selector";
import styles from "./Form.module.scss";

type Props = {
  id: FormType["id"];
};

const Form: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForm(id));
  }, [id, dispatch]);

  const formInformation = useSelector((state: AppStateType) =>
    getFormVisibleInformation(id, state.forms, state.authors)
  );

  if (!formInformation) {
    return null;
  }

  return (
    <li>
      <img
        src={formInformation.image}
        alt="Couverture"
        className={styles.img}
      />
      {formInformation.short_title}
    </li>
  );
};

export default Form;
