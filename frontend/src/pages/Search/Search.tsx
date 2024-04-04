import { Box, Button, Container, Divider, TextField, Typography } from "@mui/material";
import { useState } from "react";

function Metrics() {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', search);
    // Add your search logic here
  };

  return (
    <Container sx={{flexGrow: 1, display: "flex"}}>
      <Box my={4} display="flex" flexDirection="column">
        <Box sx={{ flexGrow: 1, wordWrap: 'break-word'}}>
          <Box sx={{  wordWrap: 'break-word' }}>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
            </Typography>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum officia soluta tenetur cupiditate quam obcaecati nisi dolorem ullam numquam temporibus accusamus tempore est corrupti totam laborum et, inventore sed perferendis?
            </Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <TextField
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Metrics
