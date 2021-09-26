import { useState } from "react";

type PropsType = {
  callback: () => void;
};

//параметром принимает колбек, который возвразщается перевым элементом массива
export const useFetching = (props: PropsType) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setIsLoading(true);
      await props.callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
  //[функция, индикатор загрузки, ошибка]
};
