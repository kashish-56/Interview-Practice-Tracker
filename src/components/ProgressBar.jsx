function ProgressBar({ percentage }) {
  return (
    <div className="mt-5">
      <div className="mb-1.5 flex justify-between font-semibold">
        <span>Overall Progress</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        {/* width has to be dynamic, so we use inline style here */}
        <div
          className="h-full rounded-full bg-indigo-600 transition-all duration-500"
          style={{ width: percentage + "%" }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
