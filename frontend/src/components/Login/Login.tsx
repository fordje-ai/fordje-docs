import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: "center",
          display: "flex",
          my:1
        }}
      >
        <Button component="label"
          onClick={handleLogin}
          role={undefined}
          variant="contained"
          tabIndex={-1}
          sx={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.common.white,
            marginBottom: '.5rem'
          }}
        >
          Login
        </Button>
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
          Don't have an account and want to save your city's codes? <Link href="#" variant="body2" sx={{color: (theme) => theme.palette.primary.dark, fontWeight: 700}}>Sign Up</Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Login
