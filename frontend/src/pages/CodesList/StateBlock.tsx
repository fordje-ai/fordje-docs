import stateCodes from "@/utils/stateCodes.json"
import { Box, Typography } from "@mui/material";

const availableCodeDocs = {
  'AL': [
    'City of Tuscaloosa',
    'City of Huntsville',
    'Town of Addison',
    'Marshall County',
    'Henry County'
  ],
  'AZ': [
    'City of Phoenix',
    'City of Glendale'
  ],
  'CA': [
    'City of Oakland',
    'Santa Rosa County',
    'City of San Francisco',
    'Town of San Mateo',
    'City of San Diego'
  ],
  'GA': [
    'City of Atlanta',
    'City of Macon',
    'Fulton County',
    'DeKalb County',
    'City of Augusta'
  ]
}

function StateBlock({stateCode}) {
  return (
    <Box component="div" id={stateCode} sx={{marginBottom: '20px', paddingBottom: '10px', borderBottom: '1px solid black'}}>
      <Typography component="h2" sx={{
        fontFamily: 'Montserrat',
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: 500,
        color: '#5068E2FF'
      }}>{stateCodes[stateCode]}</Typography>
      <Box component="div" sx={{display: 'flex', flexWrap: "wrap"}}>
        { availableCodeDocs[stateCode] && availableCodeDocs[stateCode].map(codeDoc => (
          <Box component="div" sx={{flex: "0 0 25%", margin: '5px 0'}}>
            <Typography component="a" href="#" sx={{fontFamily: 'Roboto', fontSize: '16px', lineHeight: '22px', fontWeight: 400, color: '#171A1FFF'}}>{codeDoc}</Typography>
          </Box>
        )) }
      </Box>
    </Box>
  )
}

export default StateBlock;