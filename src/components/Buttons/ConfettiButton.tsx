import { Button } from "@nextui-org/react"
import confetti from "canvas-confetti"

export const ConfettiButton = () => {
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
      };

    return (
        <Button flat onClick={handleConfetti}>
            Submit
        </Button>
    )
}