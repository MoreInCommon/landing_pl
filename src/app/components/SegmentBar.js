"use client";

const values = [24, 51, 51, 105, 63, 39, 20];
const SegmentBar = ({ number, color }) => (
  <div className="flex gap-2 justify-center my-8">
    {values.map((v, i) => (
      <div
        key={i}
        className={`h-[10px]`}
        style={{ width: `${v}px`, background: Number(number) === Number(i) ? color : "#DADDE1" }}
      />
    ))}
  </div>
);

export default SegmentBar;
