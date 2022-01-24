import type { NextPage } from "next";
import QuickView from "../components/QuickView";

import styles from "../styles/Home.module.css";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <QuickView />
    </div>
  );
};

export default IndexPage;
