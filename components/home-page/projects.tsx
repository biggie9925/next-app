import Image from 'next/image';
import { styled } from '@mui/material/styles';
import classes from './projects.module.css';
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
        <section className={classes.projects}>
            <h2>I have also done some other cool projects...</h2>
            <Box sx={{ flexGrow: 1 }} m={2} pt={2}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Image
                            className={classes.image}
                            src="/images/cpp_console.jpg"
                            alt="CPP Console image"
                            width={200}
                            height={200}
                        />
                        <h2>C++ Console</h2>
                        <p>The first &quot;big&quot; project that opened my eyes to the power and functionality of programming</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Image
                            className={classes.image}
                            src="/images/qt.jpg"
                            alt="Qt image"
                            width={200}
                            height={200}
                        />
                        <h2>Qt</h2>
                        <p>A practical full stack Qt C++ application featuring a user friendly GUI, on-event functions, and a SQLite database.</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                    <Image
                            className={classes.image}
                            src="/images/cv.jpg"
                            alt="CV image"
                            width={200}
                            height={200}
                        />
                        <h2>CV</h2>
                        <p>A simple HTML and CSS website hosted on GitHub pages</p>
                    </Grid>
                </Grid>
            </Box>
        </section>
    );
}

export default Project;

