import Image from 'next/image';
import { styled } from '@mui/material/styles';
import classes from './hobbies.module.css';
import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Project() {
    return (
        <section className={classes.hobbies}>
            <h2>Outside of my studies you can find me...</h2>
            <Box sx={{ flexGrow: 1 }} m={2} pt={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Image
                            className={classes.image}
                            src="/images/tennis.jpg"
                            alt="Tennis image"
                            width={200}
                            height={200}
                        />
                        <h2>Playing Tennis</h2>
                        <p>I play three times a week at my local tennis club</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Image
                            className={classes.image}
                            src="/images/swim.jpg"
                            alt="Swimming image"
                            width={200}
                            height={200}
                        />
                        <h2>At the pools</h2>
                        <p>Nothing beats a swim, sauna, and spa after class!</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Image
                            className={classes.image}
                            src="/images/food.jpg"
                            alt="Food image"
                            width={200}
                            height={200}
                        />
                        <h2>Or Eating</h2>
                        <p>Love trying new foods, particularly after a long swim</p>
                    </Grid>
                </Grid>
            </Box>
        </section>
    );
}

export default Project;


