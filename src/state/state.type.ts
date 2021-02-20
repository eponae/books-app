import { BookshelfReducerType } from "../components/bookshelf/state/bookshelfState.type";
import { FormReducerType } from "../components/form/state/formState.type";

export type AppStateType = {
  forms: FormReducerType;
  bookshelves: BookshelfReducerType;
};
