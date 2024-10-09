import styles from "./style.module.css";

type Props = {
  params: { planId: string };
};

export default function PlanPage({ params }: Props) {
  console.log(params.planId)
  return <div className={styles.page}>プラン詳細: {params.planId}</div>;
}