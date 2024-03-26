import { ChangeEvent, Dispatch, SetStateAction } from "react";

type CustomInputType = {
  label: string;
  value: string | undefined;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput = ({ label, value, onChangeValue }: CustomInputType) => (
  <div className="flex flex-col justify-center items-center" key={label}>
    <p className="font-normal whitespace-nowrap w-24 text-center">{label}</p>
    <input
      className="rounded-2xl border p-3 font-normal text-5xl bg-slate-400 opacity-50 w-28 h-28 text-center text-white placeholder:text-gray-300 shadow-md"
      type="string"
      placeholder="0"
      value={value}
      onChange={onChangeValue}
    />
  </div>
);

export default CustomInput;
