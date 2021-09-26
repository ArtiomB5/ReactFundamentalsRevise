export const getPageCount = (TotalCount: number, limit: number) => {
  //округление количества страниц в большую сторону
  return Math.ceil(TotalCount / limit);
};

export const getPagseArray = (totalPages: number) => {
  const pagesArray = [];
  for (let index = 0; index < totalPages; index++) {
    pagesArray.push(index + 1);
  }
  return pagesArray;
};
