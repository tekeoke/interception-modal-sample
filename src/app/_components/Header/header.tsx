'use client';

import Link from 'next/link';
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/' legacyBehavior passHref>
        Home
      </Link>
      <Link href='/login' legacyBehavior passHref>
        Login
      </Link>
      <Link href='/plan' legacyBehavior passHref>
        要素一覧
      </Link>
    </header>
  );
};