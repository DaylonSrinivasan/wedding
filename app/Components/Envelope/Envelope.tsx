import React, { useState } from "react";
import { motion } from "framer-motion";
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
              <p>You're invited!</p>
            </div>
          </>
      </div>
    </Section>
  );
};

export default Envelope;
