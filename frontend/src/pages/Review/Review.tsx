import { api } from "@/services";
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { AxiosError } from "axios";
import { useEffect, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

type DocBlocks = {
  id: string;
  type: string;
  text: string;
}

function Review() {
  const [docBlocks, setDocBlocks] = useState<DocBlocks[]>([])
  // const { id } = useParams();

  useEffect(() => {
    async function loadDocBlocks() {
      try {
        // const response = await api.get(`/doc/${id}`)
        const response = {data: {
          docs: [
            { id: 'testString1', type: 'h1', text: 'testHeading1'},
            { id: 'testString2', type: 'h2', text: 'testSubHeading1'},
            { id: 'testString3', type: 'p', text: 'test text for a longform thing'},
            { id: 'testString4', type: 'h2', text: 'testSubHeading2'},
            { id: 'testString5', type: 'p', text: 'Some more test text for another thing'},
          ]
        }};
        const docs = response?.data?.docs || []
        setDocBlocks(docs)
      } catch (error) {
        const err = error as AxiosError
        return err
      }
    }
    loadDocBlocks()
  }, [])

  const { control, reset, handleSubmit } = useForm({
    defaultValues: useMemo(() => {
        let docSelects: string[] = [], docTextfields: string[] = [];
        if (docBlocks.length > 0) {
          docBlocks.forEach((doc) => {
            docSelects.push(doc.type);
            docTextfields.push(doc.text);
          });
          console.log('docSelects', docSelects)
          console.log('docTextfields', docTextfields)
        }
        return {
          selects: docSelects,
          textfields: docTextfields
        };
    }, [docBlocks])
  });

  useEffect(() => {
    reset();
  }, [docBlocks]);

  const onSubmit = data => {
      console.log(data);
  };

  return (
    <Container sx={{flexGrow: 1, display: "flex", marginTop: 4}}>
      <form onSubmit={handleSubmit(onSubmit)}>
            {docBlocks.map((_, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <FormControl sx={{minWidth: '200px'}}>
                      <InputLabel id={`select-label-${index}`}>Option</InputLabel>
                      <Controller
                          name={`selects[${index}]`}
                          control={control}
                          render={({ field }) => (
                              <Select {...field} labelId={`select-label-${index}`} label="Option">
                                  <MenuItem value="h1">Section Header</MenuItem>
                                  <MenuItem value="h2">Subsection Header</MenuItem>
                                  <MenuItem value="p">Narrative Text</MenuItem>
                              </Select>
                          )}
                      />
                  </FormControl>
                  <Controller
                      name={`textfields[${index}]`}
                      control={control}
                      render={({ field }) => (
                          <TextField {...field} multiline fullWidth minRows={3} label="Your Text" />
                      )}
                  />
                  <Button variant="outlined" color="error" onClick={() => console.log('Button clicked!')}>Delete</Button>
              </Box>
            ))}
            <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 4}}>
              <Button type="submit" variant="contained" color="primary">Submit Form</Button>
            </Box>
        </form>
    </Container>
  );
}

export default Review
