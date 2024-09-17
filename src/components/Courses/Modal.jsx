import React from 'react';
import styles from './Modal.module.css';

const Modal = ({
    isOpen,
    onClose,
    title,
    qcms,
    feedbackData,
    answers,
    handleAnswerChange,
    handleSubmitAnswers,
    currentGrade,
    hasSubmitted
}) => {
    if (!isOpen) return null;

    const getFeedbackForQcm = (qcmId) => {
        const feedback = feedbackData.find(feedback => feedback.qcmId === qcmId);
        return feedback ? feedback.message : '';
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle} style={{ "margin": "0px auto", "textDecoration": "underline", "color": "tomato" }}>{title}</h2>
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.questionsContainer}>
                        {qcms.map(qcm => (
                            <div key={qcm.id} className={styles.questionItem}>
                                {qcm.imageData && (
                                    <img
                                        src={`data:${qcm.imageType};base64,${qcm.imageData}`}
                                        alt={qcm.question}
                                        className={styles.questionImage}
                                    />
                                )}
                                <p className={styles.questionText}>{qcm.question}</p>
                                <input
                                    type="text"
                                    value={answers[qcm.id] || ''}
                                    onChange={(e) => handleAnswerChange(qcm.id, e.target.value)}
                                    className={styles.answerInput}
                                    disabled={hasSubmitted}
                                />
                                <span
                                    className={`${styles.feedbackText} ${feedbackData.find(feedback => feedback.qcmId === qcm.id)?.isCorrect ? styles.correct : styles.incorrect}`}
                                >
                                    {hasSubmitted ? getFeedbackForQcm(qcm.id) : ''}
                                </span>
                            </div>
                        ))}
                    </div>
                    {hasSubmitted && (
                        <div className={styles.submittedIndicator}>
                            <p className={styles.submittedText}>Quiz has already been answered.</p>
                        </div>
                    )}
                    <div className={styles.gradeContainer}>
                        <h4 className={styles.currentGrade}>
                            Your Current Grade: <span className={styles.gradeBadge}>{currentGrade}</span>
                        </h4>
                    </div>
                </div>
                <div className={styles.modalFooter}>
                    <button
                        onClick={handleSubmitAnswers}
                        disabled={Object.keys(answers).length === 0 || hasSubmitted}
                        className={styles.submitButton}
                    >
                        Submit Answers
                    </button>
                    <button className={styles.closeButtonFooter} onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
