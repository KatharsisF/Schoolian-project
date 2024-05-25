const Timetable = require("./comcigan-parser");
const timetable = new Timetable();
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const writeJsonFilePath = path.join(__dirname, "../data/timeTablse.json");

const _grade = process.env.GRADE;
const _class = process.env.CLASS;

dotenv.config();

const main = async () => {
  await timetable.init();

  // 학교 설정
  await timetable.setSchool(70443);
  const result = await timetable.getTimetable();

  // result[학년][반][요일][교시]
  // 요일: (월: 0 ~ 금: 4)
  // 교시: 1교시(0), 2교시(1), 3교시(2)..
  // console.log(result[1][1][1]);

  // 결과 값을 JSON으로 저장하는 함수
  const jsonString = JSON.stringify(result[_grade][_class], null, 2);
  fs.writeFile(writeJsonFilePath, jsonString, "utf-8", (err) => {
    if (err) {
      console.log("파일 저장중 에러 발생:", err);
    } else {
      console.log("파일이 성공적으로 저장되었습니다. 경로:", writeJsonFilePath);
    }
  });
};

main()