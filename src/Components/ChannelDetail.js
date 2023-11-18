import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/FetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromApi(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh" pb={3}>
      <Box>
        <div
          style={{
            background: "linear-gradient(90deg, red , #111)",
            zIndex: 10,
            height: "250px",
          }}
        />
        <ChannelCard channel={channelDetail} marginTop={"-100px"} />
      </Box>
      <Box display="flex" p={1} justifyContent="center">
        <Box>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
