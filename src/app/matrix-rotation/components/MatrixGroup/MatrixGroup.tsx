import { FC, PropsWithChildren } from "react";

export interface MatrixGroupProps {
  sideSize: number;
  className?: string;
}

const MatrixGroup: FC<PropsWithChildren<MatrixGroupProps>> = ({
  children,
  sideSize,
  className = "",
}) => {
  return (
    <div
      className={`grid gap-4 ${className}`}
      style={{
        gridTemplateColumns: `repeat(${sideSize}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${sideSize}, minmax(0, 1fr))`,
      }}
    >
      {children}
    </div>
  );
};

export default MatrixGroup;
