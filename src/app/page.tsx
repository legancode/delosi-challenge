// import Image from "next/image";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      WELCOME TO DELOSI
      <Image
        src="https://media.licdn.com/dms/image/D4E3DAQHmWBliOYHkBA/image-scale_191_1128/0/1676393049809/delosi_sa_cover?e=1700625600&v=beta&t=P4WJlwsTMgSH1GEzGg_hPXuhlpoLvR_92F79w606k4k"
        alt="logo de marcas"
      />
    </main>
  );
}
