import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../utils/constans';

const VideoCard = ({video: { id: { videoId }, snippet }}) => {
  // console.log(videoId, snippet)
  return (
    <Card sx={{width: { md: '320px', xs: '100%'}, boxShadow: 'none', borderRadius: 'none'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}/>
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography sx={{fontSize: '14px'}} variant='subtitle1' fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight="bold" color="gray" sx={{fontSize: '10px'}}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: '#00BFFF', ml: '5px' }}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard