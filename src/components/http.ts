export const fetchData = (): Promise<number> => {
  return new Promise(res => {
    setTimeout(() => res(100), 1000);
  });
};
