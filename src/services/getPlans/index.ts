type Props = {
  page?: string;
  take?: string;
  authorId?: string;
  revalidate?: number;
};

type Plan = {
  id: number;
  title: string;
  description: string;
  photo: string;
  budget: number;
}

export function getPlans(): { plans: Plan[]; } {
  const sampleData: Plan[] = [
    {
      id: 1,
      title: 'プラン1',
      description: 'ウェディングケーキ＆シャンパンタワー付き　4000円',
      photo: 'https://placehold.jp/150x150.png',
      budget: 4000,
    },
    {
      id: 2,
      title: 'プラン2',
      description: 'ウェディングケーキ＆シャンパンタワー付き　３５００円',
      photo: 'https://placehold.jp/3d4070/ffffff/150x150.png',
      budget: 3500,
    },
    {
      id: 3,
      title: '（カジュアルに）120分飲み放題付　リラックス二次会　2,800円',
      description: '',
      photo: 'https://placehold.jp/60c11f/ffffff/150x150.png',
      budget: 2800,
    },
    {
      id: 4,
      title: '【21時以降ＷＤライトプラン】　3,000円',
      description: 'ウェディングケーキ or シャンパンタワー付です。',
      photo: 'https://placehold.jp/8316b6/ffffff/150x150.png',
      budget: 3000,
    },
  ]

  return {
    plans: sampleData
  }
}
