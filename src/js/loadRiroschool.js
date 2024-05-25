const {Builder, Browser, By} = require('selenium-webdriver');
const dotenv = require("dotenv");
const { del } = require('selenium-webdriver/http');

dotenv.config();

const _riroSchoolCode = process.env.RIRO_SCID;
const riroSchoolID = process.env.RIRO_ID;
const riroSchoolPW = process.env.RIRO_PW;
const delay = 3;

(async function helloSelenium() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  // 리로스쿨 ID 로그인
  await driver.get('https://' + _riroSchoolCode + '.riroschool.com/user.php');
  // await driver.wait(delay)
  const frame = driver.findElement(By.xpath, "/html/frameset/frame[2]")
  await driver.findElement(By.xpath, '//*[@id="id"]').sendKeys(riroSchoolID)
  // await driver.wait(delay)
  await driver.findElement(By.xpath, '//*[@id="pw"]').sendKeys(riroSchoolPW)
  await driver.findElement(By.xpath, '//*[@id="container"]/div/section/div[2]/div[2]/form/button').click();
  // 리로스쿨 수행평가 자료 검색
  // await driver.wait(delay)
  await driver.switchTo.frame(frame)
  await driver.findElement(By.xpath, '//*[@id="container"]/div/div[1]/ul/li[2]').click();
  // await driver.wait(delay)
  await driver.find_element(By.xpath, '//*[@id="container"]/div/div[1]/ul/li[2]/ul/li[1]').click()
  

  await driver.quit();
})();
