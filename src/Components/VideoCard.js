import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
// const obj = {
//   "kind": "youtube#searchResult",
//   "id": {
//     "kind": "youtube#video",
//     "videoId": "hsCPJ6y9KRE"
//   },
//   "snippet": {
//     "publishedAt": "2023-11-15T14:30:09Z",
//     "channelId": "UCVRm2Ho8cL3lvWDyp2ayuFw",
//     "title": "The Sexiest Batman Alive, The Guy on the Chiefs, and A Kelce Duet | Ep 64",
//     "description": "92%ers we are back with another episode of New Heights presented by our friends at Experian and the all-new Experian Debit ...",
//     "thumbnails": {
//       "default": {
//         "url": "https://i.ytimg.com/vi/hsCPJ6y9KRE/default.jpg",
//         "width": 120,
//         "height": 90
//       },
//       "medium": {
//         "url": "https://i.ytimg.com/vi/hsCPJ6y9KRE/mqdefault.jpg",
//         "width": 320,
//         "height": 180
//       },
//       "high": {
//         "url": "https://i.ytimg.com/vi/hsCPJ6y9KRE/hqdefault.jpg",
//         "width": 480,
//         "height": 360
//       }
//     },
//     "channelTitle": "New Heights",
//     "liveBroadcastContent": "none",
//     "publishTime": "2023-11-15T14:30:09Z"
//   }
// }

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: "320px",
        boxShadow: "1px 1px 1px black",
        borderRadius: "2px",
      }}
    >
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          image={video.snippet?.thumbnails?.high?.url}
          alt={video.snippet?.title}
          sx={{ width: 320, height: 180 }}
        />
        <CardContent sx={{ background: "#1e1e1e", height: "100px" }}>
          <Link to={`/video/${video.id.videoId}`}>
            <Typography
              variant="subtitle1"
              color="#FFF"
              fontFamily="Playfair Display"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    video.snippet?.title.length > 60
                      ? video.snippet?.title.slice(0, 60) + "..."
                      : video.snippet?.title,
                }}
              ></span>
            </Typography>
          </Link>
          <Link to={`/channel/${video.snippet.channelId}`}>
            <Typography
              variant="subtitle2"
              color="gray"
              fontFamily="Playfair Display"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html:
                    video.snippet?.channelTitle.length > 29
                      ? video.snippet?.channelTitle.slice(0, 29) + "..."
                      : video.snippet?.channelTitle,
                }}
                style={{ color: "red" }}
              ></span>
              <span>
                {video.snippet?.publishTime
                  ? video.snippet?.publishTime.slice(0, 10)
                  : ""}
              </span>
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
