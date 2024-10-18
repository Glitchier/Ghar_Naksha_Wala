import Bedroom from "../components/work_component/Bedroom";
import Others from "../components/work_component/Others";
import Kitchen from "../components/work_component/Kitchen";
import LivingRoom from "../components/work_component/LivingRoom";
import Architecture from "../components/work_component/Architecture";

const ArchModules = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25,
].map((name) => `/img/Work_Ex/architecture/${name}.webp`);

const OthersModules = [1, 2, 3, 4, 5, 6, 7].map(
  (name) => `/img/Work_Ex/others/${name}.webp`
);

const BedModules = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
  (name) => `/img/Work_Ex/bedroom/${name}.webp`
);

const KitchenModules = [1, 2, 3, 4, 5, 6, 7, 8].map(
  (name) => `/img/Work_Ex/kitchen/${name}.webp`
);

const LivingRoomModules = [1, 2, 3, 4, 5, 6].map(
  (name) => `/img/Work_Ex/living_room/${name}.webp`
);

const Work = () => {
  return (
    <div className="w-full my-10 flex flex-col justify-center items-center gap-16">
      <Bedroom gallery={BedModules} />
      <div className="w-full h-[1px] bg-zinc-100"></div>
      <Kitchen gallery={KitchenModules} />
      <div className="w-full h-[1px] bg-zinc-100"></div>
      <LivingRoom gallery={LivingRoomModules} />
      <div className="w-full h-[1px] bg-zinc-100"></div>
      <Architecture gallery={ArchModules} />
      <div className="w-full h-[1px] bg-zinc-100"></div>
      <Others gallery={OthersModules} />
    </div>
  );
};

export default Work;
