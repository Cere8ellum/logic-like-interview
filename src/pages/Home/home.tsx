import React, { useEffect, useMemo, useState } from "react";
import * as styles from "./home.module.scss";
import { fetchData } from "../../core/api/api";
import { TData, TSortedData } from "../../core/types/TData";
import SideMenu from "./SideMenu/sideMenu";

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

export default function Home() {
  const [data, setData] = useState<TData[]>([]);
  const [shownCources, setShownCources] = useState<TSortedData | null>(null)
  console.log(data);

  const sortedTags = useMemo(() => sortByTags(data), [data]);

  console.log("tags", sortedTags);

  useEffect(() => {
    fetchData().then((res) => {
      setData(res);
    });
  }, []);
  return (
    <div className={styles.content}>
      <SideMenu data={sortedTags} cb={setShownCources} />
      <section className={styles.cards}>{shownCources === null ? data.map((v, k) => {
        return <div key={k} className={styles.card} style={{ backgroundColor: v.bgColor }}>
          <div className={styles.body}><img src={v.image} /></div>
          <div className={styles.footer}>{v.name}</div>
        </div>
      }) : "asdda"}</section >
    </div >
  );
}
