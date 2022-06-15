import Image from "next/image";
import * as router from "next/router";

const Hero = () => {
  return (
    <div>
      <div>
        <p className="my-2 text-4xl font-bold text-white lg:text-5xl">
          หมอหมึก
        </p>
        <p className="text-lg mt-4 text-white lg:text-xl">
          ผู้มีประสบการณ์การพยากรณ์มากกว่า 10 ปี พร้อมคำพยากรณ์ที่แม่นยำ
        </p>
        <button className="mt-8 p-4 px-16 bg-white text-[#8E44AD] text-lg">
          <a href="#contact">จองคิว</a>
        </button>
      </div>

      <div className="mt-12 lg:hidden">
        <Image
          className="rounded-lg"
          src={"/src/images/octopus-fortune-teller.jpeg"}
          width={300}
          height={350}
        />
      </div>
    </div>
  );
};

export default Hero;
