import React, { Dispatch, SetStateAction } from "react";
import * as styles from "./sideMenu.module.scss";

type TProps = {
  data: string[];
  activeItemIndex: number;
  cb: Dispatch<SetStateAction<number>>;
};

const SideMenu = ({ data, activeItemIndex, cb }: TProps) => {
  return (
    <div className={styles.wrapper}>
      {data.map((v, k) => {
        const active = k === activeItemIndex ? styles.active : "";
        return (
          <span className={active} key={k} onClick={() => cb(k)}>
            {v}
          </span>
        );
      })}
    </div>
  );
};

export default SideMenu;
