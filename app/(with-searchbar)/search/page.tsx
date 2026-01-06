import MovieItem from "@/app/components/movie-item";
import { MovieData } from "@/app/type/types";
import style from "../page.module.scss"

export default async function Page({ searchParams }: { searchParams: Promise<{ q: string }> }) {
    const { q } = await searchParams;
    console.log(q)
    const API_URL = process.env.NEXT_PUBLIC_TMDB_API_URL!;
    const TOKEN = process.env.TMDB_ACCESS_TOKEN!;

    const response = await fetch(`${API_URL}/search/movie?query=${q}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw Error('TMDB fetch 실패')
    }

    const movies = await response.json();
    console.log(movies)
    if (!movies.results || movies.results.length === 0) {
        return (
            <div className={style.container}>
                <p className={style.empty_data}>
                    “{q}”에 대한 검색 결과가 없습니다.
                </p>
            </div>
        );
    }
    return (
        <div className={style.container}>
            <ul className={style.movie_con}>
                {movies.results.map((movie: MovieData) => (
                    <MovieItem key={movie.id} {...movie} />
                ))}
            </ul>
        </div>
    )
}