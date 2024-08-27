// import React, { useContext } from "react";
// import { CreateEContext } from "../context/CreateEContextM.jsx"
// export const DashM = () => {
//   const { user } = useContext(CreateEContext);

//   return (
//     <div className="bg-gray-900 p-8">
//       <div className="border-[2px] rounded-2xl border-green-600 h-[100vh] p-8 text-green-500">
//         <div className="flex items-center">
//           <h1 className="text-[50px]">Welcome Teacher:</h1>
//           <p className="text-white ml-5 text-[30px]">
//             {user ? `${user[0].user_id} ${user?.lastName}` : "Nombre y Apellido"}
//           </p>
//         </div>
//         <div>
//           <p className="text-[20px]">
//             Aquí puedes castigar a tus alumnos con los siguientes exámenes:{" "}
//           </p>
//           <div className="flex mt-[20px] gap-5">
//             <div className="flex-1 border h-[35vh] rounded-2xl text-center">
//               <button className="mt-[15vh]">Elementary</button>
//             </div>
//             <div className="flex-1 border h-[35vh] rounded-2xl text-center">
//               <button className="mt-[15vh]">A1</button>
//             </div>
//           </div>
//           <div className="flex mt-[20px] gap-5">
//             <div className="flex-1 border h-[35vh] rounded-2xl text-center">
//               <button className="mt-[15vh]">A2</button>
//             </div>
//             <div className="flex-1 border h-[35vh] rounded-2xl text-center">
//               <button className="mt-[15vh]">B1</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useContext } from "react";
import { CreateEContext } from "../context/CreateEContextM.jsx";
import { AuthContextM } from "../context/AuthContextM.jsx";

export const DashM = () => {
  const { user } = useContext(CreateEContext);
  // const { teacher } = useContext(AuthContextM)
  console.log(teacher);

  return (
    <div className="bg-gray-900 p-8">
      <div className="border-[2px] rounded-2xl border-green-600 h-[100vh] p-8 text-green-500">
        <div className="flex items-center">
          <h1 className="text-[50px]">Welcome Teacher:</h1>
          <p className="text-white ml-5 text-[30px]">
            {teacher ? `${teacher.firstName}` : "Nombre"}{" "}
            {teacher ? `${teacher.lastName}` : "Apellido"}
          </p>
        </div>
        <div>
          <p className="text-[20px]">
            Aquí puedes castigar a tus alumnos con los siguientes exámenes:{" "}
          </p>
          <div className="flex mt-[20px] gap-5">
            {user &&
              user.map((exam) => (
                <div
                  key={exam.level_id.name}
                  className="flex-1 border h-[35vh] rounded-2xl text-center"
                >
                  <button className="mt-[15vh]">{exam.name}</button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
