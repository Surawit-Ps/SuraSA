การใช้ไฟล์

--- backend ---

cd backend

./main.exe

--- QR code ---

cd frontend

npm install -g nodemon

npm i express qrcode promptpay-qr body-parser lodash cors

มีไฟล์นอกสุดใน Frontend ชื่อ QRCODE.js

ในไฟล์ packege.json

{  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "0": "nodemon QRCODE.js", สำคัญ !!!!! ใช้รันระบบสร้าง QRCODE ถ้าไม่มีเพิ่มซะ!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
}
npm run 0 สำหรับ รันระบบ


--- frontend ---

cd frontend

npm install --save react-router-dom@6.x

npm install antd --save

npm instal axios --save

npm instal dayjs --save

npm install antd-img-crop

npm install react-bootstrap bootstrap   

npm run dev



--------------------------------------------------------------------------------------------------------
backend ใช้
$ go get -u github.com/gin-gonic/gin

$ go get -u gorm.io/gorm

$ go get -u gorm.io/driver/sqlite

$ go get -u github.com/dgrijalva/jwt-go

$ go get -u golang.org/x/crypto@v0.16.0
