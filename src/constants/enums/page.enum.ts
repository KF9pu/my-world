enum Page {
  "Profile" = 0,
  "World" = 1,
  "Food" = 2,
  "?" = 3,
}

const PageToSections: { [key: string]: string[] } = {
  none: [],
  [`${Page.Profile}`]: ["소개", "프로젝트", "연혁", "활동"],
  [`${Page.World}`]: ["갤러리", "플레이센터", "-"],
  [`${Page.Food}`]: ["내 맛집", "방송맛집", "제철음식", "로컬음식"],
  [`${Page["?"]}`]: ["내 맛집", "방송맛집", "제철음식", "로컬음식"],
};

const pageCnt = Object.keys(Page).filter((key) => isNaN(Number(key))).length; // isNaN 함수를 통해 숫자키의 갯수를 카운트 할 수 있어진다.

const PageEnum = { Page, pageCnt, PageToSections };
export default PageEnum;
