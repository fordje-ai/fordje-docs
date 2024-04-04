import { Box, Container, TextField, Autocomplete, styled, Button, Divider } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import stateCodes from '@/utils/stateCodes.json';
import { useState } from "react";

const stateCodeOptions = Object.keys(stateCodes).map(key => ({
  label: stateCodes[key] as string,
  value: key
}));

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
        <h1>Let's upload your code doc!</h1>
      </Box>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        justifyContent="center"
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
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            Upload file
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
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            color="secondary"
          >
            Submit
            <VisuallyHiddenInput type="submit" />
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
