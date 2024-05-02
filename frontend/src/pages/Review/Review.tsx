import { api } from "@/services";
import { Box, Button, Container, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { CodeDocBlock, flattenCodeDoc } from "@/utils/transformCodeDoc";

function Review() {
  const [docBlocks, setDocBlocks] = useState<CodeDocBlock[]>([])
  // const { id } = useParams();
  const testCodeDoc = {
    type: "h1",
    text: "header 1",
    children: [
      {
        type: 'p',
        text: 'p1'
      },
      {
        type: "h2", 
        text: 'header 2', 
        children: [
          {
            type: "h3",
            text: 'header 3',
            children: [
              { type: 'p', text: 'text 2' },
              { type: 'p', text: 'text 3' },
              { type: 'p', text: 'text 4' },
              { type: 'p', text: 'text 5' },
            ]
          }
        ]
      },
      {
        type: "h2",
        text: 'header 4',
        children: [
          { type: 'p', text: 'text 6' },
          { type: 'p', text: 'text 7' },
          { type: 'p', text: 'text 8' },
        ]
      },
      {
        type: "h2",
        text: 'header 5'
      },
      {
        type: "h2",
        text: 'header 6'
      },
    ]
  };
  useEffect(() => {
    async function loadDocBlocks() {
      try {
        // const response = await api.get(`/doc/${id}`)
        
        const docs = flattenCodeDoc(testCodeDoc) || []
        setDocBlocks(docs)
      } catch (error) {
        const err = error as AxiosError
        return err
      }
    }
    loadDocBlocks()
  }, [setDocBlocks])

  const { control, handleSubmit } = useForm();

  const onSubmit = data => {
      console.log(data);
  };

  const addDocBlock = () => {
    setDocBlocks([...docBlocks, {type: "h1", text: ""}]);
  };

  const removeDocBlock = (index) => {
    console.log('delete index', index);
    if (index > -1) {
      setDocBlocks(prevItems => prevItems.filter((_, i) => i !== index)); 
    }
  }

  return (
    <Container sx={{flexGrow: 1, display: "flex", marginTop: 4}}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{flexGrow:1, flexDirection: "column"}}>
            {docBlocks.map((data, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <FormControl sx={{minWidth: '200px'}}>
                      <InputLabel id={`select-label-${index}`}>Option</InputLabel>
                      <Controller
                          name={`selects.${index}`}
                          control={control}
                          defaultValue={data.type}
                          render={({ field }) => (
                              <Select {...field} labelId={`select-label-${index}`} label="Option">
                                  <MenuItem value="h1">Chapter Heading</MenuItem>
                                  <MenuItem value="h2">Section Heading</MenuItem>
                                  <MenuItem value="h3">Subsection Heading</MenuItem>
                                  <MenuItem value="h4">Amendment Heading</MenuItem>
                                  <MenuItem value="p">Narrative Text</MenuItem>
                              </Select>
                          )}
                      />
                  </FormControl>
                  <Controller
                      name={`textfields.${index}`}
                      control={control}
                      defaultValue={data.text}
                      render={({ field }) => (
                          <TextField {...field} multiline fullWidth minRows={5} label="Your Text" />
                      )}
                  />
                  <IconButton aria-label="delete" color="warning" onClick={() => removeDocBlock(index)}>
                    <ClearIcon />
                  </IconButton>
              </Box>
            ))}
            <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
              <IconButton aria-label="add" color="success" onClick={addDocBlock}>
                <AddCircleOutlineIcon />
              </IconButton>
            </Box>
            <Box component="hr" sx={{marginTop: 4, marginBottom: 4}} />
            <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
              <Button type="submit" variant="contained" color="primary">Submit Form</Button>
            </Box>
        </Box>
    </Container>
  );
}

export default Review
