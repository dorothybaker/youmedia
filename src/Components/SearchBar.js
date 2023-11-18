import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }

    inputRef.current.blur();
  }

  const inputRef = useRef(null);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 5,
        border: "1px solid #e3e3e3",
        pl: 1,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        ref={inputRef}
        placeholder="Search YouMedia..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: "5px", color: "red" }}
        onClick={scrollToTop}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
