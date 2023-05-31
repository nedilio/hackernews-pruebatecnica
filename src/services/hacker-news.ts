export async function getStories(page: number, limit: number) {
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const data = await res.json();

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const ids = data.slice(startIndex, endIndex);

  return ids;
}

export async function getStory(id: number) {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
  );
  const data = await res.json();

  return data;
}
