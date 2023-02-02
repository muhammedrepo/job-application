import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/SmallSidebar';
import Logo from './Logo';
import NavLinks from './NavLinks';

const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className={`sidebar-container`}>
        <div className="content">
          <button type="button" className="close-btn">
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;

// const SmallSidebar = () => {
//   return (
//     <div className="lg:hidden">
//       <div
//         className={`fixed inset-0 bg-black/70 flex items-center justify-center transition-type -z-10 opacity-0 show-sidebar`}
//       >
//         <div className="content bg-white w-fluidWidth h-[95vh] rounded-sm py-16 px-8 relative flex items-center flex-col ">
//           <button
//             type="button"
//             className="absolute top-2.5 left-2.5 bg-transparent border-transparent text-2xl text-red cursor-pointer"
//           >
//             <FaTimes />
//           </button>
//           <header>
//             <Logo />
//           </header>
//           <NavLinks />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SmallSidebar;
