import styles from './Founder.module.scss';

const Founder = () => {
    return (
        <section className={styles.container}>
            <img src={`./assets/images/image-founder.webp`} alt="Founder"></img>
            <div className={styles.bioContainer}>
                <h1>Be the first to test</h1>
                <h3>
                    Hi, I'm Louis Graham, the founder of the company.
                    Book a demo call with me to become a beta tester
                    for our app and kickstart your company.
                    Apply for access below and I’ll be in touch to schedule a call.
                </h3>
                <div className={styles.accessButton}>Apply for access</div>
            </div>
            <img src={`./assets/images/bg-pattern-1.svg`} alt=""></img>
        </section>
    )
}

export default Founder;