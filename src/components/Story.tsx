import { getStory } from "../services/hacker-news";
import useSWR from "swr";

const Story = ({ id }: { id: number }) => {
  console.log(id);
  const { data, isLoading } = useSWR(`story/${id}`, () => getStory(id));
  const { title, score, by, time } = data;
  if (isLoading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  console.log(data);
  return (
    <div>
      <h1>{title}</h1>
      <p>score: {score}</p>
      <p>author: {by}</p>
    </div>
  );
};

export default Story;
