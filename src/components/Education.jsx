import "../styles/Education.css";
import { useTranslation } from 'react-i18next';
import '../hooks/useTranslations';
import "../styles/Card.css";
import "../styles/Linea.css";

function Education() {
    const { t } = useTranslation();

    return (
        <div id="education" className="d-flex py-5 justify-content-center flex-column text-center align-self-center">
            <div className="d-flex justify-content-center flex-column text-center align-self-center w-100">
                <h2>{t('education')}</h2>
            </div>
            <div className="lines-thing text-center"></div>
            <div className="d-flex justify-content-center align-items-start mt-5">
                <div className="line-container">
                    <div className="line"></div>
                    <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="cards-container">
                    <label className="labelCard">
                        <input type="checkbox" />
                        <div className="card">
                            <div className="front-dark">
                                <h3>{t('tecnocampus_title')}</h3>
                                <p>{t('tecnocampus_name_date')}</p>
                            </div>
                            <div className="back">
                                <p>{t('tecnocampus_description')}</p>
                            </div>
                        </div>
                    </label>
                    <label className="labelCard">
                        <input type="checkbox" />
                        <div className="card">
                            <div className="front-dark">
                                <h3>{t('DAW_title')}</h3>
                                <p>{t('DAW_name_date')}</p>
                            </div>
                            <div className="back">
                                <p>{t('DAW_description')}</p>
                            </div>
                        </div>
                    </label>
                    <label className="labelCard">
                        <input type="checkbox" />
                        <div className="card">
                            <div className="front-dark">
                                <h3>{t('SMIX_title')}</h3>
                                <p>{t('SMIX_name_date')}</p>
                            </div>
                            <div className="back">
                                <p>{t('SMIX_description')}</p>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>

        // <div>
        //     <svg className="waves" xmlns="http://www.w3.org/2000/svg"
        //         viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
        //         <defs>
        //             <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        //         </defs>
        //         <g className="parallax">
        //             <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
        //             <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
        //             <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
        //             <use href="#gentle-wave" x="48" y="7" fill="#fff" />
        //         </g>
        //     </svg>
        // </div>
    )
}

export default Education
