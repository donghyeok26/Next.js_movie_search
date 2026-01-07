import Link from 'next/link';
import style from './page.module.scss';
import MovieItem from '../components/movie-item';
import { MovieData } from '../type/types';
import { MovieListResponse } from '../type/tmdb';
import LoginButton from '../components/LoginButton';

const API_URL = process.env.NEXT_PUBLIC_TMDB_API_URL!;
const TOKEN = process.env.TMDB_ACCESS_TOKEN!;

async function TrendingMovies() {
  const response = await fetch(`${API_URL}/trending/movie/day`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('TMDB fetch 실패')
  }

  const movies: MovieListResponse = await response.json();
  console.log(movies)
  return (
    <ul className={style.movie_con}>
      {movies.results.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </ul>
  )
}

async function NowPlaying() {
  const response = await fetch(`${API_URL}/movie/now_playing`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  )

  if (!response.ok) {
    throw Error('TMDB fetch 실패')
  }

  const movies: MovieListResponse = await response.json();
  console.log(movies)
  return (
    <ul className={style.movie_con}>
      {movies.results.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </ul>
  )
}

export default async function Home() {

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <Link href="/">Movies</Link>
        <Link href="/">Tv</Link>
        <Link href="/">Discover</Link>
      </div>

      <div className={style.movies}>
        <p className={style.title}>Trending</p>
        <TrendingMovies />
      </div>

      <div className={style.movies}>
        <p className={style.title}>Now Playing</p>
        <NowPlaying />
      </div>
    </div>
  );
}