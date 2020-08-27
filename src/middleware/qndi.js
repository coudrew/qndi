import { CAT_BREED_FOREST, SET_CAT_BREED } from "../actions";

export const qndi = (handlers) => {
  const logic = handlers.reduce((cur, acc) => {
    acc = {
      ...acc,
      cur,
    };
    return acc;
  }, {});

  return (store) => (next) => async (action) => {
    const { type } = action;

    if (logic[type]) {
      console.log(action);
      return await logic[type](store, action).then(() => {
        setTimeout(
          () => next({ type: SET_CAT_BREED, breed: "Or whatever" }),
          2000
        );
      });
    }
    return next(action);
  };
};

export const catBreedForest = async ({ dispatch }) =>
  new Promise((resolve) => {
    console.log("logic started");
    setTimeout(() => {
      resolve(
        dispatch({
          type: SET_CAT_BREED,
          breed: "Forest",
        })
      );
    }, 2000);
  });

export const handlers = [{ [CAT_BREED_FOREST]: catBreedForest }];
