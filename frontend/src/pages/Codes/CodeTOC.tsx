import React, { useState } from 'react';
import {
  List,
  ListItemText,
  Collapse,
  ListItemButton
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const CodeTOC = () => {
  const [open, setOpen] = useState({});

  const handleClick = (index) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [index]: !prevOpen[index],
    }));
  };

  const renderNestedList = (items, level = 0) => {
    return items.map((item, index) => (
      <React.Fragment key={`${item.text}-${level}-${index}`}>
        <ListItemButton onClick={() => handleClick(`${level}-${index}`)} sx={{pl: level*2}}>
          <ListItemText primary={item.text} />
          {item.children && (open[`${level}-${index}`] ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        {item.children && (
          <Collapse in={open[`${level}-${index}`]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderNestedList(item.children, level + 1)}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    ));
  };

  const nestedItems = [
    {
      text: 'Title 1',
      children: [
        {
          text: 'Section 1',
          children: [
            {
              text: 'Section 1.01',
              children: [
                {text: 'Section 1.01.01'},
                {text: 'Section 1.01.02'},
                {text: 'Section 1.01.02'},
              ]
            },
            {
              text: 'Section 1.02',
              children: [
                {text: 'Section 1.02.01'},
                {text: 'Section 1.02.02'},
              ]
            },
            {
              text: 'Section 1.03',
              children: [
                {text: 'Section 1.03.01'},
                {text: 'Section 1.03.02'},
              ]
            },
          ],
        },
        {
          text: 'Section 2',
          children: [
            {
              text: 'Section 2.01',
              children: [
                {text: 'Section 2.01.01'},
                {text: 'Section 2.01.02'},
                {text: 'Section 2.01.03'},
              ]
            },
            {
              text: 'Section 2.02',
              children: [
                {text: 'Section 2.02.01'},
                {text: 'Section 2.02.02'},
              ]
            },
            {
              text: 'Section 2.03',
              children: [
                {text: 'Section 2.03.01'},
                {text: 'Section 2.03.02'},
                {text: 'Section 2.03.03'},
                {text: 'Section 2.03.04'},
              ]
            },
          ],
        },
      ],
    },
    {
      text: 'Title 2',
      children: [
        {
          text: 'Section 1',
          children: [
            {
              text: 'Section 1.01',
              children: [
                {text: 'Section 1.01.01'},
                {text: 'Section 1.01.02'},
                {text: 'Section 1.01.03'},
                {text: 'Section 1.01.04'},
                {text: 'Section 1.01.05'},
                {text: 'Section 1.01.06'},
                {text: 'Section 1.01.07'},
              ]
            },
            {
              text: 'Section 1.02',
              children: [
                {text: 'Section 1.02.01'},
                {text: 'Section 1.02.02'},
                {text: 'Section 1.02.03'},
              ]
            },
            {
              text: 'Section 1.03',
              children: [
                {text: 'Section 1.03.01'},
                {text: 'Section 1.03.02'},
                {text: 'Section 1.03.03'},
                {text: 'Section 1.03.04'},
                {text: 'Section 1.03.05'},
              ]
            },
          ],
        },
        {
          text: 'Section 2',
          children: [
            {
              text: 'Section 2.01',
              children: [
                {text: 'Section 2.01.01'},
                {text: 'Section 2.01.02'},
                {text: 'Section 2.01.02'},
              ]
            },
            {
              text: 'Section 2.02',
              children: [
                {text: 'Section 2.02.01'},
                {text: 'Section 2.02.02'},
                {text: 'Section 2.02.03'},
                {text: 'Section 2.02.04'},
                {text: 'Section 2.02.05'},
                {text: 'Section 2.02.06'},
                {text: 'Section 2.02.07'},
                {text: 'Section 2.02.08'},
                {text: 'Section 2.02.09'},
                {text: 'Section 2.02.10'},
              ]
            },
            {
              text: 'Section 2.03',
              children: [
                {text: 'Section 2.03.01'},
                {text: 'Section 2.03.02'},
                {text: 'Section 2.03.03'},
                {text: 'Section 2.03.04'},
              ]
            },
            {
              text: 'Section 2.04',
              children: [
                {text: 'Section 2.04.01'},
                {text: 'Section 2.04.02'},
                {text: 'Section 2.04.03'},
                {text: 'Section 2.04.04'},
              ]
            },
            {
              text: 'Section 2.05',
              children: [
                {text: 'Section 2.05.01'},
                {text: 'Section 2.05.02'},
              ]
            },
            {
              text: 'Section 2.06',
              children: [
                {text: 'Section 2.06.01'},
                {text: 'Section 2.06.02'},
                {text: 'Section 2.06.03'},
                {text: 'Section 2.06.04'},
                {text: 'Section 2.06.05'},
                {text: 'Section 2.06.06'},
                {text: 'Section 2.06.07'},
                {text: 'Section 2.06.08'},
                {text: 'Section 2.06.09'},
                {text: 'Section 2.06.10'},
                {text: 'Section 2.06.11'},
              ]
            },
          ],
        },
      ],
    },
  ];

  return <List>{renderNestedList(nestedItems)}</List>;
};

export default CodeTOC;