import { combineReducers } from "redux";
import formIds, { defaultState as formIdsDefaultState } from "./formIds";
import formImages, {
  defaultState as formImagesDefaultState,
} from "./formImages";
import formAuthors, {
  defaultState as formAuhtorsDefaultState,
} from "./formAuthors";
import formPrices, {
  defaultState as formPricesDefaultState,
} from "./formPrices";
import formTitles, {
  defaultState as formTitlesDefaultState,
} from "./formTitles";
import formsLoading, {
  defaultState as formLoadingDefaultState,
} from "./formsLoading";

export const formInitialState = {
  forms: {
    formIds: formIdsDefaultState,
    formImages: formImagesDefaultState,
    formAuthors: formAuhtorsDefaultState,
    formPrices: formPricesDefaultState,
    formTitles: formTitlesDefaultState,
    formsLoading: formLoadingDefaultState,
  },
};

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
