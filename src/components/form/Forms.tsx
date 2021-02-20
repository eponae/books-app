import { useParams } from "react-router-dom";

const Forms = () => {
  const { slug }: { slug: string } = useParams();
  return <div>{slug}</div>;
};

export default Forms;
