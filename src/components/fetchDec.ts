import { fetchData } from "./http";

export const Fetcher = () => {
  return function(target: any) {
    Object.defineProperty(target.prototype, "course", {
      value: () => 11
    });
  };
};
