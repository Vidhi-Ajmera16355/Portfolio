// ML.jsx
import React from 'react';

const ML = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Machine Learning Developer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Natural Language Processing</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Jupyter Notebook (Implementation)</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Google Colab (Implementation)</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Algorithms</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                        <ul className="skills__subdata">
                            <li>
                                <i className="bx bx-badge-check"></i>
                                <span className="skills__subname">Linear Regression</span>
                            </li>
                            <li>
                                <i className="bx bx-badge-check"></i>
                                <span className="skills__subname">Logistic Regression</span>
                            </li>

                            <li>
                                <i className="bx bx-badge-check"></i>
                                <span className="skills__subname">Supervised Learning</span>
                            </li>
                            <li>
                                <i className="bx bx-badge-check"></i>
                                <span className="skills__subname">Unsupervised Learning</span>
                            </li>
                            <li>
                                <i className="bx bx-badge-check"></i>
                                <span className="skills__subname">Time-series prediction</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ML;
