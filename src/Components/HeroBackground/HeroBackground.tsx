import styles from './HeroBackground.module.scss'

const HeroBackground = () => {
    return (
        <div className={styles.container}>
            <div className={styles.backgorundOval}></div>
            <img src={`./assets/images/bg-pattern-1.svg`} alt="" />
            <img src={`./assets/images/bg-pattern-2.svg`} alt="" />
        </div>
    )
}

export default HeroBackground