import { RecipeList } from './RecipeList';
import recipes from '../recipes.json';
export const App = () => {
  return (
    <>
      <RecipeList recipes={recipes} />
      {/* <Recipe recipe={recipes[0]} />
      <Recipe recipe={recipes[1]} />
      <Recipe recipe={recipes[2]} />
      <Recipe recipe={recipes[3]} /> */}
    </>
  );
};
