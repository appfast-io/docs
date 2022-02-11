---
sidebar_position: 2
---

# Xuất bản iOS app
---

Hãy đảm bảo rằng bạn đã bổ sung đầy đủ các thông tin cần thiết trước khi thực hiện việc xuất bản app.

Có 2 phương thức để xuất bản một ứng dụng iOS:

- Xuất bản thủ công
- Xuất bản qua Expo

---

### Xuất bản thủ công

:::note

Việc xuất bản thủ công yêu cầu bạn có một số hiểu biết nhất định về việc phát triển ứng dụng. 


:::

Sau khi nhấn **Build app iOS**, bạn sẽ thấy một danh sách gợi ý. Nhấn chọn **Build thủ công** để tiếp tục.

![img alt](/img/publish-app/iOS/200608-xuat-ban-ios-01.jpeg)

Sau đó, hãy tải lên các biểu tượng cho ứng dụng. Nếu đã tải lên biểu tượng ứng dụng ở phần Thông tin chung, bạn sẽ thấy chúng xuất hiện ở màn hình này. Sau đó nhấn **Bước tiếp theo.**

![img alt](/img/publish-app/iOS/200608-xuat-ban-ios-02.jpeg)

Bạn cần bổ sung đầy đủ các thông tin về P12 File, P12 Password, P8 File, KeyID và Mobile Provisioning Profile ở dưới. 

- P8 File là file dùng để gửi Push Notification. 
- Mobile Provisioning Profile là nơi chứa Bundle ID, không thể thay đổi. 
- P12 Password và Key ID: hệ thống sẽ tự động điền tài khoản và mật khẩu của Appfast. Bạn có thể thay đổi tùy ý 2 thông tin này.

Sau đó, nhấn **Build app.**

![img alt](/img/publish-app/iOS/200608-xuat-ban-ios-03.jpeg)

Nhấn **Hoàn thành** để hệ thống tiến hành khởi tạo file cài đặt. Quá trình này có thể mất vài phút.

![img alt](/img/publish-app/iOS/200608-xuat-ban-ios-04.jpeg)

---

### Xuất bản qua Expo

:::note

Việc xuất bản qua Expo yêu cầu bạn có tài khoản Expo và hiểu biết về việc sử dụng Expo.

:::

Để thực hiện xuất bản qua Expo, hãy nhấn chọn **Expo build** trong danh sách gợi ý.

![img alt](/img/publish-app/iOS/200608-xuat-ban-ios-05.jpeg)

Nhấn Bước tiếp theo.

![img alt](/img/publish-app/iOS/200608-xuat-ban-ios-06.jpeg)

Sau đó, hãy tải lên tập tin P8. Nếu tập tin này không được cung cấp, ứng dụng của bạn sẽ không thể kích hoạt tính năng thông báo. Sau đó, nhấn **Generate information.**

![img alt](/img/publish-app/iOS/200608-xuat-ban-ios-07.jpeg)

Giờ bạn có thể sử dụng những thông tin được cung cấp để thực hiện việc xuất bản qua Expo. Nhấn **Hoàn thành** để kết thúc quá trình này.

![img alt](/img/publish-app/iOS/200608-xuat-ban-ios-07.jpeg)
