import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { Paper } from '@mui/material';

function Footer() {
  return (
    <Paper sx={{
      marginTop: '20px',
      width: '100%'
    }} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
          <img src="logo-small.png" />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            &copy; 2024 Fordje, Inc.
          </Typography>
          <Typography variant="caption" color="initial" sx={{margin: '0 10px'}}>
            &bull;
          </Typography>
          <Typography variant="caption" color="initial">
            Privacy Policy
          </Typography>
          <Typography variant="caption" color="initial" sx={{margin: '0 10px'}}>
            &bull;
          </Typography>
          <Typography variant="caption" color="initial">
            Terms
          </Typography>
          <Typography variant="caption" color="initial" sx={{margin: '0 10px'}}>
            &bull;
          </Typography>
          <Typography variant="caption" color="initial">
            Sitemap &bull;
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}

export default Footer
