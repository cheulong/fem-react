import React from "react";

const SearchContext = React.createContext({
  location: "Seattle, WA",
  animal: "",
  breed: "",
  breeds: [],
  handleLocationChange() {},
  handleBreedChange() {},
  handleAnimalChange() {},
  getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
