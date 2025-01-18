import React from "react";
import styles from "./Envelope.module.css";
import Section from "../Section/Section";

const Envelope = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <Section>
      <div className={styles.wrapper} onClick={handleClick}>
          <>
            <div className={`${styles.lid} ${styles.one}`}></div>
            <div className={`${styles.lid} ${styles.two}`}></div>
            <div className={styles.envelope}></div>
            <div className={styles.letter}>
              <p>You&apos;re invited!</p>
            </div>
          </>
      </div>
    </Section>
  );
};

export default Envelope;
