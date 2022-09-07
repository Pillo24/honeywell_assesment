import styles from "./CompleteBox.module.scss";
import { motion } from "framer-motion";

export default function CompleteBox() {
  return (
    <motion.div className={styles.complete_container}>
      <motion.div
        initial={{ x: 200, rotate: [45] }}
        animate={{ x: 0, rotate: 0 }}
        className={styles.dialogueBox}
      >
        You have been successfully registered
      </motion.div>
    </motion.div>
  );
}
