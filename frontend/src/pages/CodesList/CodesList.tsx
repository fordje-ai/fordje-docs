import { Box, Container, styled, Button, Divider, Typography, IconButton } from "@mui/material";
import stateCodes from "@/utils/stateCodes.json"
import StateBlock from "./StateBlock";
function CodesList() {
  return (
    <>
      <Box component="section" sx={{margin: '20px 0'}}>
        <Container maxWidth="lg" sx={{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
          { Object.keys(stateCodes).map(state => (<StateBlock stateCode={state}/>))}
        </Container>
      </Box>
    </>
  )
}

export default CodesList
