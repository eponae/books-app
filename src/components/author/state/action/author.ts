import { AuthorType } from "../../author.type";
import { SET_AUTHORS, RESET_AUTHORS } from "../action-type";

export const setAuthors = (authors: Array<AuthorType>) =>
  <const>{ type: SET_AUTHORS, payload: authors };

export const resetAuthors = () => <const>{ type: RESET_AUTHORS };
