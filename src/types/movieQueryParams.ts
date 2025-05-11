export interface MovieQueryParams {
  year?: number;
  startYear?: number;
  endYear?: number;
  titleType?: string;
  list?: "most_pop_movies" | "most_pop_series" | "top_rated_series_250" | "top_boxoffice_200" | "titles";
  sort?: "incr" | "decr";
  page?: number;
  info?: "base_info" | "mini_info" | "image";
  limit?: number;
  genre?: string;
  exact?: boolean;
}

export interface MyContextType {
    params: MovieQueryParams;
    setParams: React.Dispatch<React.SetStateAction<MovieQueryParams>>;
  }
  