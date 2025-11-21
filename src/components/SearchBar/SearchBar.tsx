import styles from "./SearchBar.module.css";
import { toast } from "react-hot-toast";

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {

  const handleAction = (formData: FormData) => {
  const value = formData.get("query");
  const query = typeof value === "string" ? value.trim() : "";

  if (!query) {
    toast("Please enter your search query.");
    return;   
  }

  onSubmit(query); 
  return;            
};


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>

        <form className={styles.form} action={handleAction}>
          <input
            className={styles.input}
            type="text"
            name="query"
            placeholder="Search movies..."
            autoComplete="off"
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
