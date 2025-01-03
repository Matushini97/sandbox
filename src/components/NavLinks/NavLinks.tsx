import { links } from '@/lib/constants/links';
import Link from 'next/link';
import React from 'react';

export const NavLinks = () => {
    return (
        <>
            {links.map((link) => (
                <Link key={link.name} href={link.href}>
                    {link.name}
                </Link>
            ))}
        </>
    );
};
