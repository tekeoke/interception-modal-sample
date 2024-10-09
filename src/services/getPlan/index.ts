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

export function getPlan({ id }: { id: number }): { plan: Plan; } {
  const sampleData: Plan[] = [
    {
      id: 1,
      title: 'プラン1',
      description: '説明文1',
      photo: 'https://placehold.jp/150x150.png',
      budget: 4000,
    },
    {
      id: 2,
      title: 'プラン2',
      description: '説明文2',
      photo: 'https://placehold.jp/3d4070/ffffff/150x150.png',
      budget: 3500,
    },
    {
      id: 3,
      title: 'プラン3',
      description: '説明文3',
      photo: 'https://placehold.jp/60c11f/ffffff/150x150.png',
      budget: 2800,
    },
    {
      id: 4,
      title: 'プラン4',
      description: '説明文4',
      photo: 'https://placehold.jp/8316b6/ffffff/150x150.png',
      budget: 3000,
    },
  ]

  const data = sampleData.find(item => item.id === id) ?? {
    id: 0,
    title: '',
    description: '',
    photo: '',
    budget: 0,
  }

  return {
    plan: data
  }
}
