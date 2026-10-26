import Gallery from "../components/Gallery";

const ArchModules = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 17, 18, 19, 20, 21, 22, 24, 25,
].map((name) => `/img/Work_Ex/architecture/${name}.webp`);

const OthersModules = [1, 2, 3, 4, 5, 6, 7].map(
  (name) => `/img/Work_Ex/others/${name}.webp`,
);

const BedModules = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
  (name) => `/img/Work_Ex/bedroom/${name}.webp`,
);

const KitchenModules = [1, 2, 3, 4, 5, 6, 7, 8].map(
  (name) => `/img/Work_Ex/kitchen/${name}.webp`,
);

const LivingRoomModules = [1, 2, 3, 4, 5, 6].map(
  (name) => `/img/Work_Ex/living_room/${name}.webp`,
);

const sections: [string, string[]][] = [
  ["Bedroom", BedModules],
  ["Kitchen", KitchenModules],
  ["Living Room", LivingRoomModules],
  ["Architecture", ArchModules],
  ["Others", OthersModules],
];

const Work = () => {
  return (
    <div className="w-full my-10 flex flex-col justify-center items-center gap-16">
      {sections.map(([title, gallery], i) => (
        <div key={title} className="w-full flex flex-col items-center gap-16">
          {i > 0 && <div className="w-full h-[1px] bg-zinc-100"></div>}
          <Gallery title={title} gallery={gallery} />
        </div>
      ))}
    </div>
  );
};

export default Work;
