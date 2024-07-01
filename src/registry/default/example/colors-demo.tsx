import React from 'react'
import ColorInfo from '../atoms/colors'

const colorInfo = {
  category: "primary",
  hexCode: "#ff5757",
  colorName: "carnation",
  contrastRatio: "4.53",
  textColorRatio: "#FFFFFF",
  headlineColor: "#000000",
  shade: 400,
  hue: 10,
  lightness: 67,
  saturation: 100,
};


export default function colorsDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full m-4">
      <ColorInfo category={colorInfo.category} shade={colorInfo.shade} colorName={colorInfo.colorName} hexCode={colorInfo.hexCode} hue={colorInfo.hue} lightness={colorInfo.lightness} saturation={colorInfo.saturation} contrastRatio={colorInfo.contrastRatio} textColorRatio={colorInfo.textColorRatio} />
    </div>
    )
}
