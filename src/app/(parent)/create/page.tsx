/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { LottieAnimation } from "@/components/animations";
import { InputFile } from "@/components/input";
import { ChangeEvent, useRef, useState } from "react";

export default function List() {
  const [animationData, setAnimationData] = useState<any>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          setAnimationData(JSON.parse(result));
        };
        reader.readAsText(file);
      }
    }
  };

  return (
    <>
      <div className='container mx-auto px-4 text-black'>
        <h1>Add Animation</h1>
        <div className='h-screen w-full'>
          <form>
            {!animationData && (
              <InputFile handleFileChange={handleFileChange} inputRef={inputFileRef} />
            )}
            {animationData && (
              <div className="relative flex items-center justify-center w-full h-64 mt-4">
                <LottieAnimation animationData={animationData} />
                <div className="absolute bottom-4 flex space-x-2">
                  <button className='btn btn-danger' onClick={() => setAnimationData(null)}>
                    Remove
                  </button>
                </div>
              </div>
            )}
            <button
              type='submit'
              className='btn btn-primary mt-4'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
