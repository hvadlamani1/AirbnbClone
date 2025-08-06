import Link from 'next/link';

const HomePage = () => {
    return (
        <div className='text-red-500 text-4xl font-lato'>
        <h1 className="text">Home Page</h1>

        <Link href="/properties">View Properties</Link>
        </div>
    );
}
 
export default HomePage;