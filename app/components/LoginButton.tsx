"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>로딩중...</p>;

  if (session) {
    return (
      <div>
        <p>{session.user?.name}님 로그인됨</p>
        <button onClick={() => signOut()}>로그아웃</button>
      </div>
    );
  }

  return <button onClick={() => signIn("github")}>GitHub 로그인</button>;
}
