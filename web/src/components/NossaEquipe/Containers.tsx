import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function ContainerText({ children }: Props) {
  return (
    <div className="containerTextEquipe">
      {children}
    </div>
  );
}

function ContainerCards({ children }: Props) {
  return (
    <div className="containerCard flex justify-center flex-wrap gap-x-2.5">
      {children}
    </div>
  );
}

export { ContainerText, ContainerCards };