import { Routes, Route } from "react-router-dom";
import { HomePage, TrainingSessionsPage, TrainingDetailPage, ProfilePage, SecondProfilePage, TaskDetailPage, TasksDetailPage, FormPage, QuestionnairePage, QuestionnaireScores, FormPage2, FormPage3, FormPage4, FeedbackPage, FeedbackPage2, FeedbackPage3 } from "./user/pages";

export function AppRouter() {
    return(
        <main>
            <Routes>
                <Route
                path="/"
                element={<HomePage/>}
                />
                <Route
                path="/training-sessions"
                element={<TrainingSessionsPage/>}
                />
                <Route
                path="/training-detail"
                element={<TrainingDetailPage/>}
                />
                <Route
                path="/profile"
                element={<ProfilePage />}
                />
                <Route
                path="/sencond-profile"
                element={<SecondProfilePage />}
                />
                  <Route
                path="/questionnaire"
                element={<QuestionnairePage />}
                />
                <Route
                path="/questionnaire-scores"
                element={<QuestionnaireScores />}
                />
                <Route
                path="/tasks"
                element={<TasksDetailPage/>}
                />
                <Route
                path="/task1"
                element={<TaskDetailPage/>}
                />
                <Route
                path="/form"
                element={<FormPage/>}
                />
                <Route
                path="/form-step2"
                element={<FormPage2/>}
                />
                <Route
                path="/form-step3"
                element={<FormPage3/>}
                />
                <Route
                path="/form-step4"
                element={<FormPage4/>}
                />
                <Route
                path="/feedback"
                element={<FeedbackPage/>}
                />
                <Route
                path="/feedback2"
                element={<FeedbackPage2/>}
                />
                <Route
                path="/feedback3"
                element={<FeedbackPage3/>}
                />
            </Routes>
        </main>
    )
}