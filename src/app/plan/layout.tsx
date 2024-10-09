import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プランページ",
  description: "プラン一覧ページです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  );
}
