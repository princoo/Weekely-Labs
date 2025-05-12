export interface Movie {
  _id: string;
  id: string;
  ratingsSummary: {
    aggregateRating: number;
    voteCount: number;
  };
  genres: {
    genres: {
      text: string;
      id: string;
      __typename: string;
    }[];
    __typename: string;
  };
  plot?: {
    plotText: {
      plainText: string;
      __typename: string;
    };
    language: {
      id: string;
    };
  };
  primaryImage?: {
    id: string;
    width: number;
    height: number;
    url: string;
    caption?: {
      plainText: string;
      __typename: string;
    };
    __typename: string;
  };
  titleType: {
    text: string;
    id: string;
    isSeries: boolean;
    isEpisode: boolean;
    __typename: string;
  };
  titleText: {
    text: string;
    __typename: string;
  };
  originalTitleText: {
    text: string;
    __typename: string;
  };
  releaseYear?: {
    year: number;
    endYear: number | null;
    __typename: string;
  };
  releaseDate: string | null;
}

export interface MovieCard {
  movie: Movie;
  onClick: (data: Movie) => void;
}
