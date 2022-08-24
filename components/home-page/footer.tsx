import Link from 'next/link';
import Logo from '../layout/logo';
import classes from './footer.module.css';


function Footer() {
    return (
        <section className={classes.footer}>
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
            <nav>
                <ul>
                    <li><Link href="https://github.com/biggie9925">Github</Link></li>
                    <li><Link href="https://www.linkedin.com/in/david-mackey-ward">LinkedIn</Link></li>
                </ul>
            </nav>
        </section>
    );
}

export default Footer;