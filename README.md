# ⚽ Siêu Dự Đoán Bóng Đá (Football Prediction & Simulation)

Ứng dụng mô phỏng trận đấu bóng đá 2D thời gian thực kết hợp hệ thống dự đoán tỷ số, bảng xếp hạng VCK FIFA World Cup & các giải đấu câu lạc bộ hàng đầu thế giới.

🌐 **Website trực tiếp**: [https://efootgi.vercel.app/](https://efootgi.vercel.app/)  
📂 **GitHub Repository**: [https://github.com/Giangha20/Football](https://github.com/Giangha20/Football)

---

## 🌟 Tính Năng Nổi Bật

1. **Hệ thống tăng giảm chỉ số OVR mùa giải (Max 125 OVR)**:
   - 🏆 **Vô địch**: +5 OVR
   - 🥈 **Á quân**: +3 OVR
   - 🥉 **Top 4**: +2 OVR
   - 📈 **Nửa trên BXH**: +1 OVR
   - ⚖️ **Nửa dưới BXH**: -1 đến -3 OVR
   - 🔒 **Giới hạn tuyệt đối**: Không đội nào vượt quá **125 OVR** (`Math.min(125, ...)`).
   - OVR mới ảnh hưởng trực tiếp đến sức mạnh mô phỏng ở mùa giải tiếp theo.
   - Nút **"Bắt đầu mùa giải mới"** tự động chuyển sang mùa tiếp theo (Mùa 2027/2028,...).
   - Nút **"⚡ Hết mùa & Nhận OVR"** giúp mô phỏng nhanh toàn bộ vòng còn lại và nhận bảng tổng kết OVR tức thì.

2. **100% Logo và Quốc kỳ sắc nét (402/402 đội)**:
   - 187 Đội tuyển quốc gia với quốc kỳ chuẩn quốc tế từ FlagCDN.
   - 215 Câu lạc bộ từ V.League, Premier League, La Liga, Serie A, Bundesliga, Ligue 1, J-League, K-League, Thai League, CSL, Indonesia, Malaysia... với logo vector/PNG sắc nét từ CDN chính thức.

3. **Mô phỏng thi đấu đồng thời đa bảng & toàn cầu**:
   - Khi bạn đá 1 trận, tất cả các trận đấu khác trong cùng bảng đấu, các bảng khác (Bảng A, B, C, D...) và các đội tuyển / CLB khác trên toàn cầu đều thi đấu đồng thời.
   - Cập nhật biến động thứ hạng (▲ tăng, ▼ giảm, - giữ nguyên) theo thời gian thực trên Bảng Xếp Hạng giải đấu và BXH FIFA World Ranking.

4. **Vòng Chung Kết FIFA World Cup & Vòng Loại Khu Vực**:
   - Vòng loại 6 châu lục (AFC, UEFA, CONMEBOL, CAF, CONCACAF, OFC).
   - VCK World Cup 48 đội (12 Bảng A -> L) và Vòng loại trực tiếp Knockout (Hiệp phụ + Luân lưu 11m).

5. **Giao diện hiện đại, tối ưu di động**:
   - Font chữ Be Vietnam Pro hỗ trợ 100% tiếng Việt mượt mà.
   - Thiết kế chuẩn di động, nút bấm không bị tràn viền, giao diện tối cao cấp (Dark Mode Glassmorphic).
