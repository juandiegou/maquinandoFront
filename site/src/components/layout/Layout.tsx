import { type PropsWithChildren } from 'react';

export function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <div className='h-container'>{children}</div>
        </>
    );
}