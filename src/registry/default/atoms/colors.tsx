"use client"

import React from 'react';

interface ColorInfoProps {
  category?: string;
  shade?: number;
  colorName?: string;
  hexCode: string;
  hue?: number;
  lightness?: number;
  saturation?: number;
  contrastRatio?: string;
  textColorRatio?: string;
}

const ColorInfo: React.FC<ColorInfoProps> = ({
  category,
  shade,
  colorName,
  hexCode,
  hue,
  lightness,
  saturation,
  contrastRatio,
  textColorRatio,
}) => {
  return (
    <div className="w-full h-44 bg-white rounded-2xl shadow-xl justify-start items-center gap-6 inline-flex border-2 border-slate-200">
    <div className="w-1/3 h-full self-stretch bg-[#ff5757] rounded-tl-2xl rounded-bl-2xl" />
    <div className="flex-col justify-start items-start gap-2 inline-flex">
      <div className="justify-start items-start inline-flex">
        <div className="text-neutral-800 text-lg font-semibold  leading-7">{colorName}</div>
        <div className="text-primary text-lg font-semibold leading-7">-{shade}</div>
      </div>
      <div className="flex-col justify-start items-start gap-3 flex">
        <div className="justify-start items-start gap-1 inline-flex">
          <div className="w-16 text-neutral-800 text-sm font-normal leading-tight">{hexCode}</div>
        </div>
        <div className="justify-start items-start inline-flex">
          <div className="justify-start items-start gap-1 flex">
            <div className="text-slate-500 text-sm font-normal leading-tight">H</div>
            <div className="w-10 text-neutral-800 text-sm font-normal leading-tight">{hue}</div>
          </div>
          <div className="justify-start items-start gap-1 flex">
            <div className="text-slate-500 text-sm font-normal leading-tight">S</div>
            <div className="w-10 text-neutral-800 text-sm font-normal leading-tight">{saturation}</div>
          </div>
          <div className="justify-start items-start gap-1 flex">
            <div className="text-slate-500 text-sm font-normal leading-tight">L</div>
            <div className="w-10 text-neutral-800 text-sm font-normal leading-tight">{lightness}</div>
          </div>
        </div>
        <div className="flex-col justify-start items-start flex">
          <div className="justify-start items-start gap-2 inline-flex">
            <div className="text-slate-500 text-sm font-normal leading-tight">Contrast on white</div>
            <div className="w-12 text-neutral-800 text-sm font-normal leading-tight">{contrastRatio}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ColorInfo;