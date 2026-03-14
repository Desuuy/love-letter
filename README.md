# Love Letter Web 💌

Một mini–website tỏ tình / mời đi chơi, gồm:
- `index.html`: phong bì mở thư + lá thư lớn.
- `ask-out.html`: trang mời đi chơi.
- `yes-no.html`: trang trả lời vui với nút Yes/No.

## Cách chạy trên máy Windows

1. Cài bất kỳ trình duyệt hiện đại nào (Chrome, Edge, Firefox…).  
2. Mở PowerShell trong thư mục chứa dự án, ví dụ:
   ```bash
   cd ".\Users\Letter"
   start ".\index.html"
   ```
3. Trình duyệt sẽ mở trang `index.html`, từ đó có nút/link để đi hết flow.

## Cấu trúc file chính

- `index.html` – Trang mở đầu với phong bì và lá thư lớn.
- `ask-out.html` – Lời mời đi chơi, có nút sang trang Yes/No.
- `yes-no.html` – Hai nút lựa chọn, nút “No” chạy trốn vui vẻ.
- `love letter 2.css` – Toàn bộ style phong bì, tim bay, nút bấm.
- `love-letter-2.js` – Điều khiển mở/đóng phong bì và popup lá thư.

## Chỉnh sửa nội dung thư

- Chỉnh **chữ trên lá thư nhỏ trong phong bì** tại phần:
  - `index.html` → các dòng trong `<div class="letter">` (`line2`, `line3`, `line4`).
- Chỉnh **nội dung lá thư lớn** tại:
  - `index.html` → khối `<div class="full-letter-body">…</div>`.

Sau khi sửa, chỉ cần refresh (F5) trong trình duyệt để xem kết quả.# love-letter
