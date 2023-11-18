import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from "./";
import Loader from "./Loader";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
    >
      {videos.map((video) => {
        return (
          <Box key={video.id.videoId} sx={{ margin: "0" }} className="video">
            {video.id.videoId && <VideoCard video={video} />}
            {video.id.channelId && <ChannelCard channel={video} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
