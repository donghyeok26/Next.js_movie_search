'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import style from './searchbar.module.scss'

export default function Searchbar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [search, setSearch] = useState('');

    const q = searchParams.get('q');

    useEffect(() => {
        setSearch(q || "");
    }, [q]);

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const onSubmit = () => {
        if (!search || q === search) return;
        router.push(`/search?q=${search}`)
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    };

    return (
        <div className={style.container}>
            <div className={style.input_con}>
                <input
                    className={style.input_box}
                    value={search}
                    onChange={onChangeSearch}
                    onKeyDown={onKeyDown}

                    placeholder="영화제목을 입력해주세요"
                />
                <button className={style.search_btn} onClick={onSubmit}>검색</button>
            </div>
        </div>
    );
}