import { Outlet, Link } from 'react-router-dom';
import { Navbar, BigSidebar, SmallSidebar } from '../../components';

const SharedLayout = () => {
  return (
    <main className="grid grid-cols-1 lg:auto-cols-fr">
      <SmallSidebar />
      <BigSidebar />

      <div>
        <Navbar />
        <div className="w-[90vw] my-0 mx-auto py-8 px-0 lg:w-[90%]">
          <Outlet />
        </div>
      </div>
    </main>
  );
};
export default SharedLayout;
