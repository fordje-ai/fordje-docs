import { api } from "@/services";
import { Box, Button, Container, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { CodeDocBlock, flattenCodeDoc, reshapeCodeDoc } from "@/utils/transformCodeDoc";

function Review() {
  const [docBlocks, setDocBlocks] = useState<CodeDocBlock[]>([])
  // const { id } = useParams();
  const testCodeDoc = {
    id: 1,
    content: [
      {
        id: '86Rf07',
        type: "h1",
        text: "header 1",
        children: [
          {
            id: 'XRKUdQ',
            type: 'p',
            text: 'p1',
            path: '86Rf07'
          },
          {
            id: '0liwDd',
            type: "h2", 
            text: 'header 2', 
            path: '86Rf07',
            children: [
              {
                id: 'sPW92uE',
                type: "h3",
                text: 'header 3',
                path: '86Rf07.0liwDd',
                children: [
                  { id: 'QAe51FC', type: 'p', text: 'text 2', path: '86Rf07.0liwDd.sPW92uE' },
                  { id: 'CsPW92u', type: 'p', text: 'text 3', path: '86Rf07.0liwDd.sPW92uE' },
                  { id: '92uEOyq', type: 'p', text: 'text 4', path: '86Rf07.0liwDd.sPW92uE' },
                  { id: '6Sp8YzV', type: 'p', text: 'text 5', path: '86Rf07.0liwDd.sPW92uE' },
                ]
              }
            ]
          },
          {
            id: 'YzVTmnU',
            type: "h2",
            text: 'header 4',
            path: '86Rf07',
            children: [
              { id: 'iwDdHXL', type: 'p', text: 'text 6', path: '86Rf07.YzVTmnU' },
              { id: 'jZrfxNh', type: 'p', text: 'text 7', path: '86Rf07.YzVTmnU' },
              { id: 'dHXLajZ', type: 'p', text: 'text 8', path: '86Rf07.YzVTmnU' },
            ]
          },
          {
            id: 'Bg6Sp8Yz',
            type: "h2",
            text: 'header 5',
            path: '86Rf07'
          },
          {
            id: 'yq4Bg6S',
            type: "h2",
            text: 'header 6',
            path: '86Rf07',
          },
        ]
      },
      {
        id: 'test2',
        type: "h1",
        text: "header 1",
        children: [
          {
            id: 'XRKUdQ',
            type: 'p',
            text: 'p1',
            path: 'test2'
          },
          {
            id: '0liwDd',
            type: "h2", 
            text: 'header 2', 
            path: 'test2',
            children: [
              {
                id: 'sPW92uE',
                type: "h3",
                text: 'header 3',
                path: 'test2.0liwDd',
                children: [
                  { id: 'QAe51FC', type: 'p', text: 'text 2', path: 'test2.0liwDd.sPW92uE' },
                  { id: 'CsPW92u', type: 'p', text: 'text 3', path: 'test2.0liwDd.sPW92uE' },
                  { id: '92uEOyq', type: 'p', text: 'text 4', path: 'test2.0liwDd.sPW92uE' },
                  { id: '6Sp8YzV', type: 'p', text: 'text 5', path: 'test2.0liwDd.sPW92uE' },
                ]
              }
            ]
          },
          {
            id: 'YzVTmnU',
            type: "h2",
            text: 'header 4',
            path: 'test2',
            children: [
              { id: 'iwDdHXL', type: 'p', text: 'text 6', path: 'test2.YzVTmnU' },
              { id: 'jZrfxNh', type: 'p', text: 'text 7', path: 'test2.YzVTmnU' },
              { id: 'dHXLajZ', type: 'p', text: 'text 8', path: 'test2.YzVTmnU' },
            ]
          },
          {
            id: 'Bg6Sp8Yz',
            type: "h2",
            text: 'header 5',
            path: 'test2'
          },
          {
            id: 'yq4Bg6S',
            type: "h2",
            text: 'header 6',
            path: 'test2',
          },
        ]
      },
    ],
  };
  useEffect(() => {
    async function loadDocBlocks() {
      try {
        // const response = await api.get(`/doc/${id}`)
        
        const docs = flattenCodeDoc(testCodeDoc.content) || []
        setDocBlocks(docs)
      } catch (error) {
        const err = error as AxiosError
        return err
      }
    }
    loadDocBlocks()
  }, [setDocBlocks])

  const { control, reset, handleSubmit } = useForm();

  const onSubmit = data => {
      // console.log(docBlocks);
      console.log(reshapeCodeDoc(docBlocks));
  };

  const addDocBlock = () => {
    setDocBlocks([...docBlocks, {id: "test", type: "h1", text: ""}]);
    reset();
  };

  const removeDocBlock = (index) => {
    console.log('delete index', index);
    if (index > -1) {
      setDocBlocks(prevItems => prevItems.filter((_, i) => i !== index)); 
    }
    reset();
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
