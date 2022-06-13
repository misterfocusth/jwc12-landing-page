import Image from "next/image";

// Testimonial Content Mockup
const TESTIMONIAL_CONTENT = [
  {
    name: "แมทธิว นักธุรกิจ",
    content:
      "หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้มากเลย ตอนนี้ขายดีเทน้ำเทท่าเลยครับ",
    image: "/src/images/testimonial-01.jpg",
  },
  {
    name: "แจ็ค นักแสดง",
    content:
      "ต้องขอบคุณหมอหมึกในการช่วยให้ความสัมพันธ์ราบรื่นด้วยนะคะ ทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ",
    image: "/src/images/testimonial-02.jpg",
  },
  {
    name: "น้ำใส นักศึกษา",
    content:
      "ที่หมอหมึกบอกมานะคะ เกิดเกือบหมดเลยค่ะ ถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิตคงแย่เลยค่ะ ดีนะที่ป้องกันเรื่องร้ายๆ ทันเวลา",
    image: "/src/images/testimonial-03.jpeg",
  },
];

const Testimonial = () => {
  return (
    <div className="mt-12 justify-center text-center">
      <p className="mb-12 text-4xl font-bold text-white">รีวิวจากลูกค้า</p>

      {TESTIMONIAL_CONTENT.map((testimonial, idx) => (
        <div key={idx}>
          <Image
            src={testimonial.image}
            width={175}
            height={175}
            className="rounded-full"
            objectFit="cover"
          />

          <div className="my-12 mx-8">
            <p className="my-2 text-3xl font-bold text-white">
              {testimonial.name}
            </p>
            <p className="text-base mt-4 text-white">{testimonial.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
