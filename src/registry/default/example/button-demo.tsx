import React from "react";
import { ButtonProps } from "@/registry/default/molecules/button";
import { Button } from "@/components/ui/button";


interface ButtonExampleProps {
    Icon?: React.ElementType;
    iconPlacement?: "left" | "right";
    text: string;
    variant: ButtonProps["variant"];
    code: string;
}

function ButtonExample({
  Icon,
  iconPlacement,
  text,
  variant,
  code,
}: Readonly<ButtonExampleProps>) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Button variant="shine" size="lg">This is a button</Button>
    </div>

  );
}

export default ButtonExample;