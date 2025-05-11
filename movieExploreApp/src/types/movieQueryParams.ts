export interface MovieQueryParams {
  year?: number;
  startYear?: number;
  endYear?: number;
  titleType?: string;
  list?: "most_pop_movies" | "most_pop_series" | "top_rated_series_250";
  sort?: "incr" | "decr";
  page?: number;
  info?: "base_info" | "mini_info" | "image";
  limit?: number;
  genre?: string;
  exact?: boolean;
  // [key: string]: any;
}

export interface MyContextType {
    params: MovieQueryParams;
    setParams: React.Dispatch<React.SetStateAction<MovieQueryParams>>;
  }
  