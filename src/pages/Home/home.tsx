import React, { memo, useEffect, useMemo, useState } from "react";
import * as styles from "./home.module.scss";
import { fetchData } from "../../core/api/api";
import { TData } from "../../core/types/TData";
import SideMenu from "./SideMenu/sideMenu";
import Content from "./Content/content";

function filterByTag(data: TData[], tag: string) {
  return data.filter((v) => v.tags.includes(tag));
}

function getMenu(data: TData[], allItemsLabel: string) {
  const notUniqueTagsArray = data.reduce((acc, next) => {
    acc.push(...next.tags);
    return acc;
  }, [] as string[]);

  // Вернуть уникальные
  const unique = Array.from(new Set(notUniqueTagsArray));
  // Добавить пункт Все темы
  unique.unshift(allItemsLabel);

  return unique;
}

const ALL_COURCES_ID = "Все темы";

export default memo(function Home() {
  const [data, setData] = useState<TData[]>([]);
  const [shownCources, setShownCources] = useState<number>(0);

  const sideMenu = useMemo(() => getMenu(data, ALL_COURCES_ID), [data]);

  useEffect(() => {
    fetchData().then((res) => {
      setData(res);
    });
  }, []);
  return (
    <div className={styles.content}>
      <SideMenu
        data={sideMenu}
        activeItemIndex={shownCources}
        cb={setShownCources}
      />
      <Content
        data={
          // 0 - Все темы
          shownCources === 0 ? data : filterByTag(data, sideMenu[shownCources])
        }
      />
    </div>
  );
});
