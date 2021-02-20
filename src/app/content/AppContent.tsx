import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Bookshelves from "../../components/bookshelf/Bookshelves";
import { getBookshelves } from "../../components/bookshelf/state/action";
import Forms from "../../components/form/Forms";

const AppContent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookshelves());
  }, [dispatch]);

  const state = useSelector((state) => state);

  return (
    <section>
      <Bookshelves />
      <Forms />
    </section>
  );
};

export default AppContent;
