import { NavLink, Outlet } from 'react-router-dom';
import BasicLayout from './BasicLayout';

function Account() {
  return (
    <BasicLayout>
      <nav className="flex h-20 items-center p-3">
        {/* 메뉴 선택 시 active => 자동으로 판별함 (현재 URL과 일치 여부) */}
        <NavLink to={'login'} className="basis-3xl">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? 'border-b-2 border-blue-600 px-4 py-2 font-semibold text-blue-600'
                  : ''
              }
            >
              Login
            </span>
          )}
        </NavLink>
        <NavLink to={'register'} className="basis-3xl">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? 'border-b-2 border-blue-600 px-4 py-2 font-semibold text-blue-600'
                  : ''
              }
            >
              Register
            </span>
          )}
        </NavLink>
      </nav>
      {/* 자식 컴포넌트 자리 */}
      <Outlet></Outlet>
    </BasicLayout>
  );
}

export default Account;
