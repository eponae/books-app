import { AuthorReducerType } from "../domain/author/state/authorState.type";
import { BookshelfReducerType } from "../domain/bookshelf/state/bookshelfState.type";
import { ErrorReducerType } from "../domain/error/state/errorState.type";
import { FormReducerType } from "../domain/form/state/formState.type";

export type AppStateType = {
  forms: FormReducerType;
  bookshelves: BookshelfReducerType;
  authors: AuthorReducerType;
  errors: ErrorReducerType;
};

export type AppStateTypeForTests = {
  forms: Partial<FormReducerType>;
  bookshelves: Partial<BookshelfReducerType>;
  authors: Partial<AuthorReducerType>;
  errors: Partial<ErrorReducerType>;
};
