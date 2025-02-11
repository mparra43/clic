'use client'
import clsx from 'clsx';
import { useTransversalStore } from '@/store/institutions-store';

export interface GroupMainLogoProps {
  className: string
  icon: string
}

export const GroupMainLogo = ({ className, icon }: GroupMainLogoProps) => {

  const { setMenu } = useTransversalStore((state) => state);

  return (
    <div className={clsx(className)} >
      <i className={icon} onClick={() => { setMenu() }} />
      <h1 className="text-white ml-4 font-ubuntu">CLICK</h1>
    </div>
  );
}

