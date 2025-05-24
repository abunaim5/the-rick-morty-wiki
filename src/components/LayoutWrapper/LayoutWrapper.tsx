'use client'
import Navbar from "../Navbar/Navbar";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <main>
                <Navbar />
                {children}
            </main>
        </>
    );
};

export default LayoutWrapper;