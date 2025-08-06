import '../assets/styles/globals.css';

export const metadata = {
    title: 'Airbnb Clone',
    keywords: 'rental, property, booking, travel',
    description: 'Find the perfect rental property for your next vacation or business trip.',
    authors: [{ name: 'Hemanth Vadlamani', url: 'https://github.com/hvadlamani1' }]
}
const MainLayout = ({children}) => {
    return (
        <html>
            <body>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
 
export default MainLayout;