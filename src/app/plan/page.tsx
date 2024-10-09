import styles from "./style.module.css";
import { Plans } from '../_components/Plans'

export default function Page() {
  return (
    <div className={styles.page}>
      <h1>プラン一覧</h1>
      <Plans />
    </div>
  );
}
