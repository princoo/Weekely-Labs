export interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
}
export interface MovieParam {
  params: {
    movieId: string;
  };
}
