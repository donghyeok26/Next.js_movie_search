import Link from "next/link";
import style from './movie-item.module.scss'
import { MovieData } from "../type/types";

export default function MovieItem({
    id,
    // title,
    // overview,
    poster_path,
    release_date,
    title,
    vote_average,
}: MovieData) {
    return (
        <li className={style.movie_item}>
            <Link href={`/movie/${id}`} className={style.link}>
                <div className={style.img_con}>
                    <img className={style.img} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
                </div>
                <div className={style.info_con}>
                    <p className={style.title}>{title}</p>
                    <div className={style.info}>
                        <p className={style.release_date}>{release_date}</p>
                        <p className={style.view}>{vote_average.toFixed(1)}</p>
                    </div>
                </div>
            </Link>
        </li>
    )
}