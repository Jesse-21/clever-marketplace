import type {NextPage} from 'next';
import styles from "../styles/Explore.module.scss";
import Card from "../components/Card";

const Explore: NextPage = () => {
    return (
        <div className={styles.explore}>
            <Card/>
        </div>
    )
}

export default Explore