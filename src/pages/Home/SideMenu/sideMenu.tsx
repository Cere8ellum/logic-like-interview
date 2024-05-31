import React, { Dispatch, SetStateAction, useMemo } from "react";
import * as styles from "./sideMenu.module.scss";
import { TSortedData } from "../../../core/types/TData";

type TProps = { data: TSortedData; cb: Dispatch<SetStateAction<TSortedData | null>> };




export default function SideMenu({ data }: TProps) {
  return (
    <div className={styles.wrapper}>
      <span data-id="all-categories">Все темы</span>
      {Array.from(data).map((v, k) => {
        return (
          <span data-id={v[0]} key={k} onClick={() => ""}>
            {v[0]}
          </span>
        )
      })}
    </div>
  );
}
