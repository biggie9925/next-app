import Link from 'next/link';
import Logo from './logo';
import classes from './main-navigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
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
    </header>
    )
}

export default MainNavigation