import QuestionItem from "./QuestionItem";

function QuestionList({ questions, totalQuestions, onStatusChange, onDelete, onClearFilters }) {
  // no questions added yet
  if (totalQuestions === 0) {
    return (
      <div className="rounded-lg border-2 border-dashed border-slate-300 px-3 py-8 text-center text-slate-500">
        <h3 className="mb-1.5 font-semibold text-slate-800">No questions yet</h3>
        <p>Add your first question using the form above.</p>
      </div>
    );
  }

  // questions exist but search/filters match nothing
  if (questions.length === 0) {
    return (
      <div className="rounded-lg border-2 border-dashed border-slate-300 px-3 py-8 text-center text-slate-500">
        <h3 className="mb-1.5 font-semibold text-slate-800">No results found</h3>
        <p>Try changing your search or filters.</p>
        <button
          className="mt-3 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-800 hover:bg-slate-50"
          onClick={onClearFilters}
        >
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2.5">
      {questions.map((q) => (
        <QuestionItem
          key={q.id}
          question={q}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default QuestionList;
