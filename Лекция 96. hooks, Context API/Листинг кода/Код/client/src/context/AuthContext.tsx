import { createContext } from "react";

export interface CtxData {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  profile: { name: string };
}

export const AuthContext = createContext<CtxData>({
  token: "",
  setToken: () => {},
  profile: { name: "" }
});

// type Props = {
//   children: React.ReactNode;
// };

// export const AuthProvider: React.FC<Props> = ({ children }) => {
//   const [token, setToken] = useState<string>("");
//   const profile = { name: "User1" };

//   return (
//     <AuthContext.Provider
//       value={{
//         token,
//         setToken,
//         profile,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
