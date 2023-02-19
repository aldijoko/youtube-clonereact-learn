import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player"
import { Stack, Box, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { Videos } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI"

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then(data => {
       setVideoDetail(data.items[0])
      })

    fetchFromAPI(`search?relatedToVideoId=${id}&part=snippet&order=date`)
      .then(data => {
        setVideos(data.items)
      })
  }, [id])

  if(!videoDetail?.snippet) return <div>Loading...</div>

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer 
              controls 
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player" />
              <Typography color='#fff' variant="h5" fontWeight="700" p={2}>
                {title}
              </Typography>
              <Stack direction="row" justifyContent="space-between" sx={{
                color: '#fff',
              }} py={1} px={2}>
                <Link to={`/channel/${channelId}`}>
                  <Typography color="#fff" variant={{ sm: 'subtitle1', md: 'h6'}} >
                    {channelTitle}
                    <CheckCircle sx={{ fontSize: 12, color: '#00BFFF', ml: '8px' }}/>
                  </Typography>
                </Link>
                <Stack direction="row" alignItems="center" gap="15px">
                  <Typography variant="body1" sx={{opacity: 0.6}}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{opacity: 0.6}}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md: 1, xs: 5}} justifyContent="center" alignItems="center">
        <Videos videos={videos} direction="column" />
      </Box>
      </Stack>

      
    </Box>
  )
}
export default VideoDetail