import { useParams } from "react-router-dom";
import StandardDay from "../components/StandardDay";
import { Link } from "react-router-dom";

type DaysProps = {
  recipe: string;
};

export default function Days(props: DaysProps) {
  let params = useParams();

  return (
    <div>
      <nav>
        <Link to="/">HOME</Link>
      </nav>
      <main>
        <h1>{params.dayId}</h1>
        <StandardDay recipe={props.recipe} />
      </main>
    </div>
  );
}
