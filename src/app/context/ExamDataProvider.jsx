import { createContext, useState } from 'react';

const ExamDataContext = createContext();


const ExamDataProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        subject: "",
        examType: "",
        mcqCategory: "",
        correctAns: "",
        wrongAns: "0",
        bubbleThreshold: "",
        status: "private",
    });
    const updateFormData = (newData) => {
        setFormData({ ...formData, ...newData });
    };
    return (
        <ExamDataContext.Provider value={ { formData, updateFormData } }>
            { children }
        </ExamDataContext.Provider>
    );
};

export default ExamDataProvider;