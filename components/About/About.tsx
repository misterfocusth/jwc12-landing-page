import Image from "next/image";

const About = () => {
  return (
    <div className="my-20 justify-start text-start lg:flex lg:justify-center">
      <div className="lg:w-5/12 mr-20 w-full">
        <p className="my-2 text-3xl font-bold text-white lg:text-4xl">
          ประวัติหมอหมึก
        </p>
        <p className="text-base mt-4 text-white lg:hidden">
          หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวง ด้วยลูกแก้วพยากรณ์
          ไพ่ทาโร และการดูลายมือ ด้วยความสามารถที่หลากหลาย
          ทำให้หมอหมึกสามารถเลือกวิธีการทำนายที่เหมาะกับแต่ละบุคคล
          เพื่อให้ได้ผลลัพธ์แม่นยำที่สุด
        </p>

        <p className="text-xl  mt-4 text-white hidden lg:flex ">
          หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวง ด้วยลูกแก้วพยากรณ์
          ไพ่ทาโร และการดูลายมือ <br /> <br /> ด้วยความสามารถที่หลากหลาย
          ทำให้หมอหมึกสามารถเลือกวิธีการทำนายที่เหมาะกับแต่ละบุคคล
          เพื่อให้ได้ผลลัพธ์แม่นยำที่สุด
        </p>
      </div>

      <div className="hidden lg:flex">
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

export default About;
