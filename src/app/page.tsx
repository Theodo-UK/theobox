"use client";

import Box from "@/components/Box";
import CustomInput from "@/components/CustomInput";
import useQueryParams from "@/hooks/useQueryParams";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const THEODO_DEV_HOURS = "7";

  const [roundingEnabled, setRoundingEnabled] = useState<boolean>(true);
  const [cubeColor, setCubeColor] = useState("orange");

  const { queryParams, setQueryParams } = useQueryParams();
  const { speed, devHours, hours, people } = queryParams;

  const getEstimate = () => {
    const allDefined = speed && devHours && hours && people;

    if (allDefined) {
      const estimate = parseFloat(
        (
          (parseFloat(speed) / parseFloat(devHours)) *
          parseFloat(hours) *
          parseFloat(people)
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
    <main className="flex flex-col items-center justify-center px-10 py-14 gap-5 h-full">
      <div className="h-[300px] w-full mt-10">
        <div className="flex justify-center items-center">
          <button
            className="rounded-full h-5 w-5 bg-orange-500 mx-1"
            onClick={() => setCubeColor("orange")}
          />
          <button
            className="rounded-full bg-red-600 h-5 w-5 mx-1"
            onClick={() => setCubeColor("red")}
          />
          <button
            className="rounded-full bg-green-600 h-5 w-5 mx-1"
            onClick={() => setCubeColor("green")}
          />
        </div>
        <Box color={cubeColor} />
      </div>

      <p className="font-normal sm:text-8xl text-4xl m-5">TheoBox</p>
      <div className="flex sm:flex-row flex-col gap-5 items-center">
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
