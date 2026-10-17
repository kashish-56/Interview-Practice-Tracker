// Tailwind needs the full class name written in the code (it can't detect
// something like "border-" + color), so we keep the classes in small objects.
const borderColors = {
  Pending: "border-l-slate-400",
  "In Progress": "border-l-amber-500",
  Completed: "border-l-green-600",
};

const difficultyColors = {
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-amber-100 text-amber-700",
  Hard: "bg-red-100 text-red-700",
};

function QuestionItem({ question, onStatusChange, onDelete }) {
  const isCompleted = question.status === "Completed";

  return (
    <div
      className={
        "flex flex-col gap-3 rounded-md border border-l-4 border-slate-200 p-3 sm:flex-row sm:items-center sm:justify-between " +
        borderColors[question.status]
      }
    >
      <div>
        <p className={"break-words font-semibold " + (isCompleted ? "text-slate-400 line-through" : "")}>
          {question.title}
        </p>
        <div className="mt-1.5 flex gap-2">
          <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs text-indigo-700">
            {question.category}
          </span>
          <span
            className={
              "rounded-full px-2.5 py-0.5 text-xs " + difficultyColors[question.difficulty]
            }
          >
            {question.difficulty}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <select
          className="flex-1 rounded-md border border-slate-300 bg-white px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:flex-none"
          value={question.status}
          onChange={(e) => onStatusChange(question.id, e.target.value)}
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <button
          className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600 hover:bg-red-100"
          onClick={() => onDelete(question.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default QuestionItem;
