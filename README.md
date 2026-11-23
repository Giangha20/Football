# ⚽ Siêu Dự Đoán Bóng Đá (Football Prediction & Simulation)

Ứng dụng mô phỏng trận đấu bóng đá thời gian thực kết hợp giả lập 3D Người Que chân thật (Three.js), hệ thống dự đoán tỷ số, bảng xếp hạng VCK FIFA World Cup & các giải đấu câu lạc bộ hàng đầu thế giới.

🌐 **Website trực tiếp**: [https://efootgi.vercel.app/](https://efootgi.vercel.app/)  
📂 **GitHub Repository**: [https://github.com/Giangha20/Football](https://github.com/Giangha20/Football)

---

## 🌟 Tính Năng Nổi Bật

1. **Giả Lập 3D Người Que Chân Thật (Three.js WebGL)**:
   - 🎮 **Mục con chống lag web**: Phân chia rõ ràng giữa tab "Sân 2D Chiến Thuật" và tab "Giả Lập 3D Người Que". Khi ở tab 2D, vòng lặp 3D tự động nghỉ (0% CPU/GPU) giúp trang web luôn mượt mà 60 FPS.
   - 🏃 **22 Cầu thủ người que 3D có khớp chuyển động**: Đầy đủ đầu, thân, vai, khuỷu tay, hông, đầu gối và giày thi đấu. Chuyển động chạy đung đưa tự nhiên, vung chân sút bóng, thủ môn bay người cản phá và nhảy ăn mừng chiến thắng.
   - 🏷️ **Bảng tên cầu thủ 3D trên đầu**: Mỗi cầu thủ có bảng tên hiển thị tên thật (Nguyễn Xuân Son, Quang Hải, Ronaldo, Haaland, Mbappé,...) kèm vai trò (FW, MF, DF, GK) và màu áo đội bóng, luôn tự động xoay hướng về camera (Billboard Sprite 3D).
   - ⚽ **Sân bóng & Vật lý bóng 3D**: Sân cỏ kẻ sọc Premier League, cột gôn 3D, lưới gôn 3D đa chiều uốn lượn khi bóng găm vào lưới, bóng bay theo quỹ đạo parabol và bóng đổ chân thực trên mặt cỏ.
   - ⏱️ **Đồng bộ thời gian thi đấu**: Áp dụng thời gian trận đấu chuẩn xác 2 phút, 4 phút hoặc 6 phút cùng các mức tốc độ 1×, 4×, 12×.
   - 📹 **Nhiều góc quay camera**: Chế độ Truyền hình (Broadcast bám theo bóng), Toàn cảnh (Top-down chiến thuật), Sau cầu môn (Behind-the-goal) và tương tác chạm xoay/phóng to 3D tự do.

2. **Quy Định Nhận OVR Chuẩn Xác & Tổng Kết Mùa Giải**:
   - 🔒 **Chỉ khi kết thúc giải đấu mới nhận OVR**: Điểm biến động OVR chỉ chính thức được áp dụng khi toàn bộ các vòng đấu trong mùa giải đã hoàn tất (hoặc trận Chung kết đã đá xong). Nếu mùa giải đang diễn ra, hệ thống hiển thị thông tin tiến độ và cho phép mô phỏng nốt các vòng để kết thúc mùa.
   - 🏆 **Cơ cấu biến động OVR (Tối đa 125 OVR)**:
     - 🏆 Vô địch: **+5 OVR**
     - 🥈 Á quân: **+3 OVR**
     - 🥉 Top 4: **+2 OVR**
     - 📈 Nửa trên BXH: **+1 OVR**
     - 📉 Nửa dưới BXH: **-1 đến -3 OVR**
     - 🔒 Giới hạn trần tuyệt đối: Không đội bóng nào vượt quá **125 OVR**.
   - 🔄 **Nút "Chơi lại mùa giải"**: Khởi động lại mùa giải hiện tại từ Vòng 1 để trải nghiệm lại.
   - ⏩ **Nút "Tiếp tục mùa giải mới"**: Áp dụng chỉ số OVR mới và bước sang mùa giải kế tiếp (Mùa 2027/2028,...).
   - 📜 **Cuộn danh sách đầy đủ**: Bảng tổng kết mùa giải cho phép cuộn mượt mà để xem tất cả các đội còn lại trong giải đấu mà không làm che mất nút bấm hay tiêu đề.

3. **Giao Diện Chống Tràn Màn Hình & Tối Ưu Tỷ Lệ Viewport**:
   - Kiểm soát tỷ lệ khung hình (`max-height: 85vh`, `max-width: 100vw`, `overflow-x: hidden`).
   - Tiêu đề, nút bấm và bảng số liệu luôn nằm gọn trong tầm nhìn, không bị che mất chữ trên cả điện thoại (iPhone, Samsung) lẫn máy tính.
   - Cố định nút cài đặt và huy hiệu mùa giải trong thanh điều hướng, không bị đè chữ lên nhau.

4. **100% Logo và Quốc kỳ sắc nét (402/402 đội)**:
   - 187 Đội tuyển quốc gia với quốc kỳ chuẩn quốc tế từ FlagCDN.
   - 215 Câu lạc bộ từ V.League, Premier League, La Liga, Serie A, Bundesliga, Ligue 1, J-League, K-League, Thai League, CSL,...

5. **Mô phỏng thi đấu đồng thời đa bảng & toàn cầu**:
   - Khi bạn đá 1 trận, tất cả các trận đấu khác trong cùng bảng đấu, các bảng khác và các đội tuyển / CLB khác trên toàn cầu đều thi đấu đồng thời.
   - Cập nhật biến động thứ hạng (▲ tăng, ▼ giảm, - giữ nguyên) theo thời gian thực trên Bảng Xếp Hạng giải đấu và BXH FIFA World Ranking.
