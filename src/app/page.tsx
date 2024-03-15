"use client";

import Box from "@/components/Box";
import CustomInput from "@/components/CustomInput";
import useQueryParams from "@/hooks/useQueryParams";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const THEODO_DEV_HOURS = "7";

  const [roundingEnabled, setRoundingEnabled] = useState<boolean>(true);

  const { queryParams, setQueryParams } = useQueryParams();
  const { speed, devHours, hours, people } = queryParams;

  const getEstimate = () => {
    const allDefined = speed && devHours && hours && people;

    if (allDefined) {
      const estimate = parseFloat(
        (
          (parseInt(speed) / parseInt(devHours)) *
          parseInt(hours) *
          parseInt(people)
        ).toFixed(2)
      );
      return roundingEnabled ? Math.round(estimate) : estimate;
    }

    return "❓";
  };

  useEffect(() => {
    if (devHours === undefined) {
      setQueryParams({ devHours: THEODO_DEV_HOURS });
    }
  }, [devHours, setQueryParams]);

  return (
    <main className="flex flex-col items-center pt-10 px-10 gap-5 h-screen">
      <div className="h-[35%] w-full">
        <Box />
      </div>

      <p className="font-normal text-8xl m-5">TheoBox</p>
      <div className="flex flex-row gap-5 items-center">
        <p className="font-normal text-5xl mt-5 text-gray-500"> ❬ </p>

        <CustomInput
          label="💨 Speed"
          value={speed}
          onChangeValue={(e) => {
            setQueryParams({ speed: e.target.value ?? undefined });
          }}
        />

        <p className="font-normal text-3xl mt-5"> ➗ </p>

        <CustomInput
          label="💻 Dev Hours"
          value={devHours}
          onChangeValue={(e) => {
            setQueryParams({ devHours: e.target.value ?? "" });
          }}
        />
        <p className="font-normal text-5xl mt-5  text-gray-600"> ❭ </p>
        <p className="font-normal text-3xl mt-5"> ✖️ </p>

        <CustomInput
          label="⏰ Hours"
          value={hours}
          onChangeValue={(e) => {
            setQueryParams({ hours: e.target.value });
          }}
        />

        <p className="font-normal text-3xl mt-5"> ✖️ </p>

        <CustomInput
          label="👶 People"
          value={people}
          onChangeValue={(e) => {
            setQueryParams({ people: e.target.value });
          }}
        />
      </div>
      <p className="font-normal text-4xl mt-5"> 🟰 {getEstimate()} points</p>

      {devHours !== THEODO_DEV_HOURS && (
        <p className="font-normal text-red-600">
          *It is generally not advised to change the dev hours from{" "}
          {THEODO_DEV_HOURS}{" "}
          <Link className="underline" href="/devhours">
            (see why here)
          </Link>
        </p>
      )}

      <div className="flex flex-row sm:absolute left-10 bottom-10 p-3">
        <input
          type="checkbox"
          checked={roundingEnabled}
          onChange={(e) => setRoundingEnabled(e.target.checked)}
        />
        <p className="font-normal text-xl mx-2">Rounding</p>
      </div>
    </main>
  );
}
