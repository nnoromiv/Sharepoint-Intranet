"use client";
import * as React from 'react';
import { NavbarProps } from '../../types';
import { Image, Link } from '@fluentui/react';
import { navigation, redtechLogo } from '../../constants';

const Navbar = ({ toBeActive }: NavbarProps):JSX.Element => {
    const [active, setActive] = React.useState("")
    console.log(active)
    return (
        <header className="tw-w-full" onLoad={(e) => {e.preventDefault; setActive(toBeActive)}}>
        <div className="tw-navbar tw-glass lg:px-24">
            <Link className='tw-mr-auto tw-pl-4' to="/">
                <Image
                    src={redtechLogo}
                    width={150}
                    alt='Logo'
                    />
                </Link>
            <div className="tw-navbar-center tw-flex">
                <ul className="tw-menu tw-menu-horizontal tw-px-1 tw-text-xl tw-font-semibold" >
                    {
                        navigation?.map((nav, index) => (
                            nav.link === toBeActive 
                            ?
                            <li key={index}>
                                <Link href={nav.link} className='tw-text-red-900' >
                                    {nav.title}
                                </Link>
                            </li>
                            :
                            <li key={index}>
                                <Link href={nav.link} className='tw-text-red-900' >
                                    {nav.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>                
            </div>
        </div>
    </header>
    );
}

export default Navbar
