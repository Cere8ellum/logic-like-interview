import React, { useEffect, useState } from "react";
import * as styles from "./home.module.scss";
import { fetchData } from "../../core/api/api";
import { TData } from "../../core/types/TData";
import SideMenu from "./SideMenu/sideMenu";

export default function Home() {
  const [data, setData] = useState<TData[]>([]);
  console.log(data);

  const showCources = () => {
    console.log("showCources");
  };

  useEffect(() => {
    fetchData().then((res) => {
      setData(res);
    });
  }, []);
  return (
    <div className={styles.content}>
      <SideMenu data={data} cb={showCources} />
      <section>{}</section>
    </div>
  );
}
