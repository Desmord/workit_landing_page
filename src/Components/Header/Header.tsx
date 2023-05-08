import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.container}>
            <img src={`./assets/images/logo-light.svg`} alt="workit" />
            <div>Apply for access</div>
        </header>
    )
}

export default Header;