const fetcher = async (url: string) => {
  const res = await fetch(url);

  // 상태 코드가 200-299 범위가 아니더라도,
  // 파싱 시도를 하고 에러를 던집니다.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    throw error;
  }

  return res.json();
};
export default fetcher;
