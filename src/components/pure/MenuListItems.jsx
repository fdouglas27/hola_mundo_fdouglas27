import { List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Home, Settings, Task } from '@mui/icons-material';

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<Home></Home>)
        case 'TASK':
            return (<Task></Task>)
        case 'SETTINGS':
            return (<Settings></Settings>)
        default:
            return (<Home></Home>);
    }
}

const MenuLIstItems = ({ list }) => {
    const history = useNavigate(); 

    const navigateTo = (path) => {
        history(path);
    }

    return (
        <List>

            {
                list.map(({text, path, icon}, index) => 

                    {
                        <ListItemButton key={index} onClick={ () => navigateTo(path) }>
                            <ListItemIcon>
                                {getIcon(icon)}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    }

                )}

        </List>
    )

}

export default MenuLIstItems; 