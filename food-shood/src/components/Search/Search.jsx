import useDebounce from "../../utilities/hooks/useDebounce";
import "./Search.css";

export function Search(props) {
  const { filterListViaSearch } = props;
  const searchWithDebouce = useDebounce(filterListViaSearch, 500);

  return (
    <div className="search-container">
      <div className="search-box">
        <span className="search-icon">🔍</span>

        <input
          className="search-input"
          placeholder="Search for restaurants, cuisines..."
          onChange={(e) => {
            searchWithDebouce(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
