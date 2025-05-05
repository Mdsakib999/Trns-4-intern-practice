import { NavLink } from "react-router-dom";

export const Tab = () => {
  const menuItems = [
    { name: "Custom Clearance", path: "/" },
    { name: "Custom Clearance", path: "/2" },
    { name: "Custom Clearance", path: "/3" },
  ];

  return (
    <div
      role="tablist"
      className="tabs tabs-border w-full text-center mx-auto flex justify-center lg:gap-2 p-2"
    >
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `tab ${isActive ? "tab tab-active font-semibold text-primary" : ""} 
                     textarea-xs sm:text-base lg:text-lg whitespace-nowrap`
          }
          end
          role="tab"
        >
          <span className="inline-flex items-center">{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
};
