import React from "react";
import LogoG from './Icons/LogoG.png'

export const Home = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="flex-1">
        <h1 className="text-[#0a8537] font-bold text-[50px] ml-[5%] mt-[50px]">Bienvenido al Portal de Estudiantes de Inglés</h1>
        <p className="mt-[15px] ml-[5%] w-[88%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia vero asperiores quibusdam rem unde recusandae exercitationem laudantium laboriosam repellendus dolore quia maxime earum iste, corrupti voluptas molestiae doloribus tenetur officiis sunt culpa fuga? Impedit facilis ex numquam deleniti minima voluptate ut molestias, possimus expedita sequi, excepturi eius officiis labore.</p>
        <div className="flex gap-4 ml-[5%] mt-[50px]">
          <button className="bg-[#0a8537] w-[150px] h-[50px] rounded-lg hover:bg-green-600 text-white">Exams</button>
          <input type="text" className="border-[2px] border-[#0a8537] rounded-lg w-[300px]" />
        </div>
      </div>
      <div className="flex-1">
        <picture>
            <img src={LogoG} alt="logo image funval" className="w-[90%] h-[280px] rounded-2xl mt-[100px] ml-[5%]"/>
        </picture>
      </div>
    </div>
  );
};
