import _range from "lodash/range";

export const DOTS: dot = "...";

export type dot = "...";

export type range = (dot | number)[];

/**
 * Interface representing options for configuring a paginated collection.
 * @interface Opts
 */
export interface Opts {
  /**
   * The route path for the paginated collection.
   * @type {string}
   * @description The URL path for accessing the paginated collection, e.g., http://localhost:3000/blog.
   */
  path: string;

  /**
   * The total number of items in the collection to be paginated.
   * @type {number}
   * @description The overall count of items in the entire collection that is being paginated.
   */
  total: number;

  /**
   * The optional limit of items per page.
   * @type {number | undefined}
   * @description The maximum number of items to display on each page of the paginated collection. Defaults to an implementation-specific value if not provided.
   */
  limit?: number;

  /**
   * The optional active page number.
   * @type {number | undefined}
   * @description The page number initially being viewed, e.g., 3 for http://localhost:3000/blog/3. Defaults to 1 if not provided.
   */
  active?: number;

  /**
   * The optional number of siblings on each side of the current page.
   * @type {number | undefined}
   * @description The number of adjacent page links to display on each side of the current active page. Defaults to an implementation-specific value if not provided.
   */
  siblings?: number;
}

/**
 * Interface representing a paginated collection.
 * @interface Paginated
 */
export interface Paginated {
  /**
   * The route path for the paginated collection.
   * @readonly
   * @type {string}
   * @description The URL path for accessing the paginated collection, e.g., http://localhost:3000/blog.
   */
  readonly path: string;

  /**
   * The current active page number.
   * @readonly
   * @type {number}
   * @description The page number currently being viewed, e.g., 3 for http://localhost:3000/blog/3.
   */
  readonly active: number;

  /**
   * The limit of items per page.
   * @readonly
   * @type {number}
   * @description The maximum number of items to display on each page of the paginated collection.
   */
  readonly limit: number;

  /**
   * The number of siblings on each side of the current page.
   * @readonly
   * @type {number}
   * @description The number of adjacent page links to display on each side of the current active page.
   */
  readonly siblings: number;

  /**
   * The total number of items in the collection we want to paginate.
   * @readonly
   * @type {number}
   * @description The overall count of items in the entire collection that is being paginated.
   */
  readonly total: number;

  /**
   * The total number of pages after paginating.
   * @readonly
   * @type {number}
   * @description The total number of pages formed after dividing the entire collection into pages.
   */
  readonly pages: number;

  /**
   * The start item in the collection.
   * @readonly
   * @type {number}
   * @description The index of the first item on the current active page.
   */
  readonly start: number;

  /**
   * The end item in the collection.
   * @readonly
   * @type {number}
   * @description The index of the last item on the current active page.
   */
  readonly end: number;

  /**
   * The first page route.
   * @readonly
   * @type {string}
   * @description The URL route for the first page, e.g., http://localhost:3000/blog/1.
   */
  readonly first: string;

  /**
   * The last page route.
   * @readonly
   * @type {string}
   * @description The URL route for the last page, e.g., http://localhost:3000/blog/5.
   */
  readonly last: string;

  /**
   * The range of paginated items.
   * @readonly
   * @type {Range}
   * @description The list of page numbers forming the range, e.g., [1] [2] [3] [4] [...] [10].
   */
  readonly range: range;

  /**
   * The next page route.
   * @readonly
   * @type {string | undefined}
   * @description The URL route for the next page, or undefined if there is no next page.
   */
  readonly next: string | undefined;

  /**
   * The previous page route.
   * @readonly
   * @type {string | undefined}
   * @description The URL route for the previous page, or undefined if there is no previous page.
   */
  readonly prev: string | undefined;
}

export const paginate = ({ total, active = 1, limit, siblings = 1, path }: Opts): Paginated => {
  const _LIMIT = limit ?? total;
  const pages = Math.ceil(total / _LIMIT);
  if (siblings >= pages) {
    siblings = pages;
  }

  if (active < 1) {
    active = 1;
  }
  if (active > pages) {
    active = pages;
  }

  // converting floating values to int
  active = parseInt(active.toString(), 10);

  const range = (function () {
    // case 1: No dots available:        [<<] [<] [1] [2] [3] [4] [5] [>] [>>]
    const _totalPageNumbersInArray = 7 + siblings;
    if (_totalPageNumbersInArray >= pages) {
      return _range(1, pages + 1);
    }

    const leftSiblingsIndex = Math.max(active - siblings, 1);
    const shotLeftDots = leftSiblingsIndex > 2;

    const rightSiblinsIndex = Math.min(active + siblings, pages);
    const showRightDots = rightSiblinsIndex < pages - 2;

    if (!shotLeftDots && showRightDots) {
      // case 2: right dot is preset:      [<<] [<] [1] [2] [3] [4] [5]  ... [10] [>] [>>]
      const leftItemCount = 3 + 2 * siblings;
      const leftRange = _range(1, leftItemCount + 1);
      return [...leftRange, DOTS, pages];
    } else if (shotLeftDots && !showRightDots) {
      // case 3: left dot is preset:       [<<] [<] [1] ... [6] [7] [8] [9] [10] [>] [>>]
      const rightItemCount = 3 + 2 * siblings;
      const rightRange = _range(pages - rightItemCount + 1, pages + 1);
      return [1, DOTS, ...rightRange];
    } else {
      // case 4: both side dots is preset: [<<] [<] [1] ... [5] [6] [7] ... [10] [>] [>>]
      const middle = _range(leftSiblingsIndex, rightSiblinsIndex + 1);
      return [1, DOTS, ...middle, DOTS, pages];
    }
  })();

  const end = active * _LIMIT;
  const start = end - _LIMIT;
  const next = active < pages ? `${path}/${active + 1}` : undefined;
  const prev = active > 2 ? `${path}/${active - 1}` : active === 2 ? path : undefined;

  return {
    path,
    pages,
    total,
    range,
    active,
    limit: _LIMIT,
    siblings,
    start,
    end,
    first: path,
    last: `${path}/${pages}`,
    next,
    prev,
  };
};

export default paginate;
