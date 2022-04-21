import { useNavigate } from 'react-router-dom';
import { AppBar, Container, createTheme, MenuItem, Select, Toolbar, Typography, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CryptoState } from '../CryptoContext';


const Header = () => {
    const { currency, setCurrency } = CryptoState();
    const navigate = useNavigate();
    const useStyles = makeStyles(() => ({
        title: {
            flex: 1,
            color: "gold",
            fontFamily: "Monsterrat",
            fontWeight: "bold",
            cursor: "pointer"
        }
    }));

    const classes = useStyles();
    const darkTheme = createTheme({
        palette:{
            primary: {
                main: "#fff",
            },
            type: "dark",
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            <Container>
                <Toolbar>
                    <Typography 
                        className={classes.title} 
                        onClick={() => {
                        navigate('/')
                    }}>Crypto Hunter</Typography>
                    <Select
                        variant='outlined'
                        style={{
                            width: 100,
                            height: 40,
                            marginRight: 15,
                        }}
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)} 
                        >
                        <MenuItem value={'USD'}>USD</MenuItem>
                        <MenuItem value={'ENG'}>ENG</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
    );
};

export default Header;