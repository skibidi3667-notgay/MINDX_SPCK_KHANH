# KHANH FASHION - Tài liệu demo sản phẩm

## 1. Tổng quan sản phẩm

KHANH FASHION là website bán hàng thời trang được xây dựng bằng HTML, CSS và JavaScript thuần. Website mô phỏng các chức năng cơ bản của một trang thương mại điện tử: xem danh sách sản phẩm, xem chi tiết, thêm vào giỏ hàng, đặt hàng và theo dõi tiến trình đơn hàng.

Mục tiêu của sản phẩm là giúp người dùng có thể duyệt sản phẩm, chọn sản phẩm yêu thích và thực hiện luồng mua hàng đơn giản.

## 2. Các trang chính trong website
### Trang đăng ký

File: `register/register.html`

Tính năng:
- Cho phép người dùng tạo tài khoản mới.
- Nhập họ tên, email, mật khẩu và xác nhận mật khẩu.
- Kiểm tra mật khẩu nhập lại có khớp không.
- Kiểm tra email đã tồn tại trong `localStorage` chưa.
- Lưu tài khoản mới vào `localStorage`.
- Sau khi đăng ký thành công, chuyển sang trang đăng nhập.

### Trang đăng nhập

File: `login/login.html`

Tính năng:
- Cho phép người dùng đăng nhập bằng email và mật khẩu.
- Lấy danh sách tài khoản từ `localStorage`.
- Nếu thông tin đúng, lưu trạng thái đăng nhập và thông tin người dùng hiện tại.
- Nếu sai email hoặc mật khẩu, hiển thị thông báo lỗi.

### Trang chủ

File: `index/index.html`

Tính năng:
- Hiển thị thương hiệu KHANH FASHION.
- Có banner giới thiệu bộ sưu tập mới.
- Có nút "Mua ngay" dẫn sang trang sản phẩm.
- Thanh điều hướng tới trang sản phẩm, giỏ hàng và đăng nhập.
- Nếu người dùng đã đăng nhập, menu sẽ hiển thị lời chào, nút đăng xuất và nút xóa tài khoản.



### Trang danh sách sản phẩm

File: `products/products.html`

Tính năng:
- Hiển thị danh sách sản phẩm từ file `products/products.json`.
- Giả lập gọi API bằng `fetch()` kết hợp `setTimeout()`.
- Có hiệu ứng loading spinner khi đang tải dữ liệu.
- Hiển thị tổng số sản phẩm và tổng số lượt bán.
- Có nhiều danh mục sản phẩm: nổi bật, nam, nữ, streetwear, phụ kiện.
- Có bộ lọc theo danh mục.
- Có ô tìm kiếm sản phẩm.
- Mỗi sản phẩm có ảnh, tên, giá, giá cũ, danh mục, rating, số lượng đã bán và tồn kho.
- Có nút xem chi tiết sản phẩm.
- Có nút thêm nhanh sản phẩm vào giỏ hàng.
- Hiển thị số lượng sản phẩm trong giỏ hàng trên thanh menu.

### Trang chi tiết sản phẩm

File: `details/product.html`

Tính năng:
- Lấy id sản phẩm từ URL dạng `product.html?id=aothun-basic`.
- Đọc dữ liệu sản phẩm từ `products.json`.
- Hiển thị ảnh, tên, giá, giá cũ, mô tả, chất liệu, tồn kho và đánh giá.
- Cho phép chọn màu sắc, kích cỡ và số lượng.
- Có danh sách điểm nổi bật của sản phẩm.
- Có đánh giá giả lập từ khách hàng.
- Có nút "Thêm vào giỏ".
- Có nút "Mua ngay" để chuyển sang giỏ hàng.
- Nếu id sản phẩm không đúng, hiển thị thông báo không tìm thấy sản phẩm.

### Trang giỏ hàng

File: `cart/cart.html`

Tính năng:
- Hiển thị các sản phẩm đã thêm vào giỏ hàng.
- Dữ liệu giỏ hàng được lưu trong `localStorage`.
- Có thể tăng hoặc giảm số lượng sản phẩm.
- Có thể xóa sản phẩm khỏi giỏ hàng.
- Tính tạm tính, phí vận chuyển và tổng tiền.
- Có form nhập thông tin người nhận: tên, số điện thoại, địa chỉ.
- Khi nhấn "Mua ngay", website tạo đơn hàng và chuyển sang trang theo dõi đơn.

