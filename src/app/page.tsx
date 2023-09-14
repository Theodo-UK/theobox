"use client";

import CustomInput from "@/components/CustomInput";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const THEODO_DEV_HOURS = 7;

  const [speed, setSpeed] = useState<number>();
  const [devHours, setDevHours] = useState<number | undefined>(
    THEODO_DEV_HOURS
  );
  const [hours, setHours] = useState<number>();
  const [people, setPeople] = useState<number>();
  const [roundingEnabled, setRoundingEnabled] = useState<boolean>(true);

  const getEstimate = () => {
    console.log(roundingEnabled);

    const allDefined = speed && devHours && hours && people;

    if (allDefined) {
      const estimate = parseFloat(
        ((speed / devHours) * hours * people).toFixed(2)
      );
      return roundingEnabled ? Math.round(estimate) : estimate;
    }

    return "❓";
  };

  return (
    <main className="flex flex-col items-center justify-center p-24 gap-5 h-screen box-border">
      <div className="flex flex-row absolute left-10 bottom-10">
        <input
          type="checkbox"
          checked={roundingEnabled}
          onChange={(e) => setRoundingEnabled(e.target.checked)}
        />
        <p className="font-normal text-xl mx-2">Rounding</p>
      </div>
      <p className="font-normal text-8xl m-5">TheoBox</p>
      <div className="flex flex-row gap-5 items-center">
        <CustomInput label="💨 Speed" value={speed} setValue={setSpeed} />

        <p className="font-normal text-3xl mt-5"> ➗ </p>

        <CustomInput
          label="💻 Dev Hours"
          value={devHours}
          setValue={setDevHours}
        />

        <p className="font-normal text-3xl mt-5"> ✖️ </p>

        <CustomInput label="⏰ Hours" value={hours} setValue={setHours} />

        <p className="font-normal text-3xl mt-5"> ✖️ </p>

        <CustomInput label="👶 People" value={people} setValue={setPeople} />
      </div>
      <p className="font-normal text-4xl mt-5"> 🟰 {getEstimate()} points</p>

      {devHours !== THEODO_DEV_HOURS && (
        <p className="font-normal text-red-500">
          *It is generally not advised to change the dev hours from{" "}
          {THEODO_DEV_HOURS}{" "}
          <Link className="underline" href="/devhours">
            (see why here)
          </Link>
        </p>
      )}
    </main>
  );
}
