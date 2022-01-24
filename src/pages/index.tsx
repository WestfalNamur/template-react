import type { NextPage } from "next";
import LandingView from "../features/landingView/LandingView";

import styles from "../styles/Home.module.css";

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <LandingView />
    </div>
  );
};

export default IndexPage;
