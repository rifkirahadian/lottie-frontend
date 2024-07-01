import { downloadJsonFile } from "@/utils";
import { LottieAnimation } from "./lottie";
import { useSelector } from "react-redux";
import { RootState } from "../../../lib/store";

export const AnimationDetail = () => {
  const animation = useSelector((state: RootState) => state.animationReducer.animation);

  return (
    <>
      {animation && (
        <div className='grid grid-cols-3 gap-4'>
        <div>
          <LottieAnimation
            animationData={JSON.parse(animation.file)}
          />
        </div>
        <div>
          <ul className='font-medium rounded-lg border-gray-200 text-sm'>
            <li className='w-full rounded-t-lg border-b border-gray-200 px-4 py-2'>
              {animation.name}
            </li>
            <li className='w-full border-b border-gray-200 px-4 py-2'>{`${Math.ceil(animation.size / 1024)} KB`}</li>
            <li className='w-full rounded-t-lg border-b border-gray-200 px-4 py-2'>
              {animation.createdAt}
            </li>
            <li className='w-full rounded-t-lg border-b border-gray-200 px-4 py-2'>
              <button
                className='btn btn-primary'
                onClick={() =>
                  downloadJsonFile(animation.file, animation.name)
                }
              >
                Download
              </button>
            </li>
          </ul>
        </div>
      </div>
      )}
    </>
  );
}