'use client'

import { NavItem } from "@/interfaces";
import { useTransversalStore } from "@/store/institutions-store";
import Link from "next/link";
import clsx from 'clsx';

export interface NavProps {
    className: string;
    classItem: string;
    itemsMenu: NavItem[]
    mobile?: boolean;

}
export const Nav = ({ className, classItem, itemsMenu, mobile = false }: NavProps) => {

    const { ui } = useTransversalStore((state) => state);

    return (
        <>
            {(!mobile || mobile && ui.openMenu) && <nav className={clsx(className)}>
                { itemsMenu.map(({ path, text }, index) => (
                        <Link className={classItem}
                            href={path}
                            key={index}>
                            {text}
                        </Link>
                    ))}
            </nav>}
        </>
    );
}