import styles from './Hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.container}>
            Data <span>tailored</span> to <br></br> your needs.
            <div className={styles.learnMoreButton}>Learn more</div>
            <img src={`./assets/images/image-hero.webp`} alt="" />
        </div>
    )
}

export default Hero;