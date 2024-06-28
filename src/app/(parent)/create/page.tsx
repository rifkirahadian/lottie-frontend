/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { LottieAnimation } from '@/components/animations';
import { InputFile } from '@/components/input';
import { CREATE_FILE_MUTATION } from '@/services/graphql';
import { validateLottieJson } from '@/validates';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

export default function List() {
  const router = useRouter();
  const [animationData, setAnimationData] = useState<any>(null);
  const [filename, setFilename] = useState<string | null>(null);
  const [filesize, setFilesize] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [createFile] = useMutation(CREATE_FILE_MUTATION);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          try {
            const data = JSON.parse(result);

            const isLottie = validateLottieJson(data);
            if (!isLottie) {
              setError('Invalid Lottie Animation');
              return;
            }
            setError(null);
            setAnimationData(data);
            setFilename(file.name);
            setFilesize(file.size);
          } catch (error) {
            setError('Invalid Lottie Animation');
          }
        };
        reader.readAsText(file);
      }
    }
  };

  const onCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createFile({
      variables: {
        createFileInput: {
          name: filename,
          file: JSON.stringify(animationData),
          size: filesize,
        },
      },
    });

    router.push('/');
  };

  return (
    <>
      <div className='container mx-auto px-4 text-black'>
        <h1 className='mb-3 mt-3'>Add Animation</h1>
        <div className='h-screen w-full'>
          <form onSubmit={onCreate}>
            {error && <p className='text-red-500'>{error}</p>}
            {!animationData && (
              <InputFile
                handleFileChange={handleFileChange}
                inputRef={inputFileRef}
              />
            )}
            {animationData && (
              <div className='relative mt-4 flex h-64 w-full items-center justify-center'>
                <LottieAnimation animationData={animationData} />
                <div className='absolute bottom-4 flex space-x-2'>
                  <button
                    className='btn btn-danger'
                    onClick={() => setAnimationData(null)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            )}
            <button type='submit' className='btn btn-primary mt-4'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
