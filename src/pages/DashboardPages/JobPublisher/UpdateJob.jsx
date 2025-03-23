import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router"

export default function UpdateJob() {
  const { id } = useParams();
  const { data: job = {}, isLoading } = useQuery({
    queryKey: ["jobDetails"],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/job-details/${id}`
      );
      return data;
    },
  });
  console.log(job)
  return (
    <div>UpdateJob</div>
  )
}
