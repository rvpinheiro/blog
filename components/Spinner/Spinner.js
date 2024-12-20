// components/Spinner/Spinner.js
import { ClipLoader } from 'react-spinners';
import styles from './Spinner.module.css'; // Se você tiver um arquivo de estilos

const Spinner = () => {
    return (
        <div className={styles.spinnerContainer}>
            <ClipLoader size={50} color="#3498db" />
        </div>
    );
};

export default Spinner;
