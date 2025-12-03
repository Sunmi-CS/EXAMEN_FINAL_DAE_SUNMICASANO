export default function Card({ item }) {
  const image = item.images?.jpg?.image_url || "";
  const title = item.title;
  const synopsis = item.synopsis || "No hay descripcion.";
  const genres = item.genres?.map(g => g.name).join(", ") || "—";

  return (
    <div className="card h-100">
      {image && <img src={image} className="card-img-top" alt={title} style={{height: 220, objectFit: "cover"}} />}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text mb-1"><small className="text-muted">{genres}</small></p>
        <p className="card-text" style={{flex: 1, overflow: "hidden", textOverflow: "ellipsis"}}>
          {synopsis.length > 180 ? synopsis.slice(0, 180) + "..." : synopsis}
        </p>
        <div className="mt-2">
          <button className="btn btn-sm btn-outline-primary">Ver</button>
        </div>
      </div>
    </div>
  );
}
