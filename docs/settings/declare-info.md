---
sidebar_position: 1
---
# Khai báo thông tin
---

Trong thanh điều hướng phía bên trái màn hình, hãy tìm và nhấn vào phần **Thông tin xuất bản**. Bạn sẽ được dẫn đến một trang mới cho phép thay đổi các thông tin về project.

![img alt](/img/create-app/configs/200514-thay-doi-cai-dat-project-01.jpeg)

Bạn được khuyến nghị thay đổi 2 thông tin sau:
- **Icon app (1):** Icon quy định là ảnh **PNG không trong suốt (1024px -1024px).**
- **App's Name (2):** Tên hiển thị dưới Icon App trên hệ điều hành.
- **App's Version (3):** Thay đổi thông số **(tăng version) sau mỗi lần build.**
- **Support email (4):** Địa chỉ Email hỗ trợ.
- **Default Language (5):** Chọn ngôn ngữ mặc định cho ứng dụng.
- **Link to Appstore / Google Playstore (6):** Đường dẫn tới **Appstore / CH Play.**

![img alt](/img/create-app/configs/200514-thay-doi-cai-dat-project-02.jpeg)

Sau khi đã thay đổi các thông tin trên, nhấn **Lưu** để hoàn tất quá trình cập nhật thông tin cho ứng dụng.

![img alt](/img/create-app/configs/200514-thay-doi-cai-dat-project-03.jpeg)

:::tip

Nhấn vào logo Appfast (khoanh đỏ ở hình trên) hoặc nhấn vào đây để xem lại các project của bạn. Bạn cũng có thể tạo mới, đổi tên, xóa hoặc xem trước project tại trang này.

:::

---
Hãy đảm bảo rằng bạn đã bổ sung đầy đủ các thông tin cần thiết ở tab **App's Information** trước khi thực hiện việc xuất bản app.

![img alt](/img/publish-app/Android/android1.jpg)

Có 2 phương thức để xuất bản một ứng dụng Android:

- Xuất bản tự động
- Xuất bản thủ công

---
### Xuất bản tự động
Hệ thống sẽ tự động xuất bản Ứng dụng, bạn khôgn cần phải cung cấp thêm thông tin gì nữa.

Ở tab **"Settings"** -> Chọn **Android Application** -> **Next step** (Automate request to Appfast cloud to build your app).

![img alt](/img/publish-app/Android/android2.jpg)

---

### Xuất bản thủ công

:::note

Việc xuất bản thủ công yêu cầu bạn có một số hiểu biết nhất định về việc phát triển ứng dụng (Quy định chung khi đưa ứng dụng lên hệ điều hành, Cung cấp các thông tin thiết yếu, ...).

:::

**Để thực hiện xuất bản thủ công**

Ở tab **"Settings"** -> Chọn **Android Application** -> **Next step** (Manual request to Appfast cloud to build your app).


![img alt](/img/publish-app/Android/android3.jpg)

Cung cấp đầy đủ các thông tin yêu cầu để build App.

![img alt](/img/publish-app/Android/android4.jpg)


:::note

Khi cập nhật ứng dụng này trên Google Play, bạn phải sử dụng những thông tin **keystore** trên.
Hãy lưu giữ những thông tin keystore này cẩn thận, **bạn sẽ không thể cập nhật cho ứng dụng nếu đánh mất chúng**.

:::

Nhấn **Request to Appfast Cloud** để hệ thống tiến hành khởi tạo file cài đặt. Quá trình này có thể mất vài phút.

![img alt](/img/publish-app/Android/android5.jpg)

Sau khi xuất bản thành công ứng dụng, **File Build** sẽ được thêm bào danh sách bên phải **Màn hình xuất bản**. Giờ bạn có thể tải **File Build** về và tiến hành đưa ứng dụng lên các hệ điều hành.

![img alt](/img/publish-app/Android/android6.jpg)
