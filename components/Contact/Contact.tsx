const Contact = () => {
  return (
    <div className="my-20 justify-start text-start">
      <p className="my-2 text-3xl font-bold text-white">ทำนายชะตากับหมอหมึก</p>
      <p className="text-base mt-4 text-white">
        สามารถจองคิวได้ตาม <br />
        อีเมล: octopus_fortune@teller.com <br />
        โทรศัพท์: 099-XXX-XXXX <br /> <br />
        และมาที่สำนักได้ที่ <br />
        ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง แขวงเว็บ เขตอินเตอร์เน็ต กรุงเทพ 99999{" "}
        <br />
        ตามวันเวลาที่ได้นัดไว้
      </p>
      <p className="text-base mt-4 text-white">
        จำกัดที่ 10 คิวต่อ 1 วัน เปิดทำการ <br />
        10.00 - 18.30 น. พัก 12.00 - 13.00 <br />
        เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์เเละอาทิตย์ <br />
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.7926452123234!2d100.77892491538898!3d13.73100019036094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d66308ce98ffd%3A0xcb43a76f038c38ca!2sFaculty%20of%20Infomation%20Technology!5e0!3m2!1sen!2sth!4v1655059052950!5m2!1sen!2sth"
        className="w-full mt-12"
        height={350}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contact;
