import { ReactNode, Suspense } from "react";
import Searchbar from "../components/searchbar";
import Providers from '../../app/providers';

export default function Layout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Searchbar />
            </Suspense>
            <Providers>
                {children}
            </Providers>
        </div>
    );
}
