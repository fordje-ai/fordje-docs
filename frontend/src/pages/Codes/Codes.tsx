import { CenterFocusStrong } from "@mui/icons-material";
import { Box, Container, TextField, Autocomplete, styled, Button, Divider, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { QuerySection } from "@/components/QuerySection";
import CodeTOC from "./CodeTOC";

function Codes() {
  return (
    <>
      <QuerySection />
      <Box component="section" sx={{margin: '20px 0'}}>
        <Container maxWidth="lg" sx={{flexGrow: 1, display: 'flex', flexDirection: 'row'}}>
          <Box component="div" id="previous-conversations" sx={{display: 'inline-flex', flexDirection: 'column', width: '30%', borderRight: '1px solid #BDC1CAFF', paddingRight: '20px'}}>
            <CodeTOC />
          </Box>
          <Box component="div" id="query-results" sx={{display: 'inline-flex', flexDirection: 'column', width: '70%', paddingLeft: '20px'}}>
            <Typography component="h2" sx={{
            fontFamily: 'Montserrat',
            fontSize: '24px',
            lineHeight: '36px',
            fontWeight: 700,
            color: '#5068E2FF',
            marginTop: '16px'
          }}>Query: What are the height requirements for a second story addition</Typography>
            <Typography component="h3" sx={{
              fontFamily: 'Montserrat',
              fontSize: '20px',
              lineHeight: '32px',
              fontWeight: 700,
              color: '#5068E2FF',
              marginTop: '24px'
            }}>Summary</Typography>
            <Typography component="p">The height, in feet, and the number of stories of a building shall be determined based on the type of construction, occupancy classification and whether there is an automatic sprinkler system installed throughout the building. The allowable building height in grade plane must follow Table 504.3 and Table 504.4 requirements.</Typography>
            <Typography component="h3" sx={{
              fontFamily: 'Montserrat',
              fontSize: '20px',
              lineHeight: '32px',
              fontWeight: 700,
              color: '#5068E2FF',
              marginTop: '24px'
            }}>Codes</Typography>
            <Typography component="p" sx={{fontFamily: 'Roboto', fontSize: '16px', lineHeight: '26px', fontWeight: 400, color: '#171A1FFF', marginBottom: '10px'}}>For Height Requirments, it looks like you need to abide by the codes below. Learn more here</Typography>
            <Typography component="a" href="#" sx={{fontFamily: 'Roboto', fontSize: '20px', lineHeight: '32px', fontWeight: 300, color: '#5068E2FF'}}>IBC 504.3: Height in Feet</Typography>
            <Typography component="a" href="#" sx={{fontFamily: 'Roboto', fontSize: '20px', lineHeight: '32px', fontWeight: 300, color: '#5068E2FF', marginBottom: '16px'}}>IBC 504.4: Number of Stories</Typography>
            <Typography component="p" sx={{fontFamily: 'Roboto', fontSize: '16px', lineHeight: '26px', fontWeight: 400, color: '#171A1FFF', marginBottom: '10px'}}>For additional building requirements that may also apply to your project, you'll need to follow a few different codes. Those include verifying zoning restrictions, abiding by tree preservation and planting requirements, and complete professional engineering calculations for the new addition.</Typography>
            <Typography component="a" href="#" sx={{fontFamily: 'Roboto', fontSize: '20px', lineHeight: '32px', fontWeight: 300, color: '#5068E2FF'}}>Title 33.920, Descriptions of Use Categories</Typography>
            <Typography component="a" href="#" sx={{fontFamily: 'Roboto', fontSize: '20px', lineHeight: '32px', fontWeight: 300, color: '#5068E2FF'}}>Title 11, Tree Code</Typography>
            <Typography component="a" href="#" sx={{fontFamily: 'Roboto', fontSize: '20px', lineHeight: '32px', fontWeight: 300, color: '#5068E2FF'}}>Title 24.55.210, Major Residential Alteration and Addition</Typography>
            <Typography component="p" sx={{fontFamily: 'Roboto', fontSize: '16px', lineHeight: '22px', fontWeight: 700, color: '#171A1FFF', marginTop: '20px', marginBottom: '20px'}}>With this information, you will be able to accurately meet permitting requirements to build a second story addition. Any further refinements?</Typography>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Codes
