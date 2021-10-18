import { useEffect, useRef } from "react";

type PropsType = {
  elementRef: any;
  isLoading: boolean;
  canLoad: boolean;
  setPageCallback: () => void;
};

//параметром принимает ref элемента за которым нужно наблюдать и колбек
export const useObserver = (props: PropsType) => {
  const observer = useRef();

  useEffect(() => {
    if (props.isLoading) return;
    if (observer.current) observer.current.disconnect();

    let callback = function (entries, observer) {
      //entries - массив элементов за которыми мы наблюдаем

      if (entries[0].isIntersecting && props.canLoad) {
        //entries - обращение к свойствам элемента за которыми мы наблюдаем
        //исп. 0 т.к. всего один наблюдаемый элемент - имеющий ref={LastElemRef}
        //isIntersecting - свойство которое отслеживает только появление на экране
        props.setPageCallback();
      }

      //все, что тут написано будет отрабатывать когда
      //div, имеющий ref={LastElemRef} будет отображаться на экране
      //будет срабатывать как на появление так и на исчезновение div
    };
    observer.current = new IntersectionObserver(callback);

    //установка наблюдения за нашим div, имеющий ref={LastElemRef}
    observer.current.observe(props.elementRef.current);
  }, [props.isLoading]);
};
