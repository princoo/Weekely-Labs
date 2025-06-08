import type { Movie } from "../types/movie";
import type { Rating } from "../types/rating";

export const dummyMovies: Movie[] = [

  {

    _id: "1",
    id: "tt0000001",
    ratingsSummary: {
      aggregateRating: 4.5,
      voteCount: 100,
    },
    genres: {
      genres: [
        {
          text: "Action",
          id: "action",
          __typename: "Genre",
        },
        {
          text: "Adventure",
          id: "adventure",
          __typename: "Genre",
        },
      ],
      __typename: "GenreList",
    },
    primaryImage: {
      id: "img1",
      width: 200,
      height: 300,
      url: "https://example.com/image1.jpg",
      caption: {
        plainText: "First Movie Caption",
        __typename: "Markdown",
      },
      __typename: "Image",
    },
    titleType: {
      text: "Movie",
      id: "movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    titleText: {
      text: "First Movie",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "First Movie Original",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 1990,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: "1990-01-01",
  },
  {
    _id: "2",
    id: "tt0000002",
    ratingsSummary: {
      aggregateRating: 4.5,
      voteCount: 100,
    },
    genres: {
      genres: [
        {
          text: "Action",
          id: "action",
          __typename: "Genre",
        },
        {
          text: "Adventure",
          id: "adventure",
          __typename: "Genre",
        },
      ],
      __typename: "GenreList",
    },
    primaryImage: {
      id: "img2",
      width: 200,
      height: 300,
      url: "https://example.com/image2.jpg",
      __typename: "Image",
    },
    titleType: {
      text: "Short",
      id: "short",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    titleText: {
      text: "Second Movie",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "Second Movie Original",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 1985,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: "1985-05-23",
  },
  {
    _id: "3",
    id: "tt0000003",
    ratingsSummary: {
      aggregateRating: 4.5,
      voteCount: 100,
    },
    genres: {
      genres: [
        {
          text: "Action",
          id: "action",
          __typename: "Genre",
        },
        {
          text: "Adventure",
          id: "adventure",
          __typename: "Genre",
        },
      ],
      __typename: "GenreList",
    },
    primaryImage: {
      id: "img3",
      width: 1920,
      height: 1080,
      url: "https://example.com/image3.jpg",
      caption: {
        plainText: "Third Caption",
        __typename: "Markdown",
      },
      __typename: "Image",
    },
    titleType: {
      text: "TV Movie",
      id: "tv_movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    titleText: {
      text: "Third Movie",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "Third Movie Original",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 2001,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: null,
  },
  {
    _id: "4",
    id: "tt0000004",
    ratingsSummary: {
      aggregateRating: 4.5,
      voteCount: 100,
    },
    genres: {
      genres: [
        {
          text: "Action",
          id: "action",
          __typename: "Genre",
        },
        {
          text: "Adventure",
          id: "adventure",
          __typename: "Genre",
        },
      ],
      __typename: "GenreList",
    },
    primaryImage: undefined,
    titleType: {
      text: "Movie",
      id: "movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    titleText: {
      text: "Fourth Movie",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "Fourth Movie Original",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 1975,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: "1975-11-01",
  },
  {
    _id: "5",
    id: "tt0000005",
    ratingsSummary: {
      aggregateRating: 4.5,
      voteCount: 100,
    },
    genres: {
      genres: [
        {
          text: "Action",
          id: "action",
          __typename: "Genre",
        },
        {
          text: "Adventure",
          id: "adventure",
          __typename: "Genre",
        },
      ],
      __typename: "GenreList",
    },
    primaryImage: {
      id: "img5",
      width: 1280,
      height: 720,
      url: "https://example.com/image5.jpg",
      caption: {
        plainText: "Fifth",
        __typename: "Markdown",
      },
      __typename: "Image",
    },
    titleType: {
      text: "Series",
      id: "series",
      isSeries: true,
      isEpisode: false,
      __typename: "TitleType",
    },
    titleText: {
      text: "Fifth Movie",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "Fifth Movie Original",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 1999,
      endYear: 2002,
      __typename: "YearRange",
    },
    releaseDate: "1999-03-15",
  },
  {
    _id: "6",
    id: "tt0000006",
    ratingsSummary: {
      aggregateRating: 4.5,
      voteCount: 100,
    },
    genres: {
      genres: [
        {
          text: "Action",
          id: "action",
          __typename: "Genre",
        },
        {
          text: "Adventure",
          id: "adventure",
          __typename: "Genre",
        },
      ],
      __typename: "GenreList",
    },
    primaryImage: {
      id: "img6",
      width: 500,
      height: 500,
      url: "https://example.com/image6.jpg",
      __typename: "Image",
    },
    titleType: {
      text: "Movie",
      id: "movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    titleText: {
      text: "Sixth Movie",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "Sixth Movie Original",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 2010,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: "2010-10-10",
  },
  {
    _id: "7",
    id: "tt0000007",
    ratingsSummary: {
      aggregateRating: 4.5,
      voteCount: 100,
    },
    genres: {
      genres: [
        {
          text: "Action",
          id: "action",
          __typename: "Genre",
        },
        {
          text: "Adventure",
          id: "adventure",
          __typename: "Genre",
        },
      ],
      __typename: "GenreList",
    },
    primaryImage: undefined,
    titleType: {
      text: "Short",
      id: "short",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    titleText: {
      text: "Seventh Movie",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "Seventh Movie Original",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 1980,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: "1980-04-04",
  },
  {
    _id: "8",
    id: "tt0000008",
    ratingsSummary: {
      aggregateRating: 4.5,
      voteCount: 100,
    },
    genres: {
      genres: [
        {
          text: "Action",
          id: "action",
          __typename: "Genre",
        },
        {
          text: "Adventure",
          id: "adventure",
          __typename: "Genre",
        },
      ],
      __typename: "GenreList",
    },
    primaryImage: {
      id: "img8",
      width: 1600,
      height: 900,
      url: "https://example.com/image8.jpg",
      __typename: "Image",
    },
    titleType: {
      text: "Movie",
      id: "movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    titleText: {
      text: "Eighth Movie",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "Eighth Movie Original",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 2020,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: "2020-12-20",
  },
  {
    _id: "9",
    id: "tt0000009",
    ratingsSummary: {
      aggregateRating: 4.5,
      voteCount: 100,
    },
    genres: {
      genres: [
        {
          text: "Action",
          id: "action",
          __typename: "Genre",
        },
        {
          text: "Adventure",
          id: "adventure",
          __typename: "Genre",
        },
      ],
      __typename: "GenreList",
    },
    primaryImage: {
      id: "img9",
      width: 800,
      height: 600,
      url: "https://example.com/image9.jpg",
      caption: {
        plainText: "Ninth",
        __typename: "Markdown",
      },
      __typename: "Image",
    },
    titleType: {
      text: "TV Movie",
      id: "tv_movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    titleText: {
      text: "Ninth Movie",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "Ninth Movie Original",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 1995,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: "1995-07-17",
  },
  {
    _id: "10",
    id: "tt0000010",
    ratingsSummary: {
      aggregateRating: 4.5,
      voteCount: 100,
    },
    genres: {
      genres: [
        {
          text: "Action",
          id: "action",
          __typename: "Genre",
        },
        {
          text: "Adventure",
          id: "adventure",
          __typename: "Genre",
        },
      ],
      __typename: "GenreList",
    },
    primaryImage: {
      id: "img10",
      width: 1024,
      height: 768,
      url: "https://example.com/image10.jpg",
      __typename: "Image",
    },
    titleType: {
      text: "Movie",
      id: "movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    titleText: {
      text: "Tenth Movie",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "Tenth Movie Original",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 2023,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: "2023-09-30",
  },
];

export const dummyRatings: Rating[] = [
  {
    tconst: "tt0000001",
    averageRating: 7.2,
    numVotes: 1540,
  },
  {
    tconst: "tt0000002",
    averageRating: 6.5,
    numVotes: 980,
  },
  {
    tconst: "tt0000003",
    averageRating: 8.1,
    numVotes: 3420,
  },
  {
    tconst: "tt0000004",
    averageRating: 5.8,
    numVotes: 410,
  },
  {
    tconst: "tt0000005",
    averageRating: 9.0,
    numVotes: 10500,
  },
  {
    tconst: "tt0000006",
    averageRating: 6.9,
    numVotes: 1675,
  },
  {
    tconst: "tt0000007",
    averageRating: 4.7,
    numVotes: 230,
  },
  {
    tconst: "tt0000008",
    averageRating: 7.6,
    numVotes: 2100,
  },
  {
    tconst: "tt0000009",
    averageRating: 5.3,
    numVotes: 605,
  },
  {
    tconst: "tt0000010",
    averageRating: 8.5,
    numVotes: 7830,
  },
];