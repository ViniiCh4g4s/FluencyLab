export function AuthBackground() {
    return (
        <>
            <div
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.08) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />
            <div className="fixed top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-blue-300/10 blur-3xl pointer-events-none z-0" />
            <div className="fixed bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-blue-200/10 blur-3xl pointer-events-none z-0" />
        </>
    )
}
