"use client";
import { useState } from "react";

export function ButtonSteps() {
  const [step, setStep] = useState<number>(1);

  return (
    <div className="flex items-center gap-4 mt-2">
      <button
        onClick={() => step !== 2 && setStep(step + 1)}
        type="submit"
        className="bg-blue-600 w-max px-2 h-10 rounded"
      >
        {step === 2 ? "Finalizar" : "Proximo"}
      </button>
    </div>
  );
}
