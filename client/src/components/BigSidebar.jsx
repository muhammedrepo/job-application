import Wrapper from '../assets/wrappers/BigSidebar';
import Logo from './Logo';
import NavLinks from './NavLinks';

const BigSidebar = () => {
  return (
    <Wrapper>
      <div className={`sidebar-container`}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;

// const BigSidebar = () => {
//   return (
//     <div className="hidden lg:block shadow-shadow1">
//       <div
//         className={`sidebar-container bg-white min-h-screen h-full w-[250px] transition-type show-sidebar`}
//       >
//         <div className="sticky top-0">
//           <header className="h-24 flex items-center pl-10">
//             <Logo />
//           </header>
//           <NavLinks />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BigSidebar;
