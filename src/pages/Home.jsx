import { useEffect } from "react";
import { useStore } from "../store/store";
import CardList from "../components/CardList";

export default function Home(){
    const {animes, fetchAnimes, isLoading} = useStore();

      useEffect(() => {
    fetchAnimes(1);
        }, []);

         return (
    <div>
      <div className="text-center mb-4">
        <h1 className="display-6">explora animes</h1>
        <p className="lead">grid con datos desde la API de Jikan</p>
        <img
          src="https://i.imgur.com/5QfT5sQ.png"
          alt="anime hero"
          style={{ maxWidth: 420 }}
          className="img-fluid rounded"
        />
      </div>

      <h5 className="mb-3">Selección (6 elementos)</h5>

      {isLoading ? <p>Cargando....</p> : <CardList data={animes.slice(0, 6)} />}
    </div>
  );
}

        

