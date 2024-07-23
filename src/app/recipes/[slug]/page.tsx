import { SingleRecipe } from "@/features/recipes";

export default function SingleRecipesPage({ params }: { params: { slug: string } }) {
  return <SingleRecipe />;
}