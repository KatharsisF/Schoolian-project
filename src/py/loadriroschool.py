from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By
from dotenv import load_dotenv
import os
import time

# .env 파일 로딩
load_dotenv()

id = os.environ.get('RIRO_ID')
password = os.environ.get('RIRO_PW')
riro_id = os.environ.get('RIRO_SCID')
data = []
Playlist_f = []
Subject = ""
Number = ""
Teacher = ""
Content = ""
Target = ""
Day = ""
Day_f = []
Target_f = []
Number_f = []
Subject_f = []
Teacher_f = []
Content_f = []
Playlist_f = []

# 크롬 웹드라이버 호출
driver = webdriver.Chrome()
driver.get('https://' + riro_id + '.riroschool.kr/user.php')
delay = 3
driver.implicitly_wait(delay)

# 리로스쿨 아이디 로그인
driver.maximize_window()
driver.find_element(By.XPATH, '//*[@id="id"]').send_keys(id)
time.sleep(delay)
driver.find_element(By.XPATH, '//*[@id="pw"]').send_keys(password)
time.sleep(delay)
driver.find_element(By.XPATH, '//*[@id="container"]/div/section/div[2]/div[2]/form/button').click()
driver.implicitly_wait(10)

# 수행평가 자료 검색
frame = driver.find_element(By.XPATH, "/html/frameset/frame[2]")
driver.switch_to.frame(frame)
driver.find_element(By.XPATH, '//*[@id="container"]/div/div[1]/ul/li[2]').click()

time.sleep(delay)
driver.find_element(By.XPATH, '//*[@id="container"]/div/div[1]/ul/li[2]/ul/li[1]').click()

html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
print(soup)
driver.close()

# #for i in range(2,12):
  #  Playlist = soup.find_all('tr')[i].get_text()
  #  Playlist = Playlist.split("\n", 5)
  #  Number = Playlist[1]
  #  Content = Playlist[2]
  #  Content = Content.replace("마감 2019년 ","")
 #  Target = Content[:3]
 #   Subject = Content[4:6]
  #  Content = Content.split("- ",1)
  #  Content = Content[1] 
 #   Teacher = Playlist[3]
 # #  Day = Playlist[4]
  #  
  #  Content_f.append(Content)
  #  Subject_f.append(Subject)
  #  Day_f.append(Day)
  #  Teacher_f.append(Teacher)
  #  Target_f.append(Target)
  #  Playlist_f.append(Playlist)
  #  Number_f.append(Number)
    
print(Playlist_f)
print(Number_f)
print(Target_f)
print(Subject_f)
print(Teacher_f)
print(Day_f)
print(Content_f)
