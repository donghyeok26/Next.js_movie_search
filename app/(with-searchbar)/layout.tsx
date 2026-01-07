import { ReactNode, Suspense } from "react";
import Searchbar from "../components/searchbar";
import Providers from '../../app/providers';
import LoginButton from "../components/LoginButton";
import style from "./layout.module.scss";

export default function Layout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div>
            <Providers>
                <div className={style.container}>
                    <div className={style.login}>
                        <LoginButton />
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Searchbar />
                    </Suspense>
                    {children}
                </div>
            </Providers>
        </div>
    );
}
