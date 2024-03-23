import bodyParser from "body-parser"; // Middleware này được sử dụng để phân tích các yêu cầu gửi đến server từ phía client.
import "dotenv/config"; // Import và cấu hình biến môi trường từ file .env. File .env thường chứa các biến môi trường như cấu hình kết nối cơ sở dữ liệu, cổng server, hoặc các thông tin nhạy cảm khác.
import express from "express"; // Import framework Express để tạo server và xử lý các yêu cầu HTTP.
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";

let application = express(); // Tạo một instance của Express và lưu vào biến application.

application.use(bodyParser.json()); // Sử dụng middleware bodyParser.json() để phân tích dữ liệu JSON gửi từ client.
application.use(bodyParser.urlencoded({ extended: true })); // Sử dụng middleware bodyParser.urlencoded() để phân tích dữ liệu được gửi dưới dạng url-encoded từ client.

viewEngine(application); // Gọi hàm viewEngine với tham số là instance của Express (application) để cấu hình view engine cho ứng dụng.
initWebRoutes(application); // Gọi hàm initWebRoutes với tham số là instance của Express (application) để cấu hình các routes cho ứng dụng.

let port = process.env.PORT || 2728; // Định nghĩa biến port, lấy giá trị từ biến môi trường PORT nếu có hoặc mặc định là 2728 nếu không có.

application.listen(port, () => {
  console.log("Server started at port: " + port);
  console.log("Application available at http://localhost:" + port);
}); // Lắng nghe kết nối từ client tại cổng được định nghĩa (port). Khi server bắt đầu lắng nghe kết nối, hiển thị thông báo "Server started at port: [port]" và "Application available at http://localhost:[port]".
