'use client';

import "../globals.css";
import style from "./page.module.scss";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/"); // 로그인 후 이동할 페이지
        }
    }, [status, router]);

    // 세션 확인 중일 때
    if (status === "loading") {
        return <div className="container">로그인 확인 중...</div>;
    }

    return (
        <div className="container">
            <div className={style.sns_login_con}>
                <h2 className={style.title}>SNS 로그인</h2>

                <button onClick={() => signIn("github")}>
                    GitHub로 로그인
                </button>

                <button onClick={() => signIn("google")}>
                    Google로 로그인
                </button>
            </div>
        </div>
    );
}
