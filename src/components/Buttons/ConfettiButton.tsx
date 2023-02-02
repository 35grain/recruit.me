import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";

interface ConfettiButtonProps {
  callback: () => void;
}

export const ConfettiButton = ({ callback }: ConfettiButtonProps) => {
  const handleConfetti = () => {
    confetti({
      angle: 135,
      origin: {
        x: 1,
        y: 1,
      },
      zIndex: 201,
      scalar: 1.2,
      spread: 70,
      drift: -4,
    });
    callback();
  };

  return (
    <Button onClick={handleConfetti}>
      Next
    </Button>
  );
};
