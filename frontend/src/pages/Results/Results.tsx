import { CenterFocusStrong } from "@mui/icons-material";
import { Box, Container, TextField, Autocomplete, styled, Button, Divider, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function Results() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Box component="section" sx={{
        backgroundImage: `url(${"building-background.png"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        minHeight: '400px',
        paddingTop: '15px'
      }}>
        <Container maxWidth="lg" sx={{flexGrow: 1}}>
          <Typography component="h1" sx={{
            fontFamily: 'Montserrat',
            fontSize: '32px',
            lineHeight: '48px',
            fontWeight: 500,
            color: '#323743FF'
          }}><Typography component="span" sx={{fontFamily: 'Montserrat', fontSize: '32px', lineHeight: '48px', fontWeight: 700}}>City of Springfield</Typography> Code Clarifier</Typography>
          <Typography component="h2" sx={{
            fontFamily: 'Montserrat',
            fontSize: '32px',
            lineHeight: '48px',
            fontWeight: 500,
            color: '#5068E2FF',
            textAlign: 'center',
            marginTop: '40px'
          }}>How can we help?</Typography>
          <Box component="form" sx={{
            position: "relative",
            display: 'block',
            padding: '20px 0',
            width: '100%'
          }}>
            <TextField
              id="search-bar"
              className="text"
              onInput={(e) => {
                setSearchQuery(e.target.value);
              }}
              label="Enter your question here"
              placeholder="Ex: What restrictions exist for building a bathroom in a basement?"
              size="small"
              fullWidth
              sx={{background: 'white', width: '100%', display: 'block'}}
            />
            <IconButton type="submit" aria-label="search" sx={{display: 'block', position: 'absolute', right: 0, top: '20px'}}>
              <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
          </Box>
          <Box component="div" sx={{textAlign: 'center'}}>
              <Typography 
                component="a"
                href="/codes"
                sx={{fontFamily: 'Roboto', fontSize: '24px', lineHeight: '36px', fontWeight: 400, color: '#379AE6FF'}}
              >
                Or go straight to the city codes
              </Typography>
          </Box>
          <Box component="div" sx={{textAlign: 'center', marginTop: '30px'}}>
              <Typography 
                component="p"
                sx={{fontFamily: 'Roboto', fontSize: '16px', lineHeight: '26px', fontWeight: 400, color: '#5068E2FF'}}
              >
                Work at a municpality and want to upload your codes?
              </Typography>
              <Typography 
                component="a"
                href="/upload"
                sx={{fontFamily: 'Roboto', fontSize: '16px', lineHeight: '26px', fontWeight: 700, color: '#5068E2FF'}}
              >
                Get started here
              </Typography>
          </Box>
        </Container>
      </Box>
      <Box component="section" sx={{margin: '20px 0'}}>
        <Container maxWidth="lg" sx={{flexGrow: 1, display: 'flex', flexDirection: 'row'}}>
          <Box component="div" id="previous-conversations" sx={{display: 'inline-flex', flexDirection: 'column', width: '30%', borderRight: '1px solid #BDC1CAFF', paddingRight: '20px'}}>
            <Typography component="h3" sx={{fontFamily: 'Roboto', fontSize: '22px', lineHeight: '34px', fontWeight: 700, color: '#5068E2E3', marginBottom: '32px;'}}>Previous Conversations</Typography>
            <Typography component="h4" sx={{fontFamily: 'Roboto', fontSize: '16px', lineHeight: '26px', fontWeight: 700, color: '#171A1FFF', marginBottom: '22px;', fontStyle: 'italic'}}>What are the heigh requirements for a second story addition?</Typography>
            <Typography component="h4" sx={{fontFamily: 'Roboto', fontSize: '16px', lineHeight: '26px', fontWeight: 400, color: '#171A1FFF', marginBottom: '22px;', fontStyle: 'italic'}}>What property line setback requirements exist for residential homes?</Typography>
            <Typography component="h4" sx={{fontFamily: 'Roboto', fontSize: '16px', lineHeight: '26px', fontWeight: 400, color: '#171A1FFF', marginBottom: '22px;', fontStyle: 'italic'}}>When upgrading an electrical panel, what grounding requirements are there?</Typography>
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
            <Box component="form" sx={{
              position: "relative",
              display: 'block',
              padding: '20px 0',
              width: '100%'
            }}>
              <TextField
                id="search-bar"
                className="text"
                onInput={(e) => {
                  setSearchQuery(e.target.value);
                }}
                label="Refine existing query"
                placeholder="Ex: What restrictions exist for building a bathroom in a basement?"
                size="small"
                fullWidth
                sx={{background: 'white', width: '100%', display: 'block'}}
              />
              <IconButton type="submit" aria-label="search" sx={{display: 'block', position: 'absolute', right: 0, top: '20px'}}>
                <SearchIcon style={{ fill: "blue" }} />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Results
