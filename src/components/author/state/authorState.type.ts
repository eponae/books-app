import { AuthorType } from "../author.type";
import { resetAuthors, setAuthors } from "./action";

export type AuthorReducerType = {
  authorIds: Array<AuthorType["id"]>;
  authorSlugs: { [authorId: string]: AuthorType["slug"] };
  authorNames: { [authorId: string]: AuthorType["name"] };
};

export type AuthorActionType = ReturnType<
  typeof setAuthors | typeof resetAuthors
>;
