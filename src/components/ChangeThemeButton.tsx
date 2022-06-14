// import React, { useState, useEffect, VFC } from "react";
// import { useTheme } from "next-themes";
// import { SunLight, HalfMoon } from "iconoir-react";

// export const ChangeThemeButton: VFC = () => {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState<boolean>(false);

//   useEffect(() => setMounted(true), []);

//   return (
//     <>
//       <button
//         aria-label="DarkModeToggle"
//         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       >
//         {mounted && (
//           <>
//             {theme === "dark" ? <HalfMoon fr={name} /> : <SunLight fr={name} />}
//           </>
//         )}
//       </button>
//     </>
//   );
// };
