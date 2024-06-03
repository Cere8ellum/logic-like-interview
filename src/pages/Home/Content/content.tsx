import React from "react";
import * as styles from "./content.module.scss";
import { TData } from "../../../core/types/TData";
type TProps = {
  data: TData[];
};

export default function Content({ data }: TProps) {
  return (
    <section className={styles.cards}>
      {data.map((v, k) => {
        return (
          <div
            key={k}
            className={styles.card}
            style={{ backgroundColor: v.bgColor }}
          >
            <div className={styles.body}>
              <img src={v.image} />
            </div>
            <div className={styles.footer}>{v.name}</div>
          </div>
        );
      })}
    </section>
  );
}
