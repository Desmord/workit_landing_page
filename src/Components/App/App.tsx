import HeroBackground from '../HeroBackground/HeroBackground';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import MainContent from '../MainContent/MainContent';
import Founder from '../Founder/Founder';
import Footer from '../Footer/Footer';

import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.container}>
            <HeroBackground />
            <Header />
            <Hero />
            <MainContent />
            <Founder />
            <Footer />
        </div>
    )
}

export default App;