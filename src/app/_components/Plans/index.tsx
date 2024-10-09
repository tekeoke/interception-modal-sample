import { type FC } from 'react'
import { getPlans } from '@/services/getPlans'
import styles from "./style.module.css";
import Image from 'next/image';
import Link from 'next/link';

export const Plans: FC = () => {
  const { plans } = getPlans()

  return (
    <div className={styles.wrap}>
      {
        plans.map(item => (
          <div key={item.id} className={styles.card}>
            <div>
              <Image src={item.photo} alt={item.title} width={150} height={150} />
            </div>
            <div className={styles.text}>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.budget}</p>
              <Link className={styles.link} key={item.id} href={`/plan/${item.id}`} passHref>詳細を見る</Link>
            </div>
          </div>
        ))
      }
    </div>
  )
}