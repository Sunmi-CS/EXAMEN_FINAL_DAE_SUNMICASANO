import Card from "./Card";
export default function CardList({ data }) {
  if (!data || data.length === 0) {
    return <p>No hay animes para mostrar.</p>;
  }
  return (
    <div className="row g-3">
      {data.map(item => (
        <div key={item.mal_id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Card item={item} />
        </div>
      ))}
    </div>
  );
}
