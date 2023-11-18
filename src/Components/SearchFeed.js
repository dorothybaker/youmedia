import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { Videos } from "./";
import { fetchFromApi } from "../utils/FetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={1} sx={{ minHeighteight: "90vh" }}>
      <Typography
        variant="h4"
        mb={2}
        sx={{ color: "white", fontFamily: "Playfair Display" }}
      >
        Search Results for: <span style={{ color: "red" }}>{searchTerm}</span>
      </Typography>

      <Box>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