### Trang theo dõi đơn hàng

File: `order/order.html`

Tính năng:
- Hiển thị mã đơn hàng, ngày đặt hàng và thông tin người nhận.
- Hiển thị danh sách sản phẩm trong đơn.
- Hiển thị tổng tiền thanh toán.
- Hiển thị tiến trình đơn hàng theo các bước:
  1. Người bán nhận đơn
  2. Đóng gói đơn hàng
  3. Giao cho đơn vị vận chuyển
  4. Đang giao hàng
  5. Giao hàng thành công
- Có nút cập nhật bước tiếp theo để mô phỏng trạng thái đơn hàng thay đổi.
- Nếu chưa có đơn hàng, hiển thị thông báo và nút quay lại mua sắm.

## 3. Dữ liệu sản phẩm

File: `products/products.json`

Dữ liệu sản phẩm được lưu dưới dạng JSON. Mỗi sản phẩm có các thông tin như:
- `id`: mã sản phẩm, dùng để mở trang chi tiết.
- `name`: tên sản phẩm.
- `price`: giá hiện tại.
- `oldPrice`: giá cũ.
- `img`: ảnh sản phẩm.
- `category`: mã danh mục.
- `categoryName`: tên danh mục hiển thị.
- `gender`: giới tính hoặc nhóm người dùng phù hợp.
- `material`: chất liệu.
- `colors`: danh sách màu.
- `sizes`: danh sách size.
- `stock`: số lượng tồn kho.
- `rating`: điểm đánh giá.
- `sold`: số lượng đã bán.
- `description`: mô tả sản phẩm.
- `features`: điểm nổi bật của sản phẩm.
- `reviews`: đánh giá giả lập từ khách hàng.

## 4. Các kiến thức đã sử dụng

### HTML

Kiến thức liên quan:
- Cấu trúc cơ bản của một trang HTML.
- Sử dụng thẻ `nav`, `header`, `main`, `section`, `article`, `form`.
- Sử dụng form nhập dữ liệu người dùng.
- Sử dụng thẻ `input`, `select`, `textarea`, `button`.
- Gắn file CSS bằng thẻ `link`.
- Gắn file JavaScript bằng thẻ `script`.
- Sử dụng `meta charset="UTF-8"` để hiển thị tiếng Việt đúng.

### CSS

Kiến thức liên quan:
- Reset CSS cơ bản bằng `*`.
- Dùng `flexbox` để căn chỉnh navbar, button và layout nhỏ.
- Dùng `CSS grid` để tạo danh sách sản phẩm, layout chi tiết và giỏ hàng.
- Responsive bằng `@media`.
- Dùng `border-radius`, `box-shadow`, `transition` để UI đẹp hơn.
- Dùng `aspect-ratio` và `object-fit` để ảnh sản phẩm không bị méo.
- Dùng animation `@keyframes` để tạo loading spinner.
- Dùng Google Fonts và thống nhất font Inter cho toàn bộ website.

### JavaScript

Kiến thức liên quan:
- Lấy phần tử HTML bằng `document.getElementById()`.
- Lắng nghe sự kiện bằng `addEventListener()`.
- Xử lý sự kiện click, input và submit form.
- Dùng `event.preventDefault()` để chặn reload form.
- Dùng `fetch()` để đọc dữ liệu từ file JSON.
- Dùng `Promise`, `.then()`, `.catch()`, `.finally()`.
- Dùng `setTimeout()` để giả lập thời gian gọi API.
- Render HTML động bằng template string.
- Dùng `map()`, `filter()`, `find()`, `some()`, `reduce()`.
- Dùng `URLSearchParams` để lấy id sản phẩm từ URL.
- Dùng `Number()` để xử lý số lượng sản phẩm.
- Dùng `toLocaleString("vi-VN")` để format tiền Việt Nam.

### JSON

Kiến thức liên quan:
- JSON là định dạng lưu dữ liệu dạng key-value.
- Website dùng `products.json` như một nguồn dữ liệu giả lập API.
- JavaScript có thể đọc JSON bằng `fetch()` và chuyển về object bằng `response.json()`.

