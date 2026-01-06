import { MovieData } from './types';

export interface MovieListResponse {
    page: number;
    results: MovieData[];
    total_pages: number;
    total_results: number;
}