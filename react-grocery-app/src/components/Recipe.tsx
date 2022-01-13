import { FormEventHandler, useState } from "react";
import "./Recipe.scss";

type RecipeProps = {
  recipe: string;
  setRecipe: React.Dispatch<React.SetStateAction<string>>;
};

export default function Recipe(props: RecipeProps) {
  const [data, setData] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    props.setRecipe(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              placeholder="Enter a food recipe or a meal wish"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="form-control"
              autoFocus={true}
              maxLength={25}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="submit"
              className="btn btn-info w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
