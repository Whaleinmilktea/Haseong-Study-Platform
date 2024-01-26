import { useQuery } from "@tanstack/react-query";
import { getWeaterData } from "../apis/weatherRequest";

const ReactQueryButton = () => {
  const weatherData = useQuery({
    queryKey: ['weather'],
    queryFn: getWeaterData,
    enabled: false,
  })

  const handleClickForFetchData = () => {
    weatherData.refetch()
  }

  return (
    <>
      <button onClick={handleClickForFetchData}>React Query Button</button>
    </>
  );
};

export default ReactQueryButton;
