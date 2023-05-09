import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <img src='./assets/images/logo-dark.svg' alt="Workit"></img>
            </div>
            <div>
                <img src='./assets/images/icon-facebook.svg' alt="Workit"></img>
                <img src='./assets/images/icon-instagram.svg' alt="Workit"></img>
                <img src='./assets/images/icon-twitter.svg' alt="Workit"></img>
            </div>
        </footer>
    )
}

export default Footer