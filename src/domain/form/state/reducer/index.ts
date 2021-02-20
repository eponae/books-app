import { combineReducers } from "redux";
import formIds from "./formIds";
import formImages from "./formImages";
import formAuthors from "./formAuthors";
import formPrices from "./formPrices";
import formTitles from "./formTitles";
import formsLoading from "./formsLoading";

export const formReducer = {
  forms: combineReducers({
    formIds,
    formImages,
    formAuthors,
    formPrices,
    formTitles,
    formsLoading,
  }),
};
