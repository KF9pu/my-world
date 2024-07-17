enum Page {
  "Profile" = 0,
  "World" = 1,
  "FoodMap" = 2,
  "?" = 3,
}

const pageCnt = Object.keys(Page).filter((key) => isNaN(Number(key))).length;

const PageEnum = { Page, pageCnt };
export default PageEnum;
