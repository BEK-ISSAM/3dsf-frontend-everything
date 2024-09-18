import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';
import Modal from './Modal';
import { FaFilePdf } from 'react-icons/fa';
import styles from './CourseDetails.module.css';
import CourseNavbar from './CourseNavbar';

const CourseDetails = () => {
    const { id } = useParams();

    const [course, setCourse] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isDetailsVisible, setIsDetailsVisible] = useState(true);
    const [isVideoListVisible, setIsVideoListVisible] = useState(true);
    const [activeTab, setActiveTab] = useState('details');
    const [quizzes, setQuizzes] = useState([]);
    const [selectedQuizId, setSelectedQuizId] = useState(null);
    const [qcms, setQcms] = useState([]);
    const [answers, setAnswers] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feedbackData, setFeedbackData] = useState([]);
    const [currentGrade, setCurrentGrade] = useState(null);
    const [submittedQuizzes, setSubmittedQuizzes] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const userId = JSON.parse(localStorage.getItem('educationalPlatform')).id;

    useEffect(() => {
        axios.get(`http://localhost:8081/api/courses/${id}`)
            .then(response => {
                setCourse(response.data);
                if (response.data.videos.length > 0) {
                    setSelectedVideo(response.data.videos[0]);
                }
            })
            .catch(error => console.error("Error fetching course details:", error));
    }, [id]);

    useEffect(() => {
        if (course && course.videos.length > 0) {
            setSelectedVideo(course.videos[0]);
        }
    }, [course]);

    useEffect(() => {
        if (course) {
            axios.get(`http://localhost:8081/api/quizzes`)
                .then(response => setQuizzes(response.data))
                .catch(error => console.error("Error fetching quizzes:", error));
        }
    }, [course]);

    useEffect(() => {
        if (selectedQuizId !== null) {
            axios.get(`http://localhost:8081/api/qcm/quiz/${selectedQuizId}`)
                .then(response => setQcms(response.data))
                .catch(error => console.error("Error fetching QCMs:", error));
        }
    }, [selectedQuizId]);

    useEffect(() => {
        axios.get(`http://localhost:8081/api/grades/student/${userId}/quiz/${selectedQuizId}`)
            .then(response => {
                setCurrentGrade(response.data.value);
            })
            .catch(error => console.error("Error fetching updated grade:", error));
    }, [userId, selectedQuizId]);

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
    };

    const toggleDetails = () => {
        setIsDetailsVisible(prev => !prev);
    };

    const toggleVideoList = () => {
        setIsVideoListVisible(prev => !prev);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleQuizSelect = (quizId) => {
        setSelectedQuizId(quizId);
        setIsModalOpen(true);
        setHasSubmitted(false);
    };

    const handleAnswerChange = (qcmId, value) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [qcmId]: value
        }));
    };

    const handleSubmitAnswers = () => {
        const feedback = [];
        const correctAnswers = [];

        Promise.all(Object.keys(answers).map(qcmId =>
            axios.post(`http://localhost:8081/api/qcm/check/${qcmId}`, { answer: answers[qcmId], studentId: userId })
        ))
            .then(responses => {
                responses.forEach((response, index) => {
                    const qcmId = Object.keys(answers)[index];
                    const isCorrect = response.data.correct;
                    feedback.push({
                        qcmId: Number(qcmId),
                        message: response.data.message,
                        isCorrect
                    });

                    if (isCorrect) {
                        correctAnswers.push(qcmId);
                    }
                });

                axios.patch(`http://localhost:8081/api/grades/${userId}`, {
                    studentId: userId,
                    quizId: selectedQuizId,
                    value: correctAnswers.length
                })
                    .then(() => {
                        axios.get(`http://localhost:8081/api/grades/student/${userId}/quiz/${selectedQuizId}`)
                            .then(response => {
                                setCurrentGrade(response.data.value);
                                setSubmittedQuizzes(prev => ({ ...prev, [selectedQuizId]: true })); // Update submission state
                                setFeedbackData(feedback);
                                setIsModalOpen(true);
                                setHasSubmitted(true);
                            })
                            .catch(error => console.error("Error fetching updated grade:", error));
                    })
                    .catch(error => console.error("Error updating grades:", error));
            })
            .catch(error => console.error("Error submitting answers:", error));
    };

    const closeModal = () => {
        setFeedbackData([]);
        setAnswers({});
        setIsModalOpen(false);
    };

    if (!course) return <div>Loading...</div>;

    return (
        <>
        <CourseNavbar />
        <div className={styles.courseDetails}>
            <div className={styles.mainContent}>
                <div className={`${styles.videoPlayerContainer} ${!isVideoListVisible ? styles.fullWidth : ''}`}>
                    {selectedVideo && (
                        <VideoPlayer
                            videoSrc={`http://localhost:8081/api/videos/stream?fileName=${encodeURIComponent(selectedVideo.filePath)}`}
                        />
                    )}
                </div>
                {!isVideoListVisible && (
                    <div
                        className={styles.showArrow}
                        onClick={toggleVideoList}
                    >
                        <span className={styles.arrow}>&#9664;</span>
                        <span className={styles.arrowText}>Course Content</span>
                    </div>
                )}
                <div className={styles.detailsContainer}>
                    <button className={styles.toggleButton} onClick={toggleDetails}>
                        {isDetailsVisible ? 'Hide Details' : 'Show Details'}
                    </button>
                    {isDetailsVisible && (
                        <>
                            <div className={styles.tabs}>
                                <button
                                    className={`${styles.tab} ${activeTab === 'details' ? styles.activeTab : ''}`}
                                    onClick={() => handleTabChange('details')}
                                >
                                    Course Details
                                </button>
                                <button
                                    className={`${styles.tab} ${activeTab === 'quizzes' ? styles.activeTab : ''}`}
                                    onClick={() => handleTabChange('quizzes')}
                                >
                                    Quizzes
                                </button>
                            </div>
                            <div className={styles.tabContent}>
                                {activeTab === 'details' && (
                                    <div>
                                        <h2 style={{"textAlign": "center", "textDecoration": "underline"}}>Course Details</h2>
                                        <p><strong>Teacher:</strong> {course.teacher.username}</p>
                                        <p><strong>Title:</strong> {course.title}</p>
                                        <p><strong>Description:</strong> {course.description}</p>
                                        <p><strong>Category:</strong> {course.category?.name}</p>
                                        <a
                                            href={`http://localhost:8081/api/courses/${course.id}/download-pdf`}
                                            download
                                            className={styles.downloadLink}
                                        >
                                            <FaFilePdf className={styles.pdfIcon} />
                                            {course.pdfName}
                                        </a>

                                    </div>
                                )}
                                {activeTab === 'assignments' && (
                                    <div>
                                        <h2>Assignments</h2>
                                        <ul>
                                            {course.assignments.map(assignment => (
                                                <li key={assignment.id}>{assignment.title}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {activeTab === 'quizzes' && (
                                    <div>
                                        <h2 style={{"textAlign": "center", "textDecoration": "underline"}}>Quizzes</h2>
                                        <ul>
                                            {quizzes.map(quiz => (
                                                <li key={quiz.id} className={styles.quizItem}>
                                                    <button
                                                        onClick={() => handleQuizSelect(quiz.id)}
                                                        disabled={!!submittedQuizzes[quiz.id]} // Disable if quiz is submitted
                                                        className={`${styles.quizButton} ${submittedQuizzes[quiz.id] ? styles.disabledQuizButton : ''}`} // Add class for styling
                                                    >
                                                        {quiz.title}
                                                    </button>
                                                    {submittedQuizzes[quiz.id] && (  // Conditionally render text for submitted quizzes
                                                        <span className={styles.quizStatus}> (Already submitted)</span>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                            </div>
                        </>
                    )}
                </div>
            </div>
            {isVideoListVisible && (
                <div className={styles.videoListContainer}>
                    <button className={styles.toggleButton} onClick={toggleVideoList}>
                        Hide Course Content
                    </button>
                    <div>
                        <h3 className={styles.videoListTitle} style={{"textAlign": "center", "textDecoration": "underline"}}>Course Content</h3>
                        <ul>
                            {course.videos.map(video => (
                                <li
                                    key={video.id}
                                    onClick={() => handleVideoClick(video)}
                                    className={`${styles.videoItem} ${selectedVideo && selectedVideo.id === video.id ? styles.videoItemSelected : ''}`}
                                >
                                    {video.title}
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
            )}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={`${quizzes.find(quiz => quiz.id === selectedQuizId)?.title || selectedQuizId}`}
                qcms={qcms}
                feedbackData={feedbackData}
                answers={answers}
                handleAnswerChange={handleAnswerChange}
                handleSubmitAnswers={handleSubmitAnswers}
                currentGrade={currentGrade}
                hasSubmitted={hasSubmitted}
            />
        </div>
        </>
    );
};

export default CourseDetails;
