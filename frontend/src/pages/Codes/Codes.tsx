import { Box, Container, Typography } from "@mui/material";
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
            fontSize: '32px',
            lineHeight: '48px',
            fontWeight: 700,
            color: '#5068E2FF',
            marginTop: '16px'
          }}>Title 1</Typography>
            <Typography component="h3" sx={{
              fontFamily: 'Montserrat',
              fontSize: '20px',
              lineHeight: '32px',
              fontWeight: 700,
              color: '#5068E2FF',
              marginTop: '24px'
            }}>Section 1.01</Typography>
            <Typography component="p">Ipsum proident cillum do consequat ea ut incididunt nostrud ad consequat consequat dolore enim velit velit velit. Enim aliquip commodo nisi incididunt aliqua Lorem ut occaecat Lorem pariatur fugiat do reprehenderit consectetur quis velit Lorem. </Typography>
            <Typography component="h3" sx={{
              fontFamily: 'Montserrat',
              fontSize: '16px',
              lineHeight: '32px',
              fontWeight: 700,
              color: '#5068E2FF',
              marginTop: '24px'
            }}>Section 1.01.01</Typography>
            <Typography component="p" sx={{fontFamily: 'Roboto', fontSize: '16px', lineHeight: '26px', fontWeight: 400, color: '#171A1FFF', marginBottom: '10px'}}>Ipsum proident cillum do consequat ea ut incididunt nostrud ad consequat consequat dolore enim velit velit velit. Enim aliquip commodo nisi incididunt aliqua Lorem ut occaecat Lorem pariatur fugiat do reprehenderit consectetur quis velit Lorem. </Typography>
            <Typography component="h3" sx={{
              fontFamily: 'Montserrat',
              fontSize: '16px',
              lineHeight: '32px',
              fontWeight: 700,
              color: '#5068E2FF',
              marginTop: '24px'
            }}>Section 1.01.02</Typography>
            <Typography component="p" sx={{fontFamily: 'Roboto', fontSize: '16px', lineHeight: '26px', fontWeight: 400, color: '#171A1FFF', marginBottom: '10px'}}>Ipsum proident cillum do consequat ea ut incididunt nostrud ad consequat consequat dolore enim velit velit velit. Enim aliquip commodo nisi incididunt aliqua Lorem ut occaecat Lorem pariatur fugiat do reprehenderit consectetur quis velit Lorem. </Typography>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Codes
