export default function MealDetailsPage({ params }) {
  const slug = params.slug
  return (
    <main>
      <h1>Meal Details</h1>
      <p>{slug}</p>
    </main>
  );
}
