import { Box, Container, TextField, Autocomplete, styled, Button, Divider, Typography } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import stateCodes from '@/utils/stateCodes.json';
import { useState } from "react";
import Login from "@/components/Login/Login";

type StateCodeDisplay = {
  label: string;
  value: string;
}

const stateCodeOptions = Object.keys(stateCodes).map((key): StateCodeDisplay => ({
  label: stateCodes[key] as string,
  value: key
})) as Array<StateCodeDisplay>;

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function Home() {
  const [fileName, setFileName] = useState();

  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0]; // Get the first file
    setFileName(file ? file.name : ''); // Update the state with the file name or a default message
  };
  return (
    <Container maxWidth="md" sx={{flexGrow: 1}}>
      <Box textAlign="center">
        <Typography variant="h1" sx={{
          fontFamily: 'Montserrat',
          fontWeight: '700',
          fontSize: '40px',
          lineHeight: '56px',
          margin: '30px 0'
          }}>Welcome to the Code Clarifier</Typography>
        <Typography variant="body1" sx={{
          fontFamily: 'Roboto',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '30px'
          }}>Quickly allow your city departments and citizens to search and understand city codes and regulations, avoiding cross-department confusion and giving citizens an easy tool to grasp project needs.</Typography>
        <Typography variant="h2" sx={{
          fontFamily: 'Montserrat',
          fontWeight: '700',
          fontSize: '32px',
          lineHeight: '48px',
          margin: '30px 0'
          }}>Get started!</Typography>
        <Typography variant="body1" sx={{
          fontFamily: 'Roboto',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '30px',
          marginBottom: '50px',
          color: (theme) => theme.palette.grey[600]
          }}>Simply upload a file of your city's codes and regulations. We'll create a searchable experience for your city and its citizens. Once uploaded, we will ask you for your email address.</Typography>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        justifyContent="center"
        sx={{
          maxWidth: '70%',
          margin: '30px auto 80px',
          border: '1px solid',
          borderColor: (theme) => theme.palette.grey[400],
          padding: '2em 1em',
          boxShadow: '0px 2px 5px #171a1f66, 0px 0px 2px #171a1f66',
          borderRadius: '3px'
        }}
      >
        <Box sx={{ '& > :not(style)': { m: 1, flexGrow: 1, display: 'flex', flexWrap: 'wrap' }, display: 'flex', flexWrap: 'wrap', marginBottom: '2ch' }}>
          <Autocomplete
            disablePortal
            id="state-code-box"
            options={stateCodeOptions}
            renderInput={(params) => <TextField {...params} label="State" />}
          />
          <TextField id="outlined-basic" label="City Name" variant="outlined" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {fileName && (
            <p>Selected file: {fileName}</p>
          )}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: (theme) => theme.palette.common.white }}
          >
            Select file
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
          </Button>
        </Box>
        <Divider sx={{marginBlock: '2ch'}} />
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            sx={{ display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: (theme) => theme.palette.primary.dark,
            color: (theme) => theme.palette.common.white
          }}
          >
            Upload
            <VisuallyHiddenInput type="submit" />
          </Button>
        </Box>
      </Box>
      <Login />
    </Container>
  )
}

export default Home