### LocalStorage

Kiến thức liên quan:
- `localStorage` dùng để lưu dữ liệu trên trình duyệt.
- Dữ liệu vẫn còn sau khi reload trang.
- Website dùng `localStorage` để lưu:
  - Danh sách tài khoản: `users`
  - Trạng thái đăng nhập: `isLogin`
  - Người dùng hiện tại: `currentUser`
  - Giỏ hàng: `cart`
  - Đơn hàng hiện tại: `currentOrder`
- Vì `localStorage` chỉ lưu chuỗi, cần dùng:
  - `JSON.stringify()` để chuyển object/array thành chuỗi.
  - `JSON.parse()` để chuyển chuỗi về object/array.

### Luồng dữ liệu trong website

Luồng sản phẩm:
1. Trang sản phẩm gọi `fetch("products.json")`.
2. JavaScript nhận danh sách sản phẩm.
3. Render sản phẩm ra giao diện.
4. Người dùng chọn xem chi tiết hoặc thêm giỏ hàng.

Luồng giỏ hàng:
1. Người dùng thêm sản phẩm vào giỏ.
2. Sản phẩm được lưu vào `localStorage` với key `cart`.
3. Trang giỏ hàng đọc `cart` và render danh sách.
4. Người dùng cập nhật số lượng hoặc xóa sản phẩm.

Luồng đặt hàng:
1. Người dùng nhập thông tin nhận hàng.
2. Website tạo object đơn hàng.
3. Đơn hàng được lưu vào `localStorage` với key `currentOrder`.
4. Giỏ hàng được xóa.
5. Người dùng được chuyển sang trang theo dõi đơn hàng.

## 5. Điểm học sinh có thể trình bày khi demo

Gợi ý kịch bản demo:
1. Giới thiệu website KHANH FASHION là website bán hàng thời trang.
2. Mở trang chủ và nói về thanh menu, banner, nút mua ngay.
3. Chuyển sang trang sản phẩm.
4. Trình bày dữ liệu được lấy từ `products.json` bằng `fetch()`.
5. Demo loading spinner.
6. Demo lọc danh mục và tìm kiếm sản phẩm.
7. Nhấn vào một sản phẩm để mở trang chi tiết.
8. Demo chọn màu, size, số lượng.
9. Nhấn thêm vào giỏ hàng.
10. Mở giỏ hàng, tăng giảm số lượng, xóa sản phẩm nếu cần.
11. Nhập thông tin nhận hàng và nhấn mua ngay.
12. Trình bày trang theo dõi đơn hàng và bấm cập nhật trạng thái.
13. Giải thích dữ liệu được lưu bằng `localStorage`.

## 6. Câu hỏi BGK có thể hỏi và gợi ý trả lời

### Câu hỏi về tính năng

1. Website của em có những chức năng chính nào?

Gợi ý trả lời: Website có trang chủ, đăng ký, đăng nhập, danh sách sản phẩm, lọc và tìm kiếm sản phẩm, chi tiết sản phẩm, giỏ hàng, đặt hàng và theo dõi tiến trình đơn hàng.

2. Sản phẩm trên trang được lấy từ đâu?

Gợi ý trả lời: Sản phẩm được lưu trong file `products.json`, sau đó JavaScript dùng `fetch()` để đọc dữ liệu và render ra giao diện.

3. Vì sao em dùng file JSON thay vì viết sản phẩm trực tiếp trong HTML?

Gợi ý trả lời: Dùng JSON giúp dữ liệu tách khỏi giao diện. Khi muốn thêm sản phẩm, chỉ cần thêm object mới trong file JSON, không cần sửa nhiều HTML.

4. Tính năng tìm kiếm hoạt động như thế nào?

Gợi ý trả lời: Khi người dùng nhập từ khóa, JavaScript lấy giá trị input, chuyển về chữ thường rồi dùng `filter()` để lọc sản phẩm theo tên hoặc danh mục.

5. Tính năng lọc danh mục hoạt động như thế nào?

Gợi ý trả lời: Mỗi nút danh mục có `data-category`. Khi click, JavaScript lưu danh mục đang chọn và render lại danh sách sản phẩm phù hợp.

