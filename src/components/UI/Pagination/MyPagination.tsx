import { MyButton } from "../Button/MyButton";
import { getPagseArray } from "../../../utils/pages";

type PropsType = {
  totalPages: number;
  changePage: (param: number) => void;
  page: number;
};

export const MyPagination = (props: PropsType) => {
  let pagesArray = getPagseArray(props.totalPages);

  return (
    <div className="pages__wrapper">
      {pagesArray.map((pageNumber) => (
        <div
          key={pageNumber}
          className={
            props.page === pageNumber ? "page__curent page__link" : "page__link"
          }
        >
          <MyButton
            btnTitle={String(pageNumber)}
            click={() => props.changePage(pageNumber)}
          />
        </div>
      ))}
    </div>
  );
};
