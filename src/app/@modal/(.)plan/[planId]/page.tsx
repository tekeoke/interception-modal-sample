import styles from './style.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { ModalOverlay } from '../../../_components/ModalOverlay'
import { getPlan } from '../../../../services/getPlan'

type Props = {
  params: { planId: string };
};

const InterceptingModal = ({ params }: Props) => {
  const { plan } = getPlan({ id: Number(params.planId) })
  const prevPlanId = Number(params.planId) > 1 ? Number(params.planId) - 1 : undefined
  const nextPlanId = Number(params.planId) >= 0 && Number(params.planId) < 4 ? Number(params.planId) + 1 : undefined
  return (
    <div className={styles.modal}>
      <ModalOverlay />
      <div
        role="dialog"
        aria-modal="true"
        className={styles.dialog}
      >
        <h2>{plan.title}</h2>
        <div>
          <Image src={plan.photo} alt={plan.title} width={150} height={150} />
        </div>
        <div className={styles.description}>
          <p>{plan.description}</p>
          <p>{plan.budget}</p>
        </div>
        <footer className={styles.footer}>
          {prevPlanId && <Link className={styles.link} href={`/plan/${prevPlanId}`}>前のプランを見る</Link>}
          {nextPlanId && <Link className={styles.link} href={`/plan/${nextPlanId}`}>次のプランを見る</Link>}
        </footer>
      </div>
    </div>
  );
};

export default InterceptingModal;