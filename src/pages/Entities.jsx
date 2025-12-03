import { useEffect } from "react";
import { useStore } from "../store/store";
import CardList from "../components/CardList";

export default function Entities() {
  const { animes, page, lastPage, isLoading, error, fetchAnimes } = useStore();

  useEffect(() => {
    fetchAnimes(page);
  }, []);

  const handlePrev = () => {
    const prev = Math.max(1, page - 1);
    fetchAnimes(prev);
  };

  const handleNext = () => {
    if (lastPage) {
      if (page < lastPage) fetchAnimes(page + 1);
    } else {
      fetchAnimes(page + 1);
    }
  };

  return (
    <div>
      <h2 className="mb-3">listado de Animes</h2>

      {error && <div className="alert alert-danger">{error}</div>}
      {isLoading && <p>Cargando los animes</p>}

      {!isLoading && <CardList data={animes} />}

      <div className="d-flex align-items-center justify-content-between mt-4">
        <div>
          <button className="btn btn-outline-primary me-2" onClick={handlePrev} disabled={page === 1 || isLoading}>
            PREVIO
          </button>
          <button className="btn btn-primary" onClick={handleNext} disabled={isLoading || (lastPage && page >= lastPage)}>
            NEXT
          </button>
        </div>

        <div>
          <small>Página: {page}{ lastPage ? ` / ${lastPage}` : "" }</small>
        </div>
      </div>
    </div>
  );
}