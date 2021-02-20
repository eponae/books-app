import { combineReducers } from "redux";
import { formIds } from "./formIds";
import { formImages } from "./formImages";
import { formSlugs } from "./formSlugs";
import { formAuthors } from "./formAuthors";
import { formPrices } from "./formPrices";
import { formTitles } from "./formTitles";

export const formReducer = {
  forms: combineReducers({
    formIds,
    formImages,
    formSlugs,
    formAuthors,
    formPrices,
    formTitles,
  }),
};
