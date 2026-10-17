import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import QuestionForm from "./components/QuestionForm";
import Filters from "./components/Filters";
import QuestionList from "./components/QuestionList";

// read saved questions from localStorage (if any)
function loadQuestions() {
  try {
    const saved = localStorage.getItem("questions");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
}

function App() {
  const [questions, setQuestions] = useState(loadQuestions);
  const [machineCoding, setMachineCoding] = useState(
    localStorage.getItem("machineCoding") || "Not Started"
  );
  const [filters, setFilters] = useState({
    search: "",
    category: "All",
    status: "All",
    difficulty: "All",
  });

  // save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    localStorage.setItem("machineCoding", machineCoding);
  }, [machineCoding]);

  function addQuestion(question) {
    const newQuestion = { ...question, id: Date.now() };
    setQuestions([newQuestion, ...questions]);
  }

  function changeStatus(id, newStatus) {
    const updated = questions.map((q) =>
      q.id === id ? { ...q, status: newStatus } : q
    );
    setQuestions(updated);
  }

  function deleteQuestion(id) {
    setQuestions(questions.filter((q) => q.id !== id));
  }

  function handleFilterChange(name, value) {
    setFilters({ ...filters, [name]: value });
  }

  function clearFilters() {
    setFilters({ search: "", category: "All", status: "All", difficulty: "All" });
  }

  // apply search + filters
  const filteredQuestions = questions.filter((q) => {
    const matchSearch = q.title.toLowerCase().includes(filters.search.toLowerCase());
    const matchCategory = filters.category === "All" || q.category === filters.category;
    const matchStatus = filters.status === "All" || q.status === filters.status;
    const matchDifficulty = filters.difficulty === "All" || q.difficulty === filters.difficulty;
    return matchSearch && matchCategory && matchStatus && matchDifficulty;
  });

  return (
    <div className="mx-auto max-w-4xl px-4 pb-10 pt-5">
      <h1 className="mb-5 text-center text-2xl font-bold text-indigo-800">
        Interview Practice Tracker
      </h1>

      <Dashboard
        questions={questions}
        machineCoding={machineCoding}
        setMachineCoding={setMachineCoding}
      />

      <QuestionForm onAdd={addQuestion} />

      <div className="mb-5 rounded-xl bg-white p-5 shadow">
        <h2 className="mb-3.5 text-lg font-semibold">Your Questions</h2>
        <Filters filters={filters} onChange={handleFilterChange} onClear={clearFilters} />
        <QuestionList
          questions={filteredQuestions}
          totalQuestions={questions.length}
          onStatusChange={changeStatus}
          onDelete={deleteQuestion}
          onClearFilters={clearFilters}
        />
      </div>
    </div>
  );
}

export default App;
