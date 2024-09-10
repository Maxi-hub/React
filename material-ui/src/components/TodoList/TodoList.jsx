import * as React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { List, ListItem, ListItemText } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import './TodoList-style.css';


// где изменить настройки css для компонентов material ui
export const TodoList = () => {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);
    const [checked, setChecked] = React.useState([0]);

    const updateText = (e) => {
        setText(e.target.value);
    }

    const updateList = () => {
        if (text.trim() === '') {
            return;
        }

        const newList = [...list, text];
        setList(newList);
        setText('');
    }

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    }

    const deleteText = (value) => {
        const newList = list.filter(item => item !== value);
        setList(newList);
    }

    return (
        <div className='todoList-box'>
            <Box sx={{ width: 500, maxWidth: '100%' }}>
                <TextField fullWidth id="outlined-basic" variant="outlined" placeholder='Введите задачу' onChange={updateText} />
            </Box>
            <Button color="secondary" onClick={updateList}>Добавить задачу в список</Button>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {list.map(value => {
                    const labelId = `checkbox-list-label-${value}`;
                    return (
                        <ListItem
                            key={value}
                            secondaryAction={
                                <IconButton aria-label="delete" onClick={() => deleteText(value)}>
                                    <DeleteIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={value} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    )
}
