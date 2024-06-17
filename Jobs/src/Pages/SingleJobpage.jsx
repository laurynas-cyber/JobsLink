import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

function SingleJobpage() {
  const { id } = useParams();

  //   useEffect(() => {
  //     const fetchJob = async () => {
  //       try {
  //         const res = await fetch(`api/jobs/${id}`);
  //         const data = await res.json();
  //         setJob(data);
  //       } catch (error) {
  //         console.log("error fetching data", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchJob();
  //   }, []);

  return loading ? <Spinner /> : <h1>{job.title}</h1>;
}

const jobLoader = async ({}) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { SingleJobpage as default, jobLoader };
