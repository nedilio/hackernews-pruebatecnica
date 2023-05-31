import Story from "../components/Story";
import { getStories } from "../services/hacker-news";
import useSWR from "swr";

const TopStories = () => {
  const { data, isLoading } = useSWR("ids", () => getStories(1, 5));
  console.log(data);

  return (
    <div>
      {data?.map((id: number) => (
        <Story id={id} key={id} />
      ))}
    </div>
  );
};

export default TopStories;
