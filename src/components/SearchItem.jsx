import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Videos } from './'


const SearchItem = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()


  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items));
  }, [searchTerm])
  return (
    <Box sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white', mt: 1, mx: 2}}>
        Search Results for: <span style={{color: '#ff0000'}}>{searchTerm}</span> videos
      </Typography>
    <Videos videos={videos}/>
  </Box>
  )
}
export default SearchItem