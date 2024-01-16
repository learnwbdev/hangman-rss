import { attemptCounter, setAttemptCounter } from "./getSetAttemptCounter";
import { attemptCounterNode } from "../html-structure/createHtmlStructure";
import { showModalRestart } from "../modals/modal-restart/showModalRestart";

export const increaseAttemptCounterByOne = () => {
  setAttemptCounter(attemptCounter.value + 1);
  attemptCounterNode.textContent = attemptCounter.value.toString();
  if (attemptCounter.value === 1) {
    attemptCounterNode.classList.add("attempt__wrong_nonzero");
  } else if (attemptCounter.value === 6) {
    const isGameOver = true;
    showModalRestart(isGameOver);
  }
};