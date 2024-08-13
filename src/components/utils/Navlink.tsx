"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
type TPageProps = {
    children: React.ReactNode
    exact : boolean 
    href: string 
    activeClassName: string 
    className: string

}
const ClassNames = (...arg:any) => arg.filter(Boolean).join(" ")
const Navlink = ({children, exact  , href , activeClassName, ...props}:TPageProps) => {
    const path = usePathname()
    const active = exact ? path === href : path.startsWith(href)
    const classes = ClassNames(props.className, active && activeClassName)
    if(classes){
        props.className = classes
    }
    return (
            <Link href={href} {...props}>{children}</Link>
    );
};

export default Navlink;