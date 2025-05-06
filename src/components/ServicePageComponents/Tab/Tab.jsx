import { NavLink } from "react-router-dom";

export const Tab = () => {
  const menuItems = [
    { name: "Custom Clearance", path: "/services" },
    { name: "Custom Clearance", path: "/2" },
    { name: "Custom Clearance", path: "/3" },
  ];

  return (
    <div
      role="tablist"
      className="w-full overflow-x-auto whitespace-nowrap flex gap-2 py-4 md:justify-center"
    >
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `tab px-4 py-2 rounded-full border min-w-fit transition 
            ${
              isActive
                ? "tab-active font-semibold bg-secondary text-white border-primary"
                : "border-primary"
            } 
            text-sm lg:text-lg`
          }
          role="tab"
          end
        >
          <span className="inline-flex items-center text-sm text-black">
            {item.name}
          </span>
        </NavLink>
      ))}
    </div>
  );
};
