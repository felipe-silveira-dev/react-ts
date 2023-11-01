const Grid = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-2 m-4">
        <div className="col-span-6 bg bg-slate-400">Container 1</div>
        <div className="col-span-6 bg bg-slate-600">Container 2</div>
      </div>
      <div className="grid grid-cols-12 gap-2 m-4">
        <div className="col-span-8 bg-slate-600">Container 3</div>
        <div className="col-span-4 bg-slate-400">Container 4</div>
      </div>
      <div className="grid grid-cols-12 gap-2 m-4">
        <div className="col-span-4 bg-slate-400">Container 5</div>
        <div className="col-span-4 bg-slate-400">Container 6</div>
        <div className="col-span-4 bg-slate-400">Container 7</div>
      </div>
    </div>
  );
};

export default Grid;
