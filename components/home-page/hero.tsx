import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
    return (
        <section className={classes.hero}>
        <div className={classes.image}>
            <Image 
                src="/images/hero.jpg" 
                alt="Hero image" 
                width={300} 
                height={300}
            />
        </div>
        <h1>Hi, I'm David</h1>
        <h2>
            I am a software development student, basketball enthusiast, <br></br>tennis player, aspiring swimmer, and food connoisseur...
        </h2>
        </section>
    );
}

export default Hero;