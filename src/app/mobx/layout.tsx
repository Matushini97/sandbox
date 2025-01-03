export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <h2>Mobx integration</h2>
            {children}
        </section>
    );
}
