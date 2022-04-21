import { Container, Typography, } from '@mui/material';
import { makeStyles} from '@mui/styles';
import BANNERIMG from '../images/banner2.jpg';
import React from 'react';
import Carousel from './Carousel';

const Banner = () => {
    const useStyles = makeStyles(() => ({
        banner: {
            backgroundImage: '',
        },
        bannerContent: {
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 25,
            justifyContent: 'space-around'
        },
        tagLine: {
            display: 'flex',
            height: '40%',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.banner}>
            <img src={BANNERIMG} width="100%" alt="banner" style={{position: 'absolute'}}/>
            <Container className={classes.bannerContent}>
                <div className={classes.tagLine}>
                    <Typography 
                    variant='h2'
                    style={{
                        fontWeight: "bold",
                        marginBottom: 15,
                        fontFamily: "Montserrat",
                        zIndex: 10,
                        position: 'relative',
                        
                    }}>
                        Crypto Hunter
                    </Typography>
                    <Typography 
                    variant='subtitle2'
                    style={{
                        color: 'darkgrey',
                        textTransform: 'capitalize',
                        fontFamily: "Montserrat",
                        zIndex: 10,
                        position: 'relative',
                        
                    }}>
                        Get all the info regarding your favorite Crypto Currency!
                    </Typography>
                </div>
                <Carousel />
            </Container>
        </div>
    );
};

export default Banner;