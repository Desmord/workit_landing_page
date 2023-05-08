import styles from './MainContent.module.scss';

const MainContent = () => {
    return (
        <section className={styles.container}>
            <div>
                <span>1</span>
                <div>Actionable insights</div>
                <div>
                    Optimize your products, improve customer
                    satisfaction and stay ahead of the competition with our product data analytics.
                </div>
            </div>
            <div>
                <span>2</span>
                <div>Data-driven decisions</div>
                <div>
                    Make data-driven decisions with out product data analytics.
                    Our AI-generated reports help you unlock insights hidden in your product data.
                </div>
            </div>
            <div>
                <span>3</span>
                <div>Always affordable</div>
                <div>
                    Always affordable pricing that scales with your buisiness.
                    Get top-quality product data analytics services without hidden costs or unexpected fees.
                </div>
            </div>
            <div className={styles.myBackground}></div>
        </section>
    )
}

export default MainContent