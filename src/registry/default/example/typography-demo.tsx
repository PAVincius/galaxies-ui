import React from 'react'
import TypographyH1 from '../atoms/h1'
import TypographyH2 from '../atoms/h2'
import TypographyP from '../atoms/p'
import { Separator } from '@radix-ui/react-select'

export default function typography() {
  return (
    <div>
      <TypographyH1>Atoms</TypographyH1>
      <TypographyH2>Characteristics</TypographyH2>
      <Separator />
      <TypographyP>In Atomic Design, atoms represent the most basic and indivisible elements of the user interface</TypographyP>
    </div>
  )
}