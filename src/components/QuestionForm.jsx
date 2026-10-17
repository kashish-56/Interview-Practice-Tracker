import { useState } from "react";

// same style is used for every input/select in the form
const inputStyle =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500";

function QuestionForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("DSA");
  const [difficulty, setDifficulty] = useState("Easy");
  const [status, setStatus] = useState("Pending");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // simple validation
    if (title.trim() === "") {
      setError("Please enter a question.");
      return;
    }
    if (title.trim().length < 3) {
      setError("Question must be at least 3 characters.");
      return;
    }

    onAdd({ title: title.trim(), category, difficulty, status });

    // reset the form
    setTitle("");
    setCategory("DSA");
    setDifficulty("Easy");
    setStatus("Pending");
    setError("");
  }

  return (
    <div className="mb-5 rounded-xl bg-white p-5 shadow">
      <h2 className="mb-3.5 text-lg font-semibold">Add Question</h2>

      <form className="grid grid-cols-1 gap-3 sm:grid-cols-3" onSubmit={handleSubmit}>
        <div className="sm:col-span-3">
          <input
            type="text"
            className={inputStyle}
            placeholder="Enter question (e.g. Two Sum)"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setError("");
            }}
          />
          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>

        <select className={inputStyle} value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>DSA</option>
          <option>Git</option>
          <option>Technical</option>
        </select>

        <select
          className={inputStyle}
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <select className={inputStyle} value={status} onChange={(e) => setStatus(e.target.value)}>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 sm:col-span-3"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default QuestionForm;
