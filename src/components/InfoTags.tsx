import React from "react";

interface InfoTagsProps {
  specie: string;
  gender: string;
  size: string;
}

const InfoTags: React.FC<InfoTagsProps> = ({ specie, gender, size }) => (
  <div className="flex flex-row gap-2 mx-auto w-full">
    <p className="flex-1 border-stone-400 border-2 px-2 py-1 rounded-lg text-center font-fredoka font-medium text-sm text-stone-400">
      {specie}
    </p>
    <p className="flex-1 border-stone-400 border-2 px-2 py-1 rounded-lg text-center font-fredoka font-medium text-sm text-stone-400">
      {gender}
    </p>
    <p className="flex-1 border-stone-400 border-2 px-2 py-1 rounded-lg text-center font-fredoka font-medium text-sm text-stone-400">
      {size}
    </p>
  </div>
);

export default InfoTags;
