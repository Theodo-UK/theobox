import { Dispatch, SetStateAction } from "react";

type CustomInputType = {
  label: string;
  value: number | undefined;
  setValue: Dispatch<SetStateAction<number | undefined>>;
};

const CustomInput = ({ label, value, setValue }: CustomInputType) => (
  <div className="flex flex-col justify-center items-center">
    <p className="font-normal whitespace-nowrap w-24 text-center">{label}</p>
    <input
      className="rounded-2xl border p-3 font-normal text-5xl bg-slate-400 opacity-50 w-20 h-20 text-center text-white placeholder:text-gray-300 shadow-md"
      type="number"
      placeholder="0"
      value={value}
      onChange={(e) => setValue(parseInt(e.target.value))}
    />
  </div>
);

export default CustomInput;
