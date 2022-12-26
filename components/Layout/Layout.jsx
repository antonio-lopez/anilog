import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='min-h-screen'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
