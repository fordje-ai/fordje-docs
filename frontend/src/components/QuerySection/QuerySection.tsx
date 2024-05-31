import { Box, Container, IconButton, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function QuerySection() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
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
              setSearchQuery('test');
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
  )
}

export default QuerySection;