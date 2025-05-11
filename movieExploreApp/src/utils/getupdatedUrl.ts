export function getUpdatedPageUrl(
  url: string | null,
  page: string,
  direction: "next" | "prev"
): { updatedUrl: string | null; isSearch: boolean } {
  const base = import.meta.env.VITE_BASE_URL;
  const fullUrl = new URL(url || "", base); // full url
  const params = fullUrl.searchParams; // url params
  //   const nextPage = Number(params.get("page") || "1");
  const newPage =
    direction === "next" ? Number(page) + 1 : Math.max(Number(page) - 1, 1);
  params.set("page", String(newPage));

  const updatedUrl = `${fullUrl.pathname}?page=${newPage.toString()}`; // reconstructing a new url with chnaged params
//   const updatedUrl = `${fullUrl.pathname}?page=${newPage}&${params.toString()}`; // reconstructing a new url with chnaged params
  const isSearch = fullUrl.pathname.includes("/search"); // this will help to determine if paginating search data or origina dat

  return { updatedUrl, isSearch };
}
