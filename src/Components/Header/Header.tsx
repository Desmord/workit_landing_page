import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.container}>
            <img src={`./assets/images/logo-light.svg`} alt="workit" />
            <div>Apply for access</div>
        </div>
    )
}

export default Header;