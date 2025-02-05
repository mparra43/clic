import clsx from "clsx";

interface ProgressBarProps {
    classNameBar?:string
    classNameContainer?:string;
    numberofSteps: number;
    step:number;
}

export const ProgressBar = ({classNameBar ='bg-greeny-500 h-2.5', classNameContainer = 'w-full bg-greeny-80 h-2.5' , numberofSteps, step}: ProgressBarProps) => {
    return (
        <div className={clsx(classNameContainer,'rounded-full')}>
        {numberofSteps && step && <div
          className={clsx( classNameBar, 'rounded-full')}
          style={{ width: `${(100 / numberofSteps) * step}%` }}
        ></div>}
      </div>
    )
} 