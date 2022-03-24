import {
  INC,
  DEC,
  LOGGED_IN_USER,
  LIKE,
  INDIVIDUAL_PAGE,
  SAVE_ITEMS,
  SEARCH_TAG,
  SAVE_ITEMS_TRENDING,
} from "./actionType";
export const incCount = (payload) => ({
  type: INC,
  payload,
});
export const decCount = (payload) => ({
  type: DEC,
  payload,
});

export const Like = (payload) => {
  return {
    type: LIKE,
    payload,
  };
};

export const IndividualPage = (payload) => {
  return {
    type: INDIVIDUAL_PAGE,
    payload,
  };
};

export const Saveitems = (payload) => {
  return {
    type: SAVE_ITEMS,
    payload,
  };
};
export const SaveItemsTrending = (payload) => {
  return {
    type: SAVE_ITEMS_TRENDING,
    payload,
  };
};

export const Searchtag = (payload) => {
  return {
    type: SEARCH_TAG,
    payload,
  };
};
