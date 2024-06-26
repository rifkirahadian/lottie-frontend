/* eslint-disable @typescript-eslint/no-explicit-any */
import Lottie from "lottie-react";

export const LottieAnimation = ({ animationData }: { animationData: any }) => {
  return <Lottie animationData={animationData} style={{ width: 300, height: 300 }} />;
};

