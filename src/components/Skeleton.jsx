import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonLode = () => {
  return (
    <SkeletonTheme baseColor="#ff6666" highlightColor="#bd8989">
      <p>
        <Skeleton count={1} className="md:h-[250px] h-[100px]" />
      </p>
    </SkeletonTheme>
  );
};

export default SkeletonLode;
