import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { CheckCircle } from "@mui/icons-material";
import { Typography, Box, Stack } from "@mui/material";

import Videos from "./Videos";
import { fetchFromApi } from "../utils/FetchFromAPI";
import Loader from "./Loader";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  const handleVideoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!videoDetail) return <Loader />;
  return (
    <Box minHeight="95vh" p={1}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <div onClick={handleVideoClick}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
                playing={true}
                onPlay={handleVideoClick}
              />
            </div>
            <Typography
              color="white"
              variant="h6"
              px={1}
              fontFamily="Playfair Display"
            >
              {videoDetail.snippet.title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "white" }}
              p={2}
              className="details"
            >
              <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                <p
                  style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>{videoDetail.snippet.channelTitle}</span>
                  <CheckCircle
                    sx={{ color: "gray", fontSize: "14px", marginLeft: "5px" }}
                  />
                </p>
              </Link>
              <Stack direction="row" gap={2} pb={1}>
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.8 }}
                  fontFamily="Playfair Display"
                >
                  {parseInt(videoDetail.statistics.viewCount).toLocaleString()}{" "}
                  views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.8 }}
                  fontFamily="Playfair Display"
                >
                  {parseInt(videoDetail.statistics.likeCount).toLocaleString()}{" "}
                  likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box p={1} justifyContent="center" alignItems="center">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
