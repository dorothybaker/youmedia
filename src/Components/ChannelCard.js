import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ChannelCard = ({ channel, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        width: "320px",
        marginTop,
      }}
    >
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <CardMedia
            image={channel?.snippet?.thumbnails?.high?.url}
            alt={channel?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "150px",
              width: "150px",
              display: "block",
              mx: "auto",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6" fontFamily="Playfair Display">
            {channel?.snippet?.title}
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography fontFamily="Playfair Display">
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}{" "}
              subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
