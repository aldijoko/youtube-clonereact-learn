import { Stack, Box } from "@mui/material"
import { VideoCard, ChannelCard} from "./"

const Videos = ({ videos, direction }) => {
    if(!videos) return null
    return (
        <Stack
            sx={{mx: 2}}
            direction={direction || "row"}
            flexWrap="wrap"
            justifyContent="start"
            gap={3}>
                {videos.map((video, idx) => (
                    <Box key={idx}>
                        {video.id.videoId && <VideoCard video={video} />}
                        {video.id.channelId && <ChannelCard channelDetail={video} />}
                    </Box>
                ))}
        </Stack>
    )
}

export default Videos