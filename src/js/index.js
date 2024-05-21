const Timetable = require("comcigan-parser");
const timetable = new Timetable();

const main = async () => {
  await timetable.init();

  // 학교 설정
  await timetable.setSchool(70443);
  const result = await timetable.getTimetable();

  // result[학년][반][요일][교시]
  // 요일: (월: 0 ~ 금: 4)
  // 교시: 1교시(0), 2교시(1), 3교시(2)..
  console.log(result[1][1][1]);
};

main();
