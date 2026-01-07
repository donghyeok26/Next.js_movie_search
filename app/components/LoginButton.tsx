"use client";

import style from "./loginButton.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function LoginButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>로딩중...</p>;

  if (session) {
    return (
      <div className={style.login}>
        <p className={style.name}>{session.user?.name}님 안녕하세요!</p>
        <button className={style.logout} onClick={() => signOut()}>로그아웃</button>
      </div>
    );
  }

  return (
    <div className={style.login_before}>
      <Link href="/login">로그인</Link>
    </div>
  )
}