6. Khi thêm sản phẩm vào giỏ hàng, dữ liệu đi đâu?

Gợi ý trả lời: Sản phẩm được lưu vào `localStorage` với key là `cart`. Nếu sản phẩm đã có trong giỏ thì tăng số lượng, nếu chưa có thì thêm mới.

7. Trang chi tiết biết cần hiển thị sản phẩm nào bằng cách nào?

Gợi ý trả lời: Trang chi tiết lấy id từ URL bằng `URLSearchParams`, ví dụ `product.html?id=aothun-basic`, sau đó tìm sản phẩm có id tương ứng trong JSON.

8. Trang theo dõi đơn hàng hoạt động như thế nào?

Gợi ý trả lời: Khi người dùng mua hàng, website tạo object đơn hàng và lưu vào `localStorage`. Trang theo dõi đơn đọc đơn hàng đó và hiển thị các bước xử lý.

9. Vì sao có nút cập nhật bước tiếp theo ở trang đơn hàng?

Gợi ý trả lời: Vì đây là website demo nên nút đó dùng để giả lập quá trình đơn hàng thay đổi trạng thái từ nhận đơn đến giao hàng thành công.

10. Website có responsive không?

Gợi ý trả lời: Có. CSS dùng `grid`, `flexbox` và `@media` để giao diện phù hợp hơn trên màn hình nhỏ.

### Câu hỏi về kiến thức HTML/CSS

1. Thẻ `meta charset="UTF-8"` dùng để làm gì?

Gợi ý trả lời: Dùng để trình duyệt hiểu file đang dùng mã hóa UTF-8, giúp tiếng Việt hiển thị đúng.

2. Sự khác nhau giữa `id` và `class` là gì?

Gợi ý trả lời: `id` thường dùng cho một phần tử duy nhất, còn `class` có thể dùng cho nhiều phần tử để tái sử dụng CSS hoặc chọn nhiều phần tử.

3. Khi nào dùng `flexbox`, khi nào dùng `grid`?

Gợi ý trả lời: `flexbox` phù hợp căn chỉnh theo một chiều như navbar hoặc button. `grid` phù hợp bố cục nhiều hàng nhiều cột như danh sách sản phẩm.

4. `object-fit: cover` dùng để làm gì?

Gợi ý trả lời: Giúp ảnh lấp đầy khung mà không bị méo, phần thừa sẽ được cắt bớt.

5. `@media` dùng để làm gì?

Gợi ý trả lời: Dùng để viết CSS responsive, thay đổi giao diện theo kích thước màn hình.

### Câu hỏi về JavaScript

1. `addEventListener()` dùng để làm gì?

Gợi ý trả lời: Dùng để lắng nghe sự kiện của người dùng như click, nhập input hoặc submit form.

2. Vì sao cần `event.preventDefault()` trong form?

Gợi ý trả lời: Vì mặc định form sẽ reload trang khi submit. Dùng `preventDefault()` để chặn reload và tự xử lý bằng JavaScript.

3. `fetch()` là gì?

Gợi ý trả lời: `fetch()` là hàm dùng để gửi request và lấy dữ liệu. Trong website này, em dùng `fetch()` để đọc file `products.json`.

4. `map()` dùng để làm gì?

Gợi ý trả lời: `map()` dùng để biến một mảng dữ liệu thành một mảng mới. Trong dự án, em dùng `map()` để tạo HTML cho từng sản phẩm.

5. `filter()` dùng để làm gì?

Gợi ý trả lời: `filter()` dùng để lọc các phần tử trong mảng theo điều kiện, ví dụ lọc sản phẩm theo danh mục hoặc từ khóa.

6. `find()` khác gì `filter()`?

Gợi ý trả lời: `find()` trả về phần tử đầu tiên phù hợp, còn `filter()` trả về một mảng gồm tất cả phần tử phù hợp.

7. `reduce()` dùng để làm gì trong giỏ hàng?

Gợi ý trả lời: Em dùng `reduce()` để tính tổng tiền bằng cách cộng giá nhân số lượng của từng sản phẩm.

8. Template string là gì?

