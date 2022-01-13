import Content from "./Content";

type StandardDayProps = {
  recipe: string;
};

export default function StandardDay(props: StandardDayProps) {
  return (
    <div>
      <p>Recipe:</p>
      <div className="container">
        <div className="row">
          <div className="col">
            <Content recipe={props.recipe} />
          </div>
        </div>
      </div>
      <footer>🛒 This project was coded by Jacky</footer>
    </div>
  );
}
