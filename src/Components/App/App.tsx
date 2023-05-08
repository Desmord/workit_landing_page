import HeroBackground from '../HeroBackground/HeroBackground';
import Header from '../Header/Header';

import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.container}>
            <HeroBackground />
            <Header />
        </div>
    )
}

export default App;