Gợi ý trả lời: Template string dùng dấu backtick để viết chuỗi nhiều dòng và chèn biến bằng `${}`. Em dùng nó để render HTML động.

9. Vì sao cần kiểm tra dữ liệu khi đăng ký?

Gợi ý trả lời: Để tránh tạo tài khoản lỗi, ví dụ mật khẩu nhập lại không khớp hoặc email đã tồn tại.

10. Vì sao cần chuyển email về chữ thường khi đăng ký/đăng nhập?

Gợi ý trả lời: Để tránh trường hợp cùng một email nhưng viết hoa viết thường khác nhau bị coi là hai tài khoản khác nhau.

### Câu hỏi về LocalStorage

1. `localStorage` là gì?

Gợi ý trả lời: `localStorage` là bộ nhớ trong trình duyệt, dùng để lưu dữ liệu dạng chuỗi và dữ liệu vẫn còn sau khi reload trang.

2. `localStorage` khác gì biến thông thường?

Gợi ý trả lời: Biến thông thường mất khi reload trang. `localStorage` vẫn lưu dữ liệu cho đến khi mình xóa.

3. Vì sao cần `JSON.stringify()`?

Gợi ý trả lời: Vì `localStorage` chỉ lưu chuỗi, nên object hoặc array phải được chuyển thành chuỗi trước khi lưu.

4. Vì sao cần `JSON.parse()`?

Gợi ý trả lời: Khi lấy dữ liệu từ `localStorage`, dữ liệu đang là chuỗi. Cần `JSON.parse()` để chuyển lại thành object hoặc array.

5. Dữ liệu trong `localStorage` có an toàn tuyệt đối không?

Gợi ý trả lời: Không. Đây chỉ là cách lưu dữ liệu demo ở phía trình duyệt. Với website thật, tài khoản và đơn hàng cần lưu ở server/database và mật khẩu phải được mã hóa.

### Câu hỏi mở rộng

1. Nếu làm website thật, em sẽ cải thiện gì?

Gợi ý trả lời:
- Thêm backend và database.
- Mã hóa mật khẩu.
- Thêm thanh toán online.
- Thêm quản lý đơn hàng cho admin.
- Thêm phân trang sản phẩm.
- Thêm validate form kỹ hơn.
- Thêm thông báo đẹp thay vì `alert()`.

2. Vì sao website hiện tại gọi là mock data?

Gợi ý trả lời: Vì dữ liệu chưa lấy từ server thật, mà được giả lập bằng file JSON local.

3. Nếu muốn thêm sản phẩm mới thì làm thế nào?

Gợi ý trả lời: Thêm một object mới vào `products/products.json` với đầy đủ các trường như `id`, `name`, `price`, `img`, `category`, `colors`, `sizes`.

4. Nếu muốn giỏ hàng không mất khi tắt trình duyệt thì hiện tại đã làm được chưa?

Gợi ý trả lời: Có, vì giỏ hàng đang lưu trong `localStorage`. Tuy nhiên nếu người dùng xóa dữ liệu trình duyệt hoặc dùng máy khác thì sẽ không còn.

5. Nếu nhiều người dùng cùng đặt hàng thì website hiện tại có phân biệt được không?

Gợi ý trả lời: Chưa tốt, vì dữ liệu chỉ lưu local trên một trình duyệt. Website thật cần backend để lưu đơn hàng theo từng tài khoản.

## 7. Các điểm cần lưu ý khi trình bày

- Nói rõ đây là sản phẩm cuối khóa dành cho người mới học nên dùng HTML, CSS và JavaScript thuần.
- Nhấn mạnh đã tách dữ liệu sản phẩm ra file JSON để dễ quản lý.
- Nhấn mạnh `localStorage` chỉ dùng cho demo, không thay thế database thật.
- Khi demo, nên mở DevTools phần Application > Local Storage để cho BGK xem dữ liệu `cart`, `users`, `currentOrder`.
- Nếu BGK hỏi về bảo mật, cần nói rõ mật khẩu hiện đang lưu đơn giản vì đây là demo, website thật phải mã hóa mật khẩu ở server.
- Nếu chữ tiếng Việt bị lỗi, cần kiểm tra file đã lưu UTF-8 và HTML có `meta charset="UTF-8"`.

