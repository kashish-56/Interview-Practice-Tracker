const inputStyle =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500";

function Filters({ filters, onChange, onClear }) {
  return (
    <div className="mb-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3 md:grid-cols-[2fr_1fr_1fr_1fr_auto]">
      <input
        type="text"
        className={inputStyle + " sm:col-span-3 md:col-span-1"}
        placeholder="Search questions..."
        value={filters.search}
        onChange={(e) => onChange("search", e.target.value)}
      />

      <select
        className={inputStyle}
        value={filters.category}
        onChange={(e) => onChange("category", e.target.value)}
      >
        <option value="All">All Categories</option>
        <option>DSA</option>
        <option>Git</option>
        <option>Technical</option>
      </select>

      <select
        className={inputStyle}
        value={filters.status}
        onChange={(e) => onChange("status", e.target.value)}
      >
        <option value="All">All Status</option>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <select
        className={inputStyle}
        value={filters.difficulty}
        onChange={(e) => onChange("difficulty", e.target.value)}
      >
        <option value="All">All Difficulty</option>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <button
        className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm hover:bg-slate-50 sm:col-span-3 md:col-span-1"
        onClick={onClear}
      >
        Clear
      </button>
    </div>
  );
}

export default Filters;
