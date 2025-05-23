
const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <main>
                {children}
            </main>
        </>
    );
};

export default LayoutWrapper;