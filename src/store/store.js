import { create } from "zustand";

export const useStore = create((set, get) => ({
  animes: [],           
  page: 1,             
  lastPage: null,       
  isLoading: false,
  error: null,

  fetchAnimes: async (page = 1) => {
    set({ isLoading: true, error: null });
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`);
      const json = await res.json();

      set({
        animes: json.data || [],
        page,
        lastPage: json.pagination?.last_visible_page || null,
        isLoading: false,
      });
    } catch (err) {
      set({ error: err.message || "Error al obtener animes", isLoading: false });
    }
  }
}));

