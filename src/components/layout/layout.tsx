import React, { ReactNode } from 'react';

// Components
import Footer from '../footer';
import Header from '../header';

// Styles
import './layout.scss'

export interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
    return (
        <React.Fragment>
            <Header logged={false} />
            <main className="main__area">
                <div className='main__content'>
                    {children}
                </div>
            </main>
           <Footer /> 
        </React.Fragment>
    )
};

export default Layout;