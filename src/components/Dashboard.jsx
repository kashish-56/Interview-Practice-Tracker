import ProgressBar from "./ProgressBar";

function Dashboard({ questions, machineCoding, setMachineCoding }) {
  const total = questions.length;
  const completed = questions.filter((q) => q.status === "Completed");

  // DSA problems completed
  const completedDsa = completed.filter((q) => q.category === "DSA").length;
  // interview questions = Git + Technical
  const completedInterview = completed.filter((q) => q.category !== "DSA").length;

  const percentage = total === 0 ? 0 : Math.round((completed.length / total) * 100);

  return (
    <div className="mb-5 rounded-xl bg-white p-5 shadow">
      <h2 className="mb-3.5 text-lg font-semibold">Dashboard</h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
        <div className="rounded-lg bg-slate-100 p-3.5">
          <p className="mb-1.5 text-sm text-slate-500">Total Questions</p>
          <p className="text-3xl font-bold">{total}</p>
        </div>

        <div className="rounded-lg bg-slate-100 p-3.5">
          <p className="mb-1.5 text-sm text-slate-500">DSA Completed</p>
          <p className="text-3xl font-bold">{completedDsa}</p>
        </div>

        <div className="rounded-lg bg-slate-100 p-3.5">
          <p className="mb-1.5 text-sm text-slate-500">Interview Qs Completed</p>
          <p className="text-3xl font-bold">{completedInterview}</p>
        </div>

        <div className="rounded-lg bg-slate-100 p-3.5">
          <p className="mb-1.5 text-sm text-slate-500">Machine Coding</p>
          <select
            className="w-full rounded-md border border-slate-300 bg-white px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={machineCoding}
            onChange={(e) => setMachineCoding(e.target.value)}
          >
            <option>Not Started</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      <ProgressBar percentage={percentage} />
    </div>
  );
}

export default Dashboard;
