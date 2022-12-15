import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import { AnswerContext } from "./contexts/answer";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { CheckAge } from "./pages/CheckAge";
import { DownloadExcel } from "./pages/DownloadExcel";
import { Acknowledgment } from "./pages/Acknowledgment";
import { Sociodemographic } from "./pages/Sociodemographic";

function App() {
  let answerObj = {
    enrollment: null,
    email: null,
    age: null,
    gender: null,
    course: null,
    courseYear: null,
    semester: null,
    income: null,
    familySupport: null,
    relationship: null,
    antisocial: null,
    selfEvaluation: null,
    quitCourse: null,
    hoursStudy: null,
  };

  const [answer, setAnswer] = useState<any>(answerObj);
  const [checkAge, setCheckAge] = useState<boolean>();

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <AnswerContext.Provider value={{ checkAge, setCheckAge, answer }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<CheckAge />} />
            <Route path="/sociodemografico" element={<Sociodemographic />} />
            <Route path="/questoes" element={<Home />} />
            <Route path="/agradecimentos" element={<Acknowledgment />} />
            <Route path="/baixar-excel" element={<DownloadExcel />} />
          </Routes>
        </Router>
      </AnswerContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
