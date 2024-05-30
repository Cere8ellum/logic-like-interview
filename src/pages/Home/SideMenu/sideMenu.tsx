import React, { useMemo } from "react";
import * as styles from "./sideMenu.module.scss";
import { TData } from "../../../core/types/TData";

type TProps = { data: TData[]; cb: () => void };

function sortByTags(data: TData[]) {
  return data.reduce((acc, next) => {
    // Перебрать все тэги, и поместить карточку в соответствующий ключ по тэгу в коллекции
    for (let i = 0; i <= next.tags.length - 1; i++) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { tags, ...rest } = next;
      const tag = next.tags[i];

      const cardsInSet = acc.get(tag);
      // Если тэг уже есть в коллекции (значит туда уже что-то добавлено ранее) - добавить в него карточку
      // Иначе - - добавить тэг, а затем в него карточку
      cardsInSet ? acc.set(tag, [...cardsInSet, rest]) : acc.set(tag, [rest]);
    }

    return acc;
  }, new Map<string, Omit<TData, "tags">[]>());
}

export default function SideMenu({ data }: TProps) {
  const tags = useMemo(() => sortByTags(data), [data]);

  console.log("tags", tags);
  return (
    <div className={styles.wrapper}>
      <span>Все темы</span>
      {/*tags.map((v, k) => {
        return (
          <span key={k} onClick={() => ""}>
            {v}
          </span>
        );
      })*/}
    </div>
  );
}
