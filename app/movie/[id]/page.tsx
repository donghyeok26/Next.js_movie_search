import style from './page.module.scss'

export default async function MovieDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    console.log(id);
    const API_URL = process.env.NEXT_PUBLIC_TMDB_API_URL!;
    const TOKEN = process.env.TMDB_ACCESS_TOKEN!;
    const response = await fetch(`${API_URL}/movie/${id}`, {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    console.log(data);

    const { title, overview, poster_path, release_date, vote_average } = data

    return <div>
        <div className={style.container}>
            <div className={style.inner}>
                <div
                    className={style.cover_img_container}
                    style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500${poster_path}')` }}
                >
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
                </div>
                <div className={style.info_con}>
                    <div className={style.title}>{title}</div>
                    <div className={style.author}>
                        {release_date} | {vote_average}
                    </div>
                    <div className={style.description}>{overview}</div>
                </div>
            </div>
        </div>
    </div>;
}
