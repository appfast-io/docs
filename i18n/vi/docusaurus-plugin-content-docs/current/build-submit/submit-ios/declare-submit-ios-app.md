---
sidebar_position: 1
---

# Khai báo và đưa ứng dụng lên App Store
---
### Tạo Certificates và P12 ###

Truy cập đường dẫn: **https://developer.apple.com/account/resources/certificates/list**

![img alt](/img/publish-app/iOS/declare-apple-06.jpg)

Chọn Option: iOS Distribution (App Store and Ad Hoc) -> **“Continue"**

![img alt](/img/publish-app/iOS/declare-apple-07.jpg)

Chọn **“Choose File”** để tạo chứng nhận mới -> **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-08.jpg)

### Tạo và export Certificate ###

Truy cập Keychain Access trên macbook để tạo Request a Certificate from a Certificate Authority cho tài khoản của mình Keychain Access > Certificate Assistant > Request a Certificate from a Certificate Authority > Điền thông tin > Sau đó lưu lại trên ổ cứng của bạn

![img alt](/img/publish-app/iOS/declare-apple-09.jpg)

Chọn “**Choose File”** để tạo chứng nhận mới vừa tạo ở trên -> **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-10.jpg)

Download về sẽ được file ios_distribution.cer -> Trên máy Mac, mở file ios_distribution.cer

![img alt](/img/publish-app/iOS/declare-apple-11.jpg)

---
### Tạo Keys để lấy file P8 ###

Ở tab **“Keys”** chọn **“Create a key”**

![img alt](/img/publish-app/iOS/declare-apple-12.jpg)

Đặt tên Key -> Chọn **“Apple Push Notifications service (APNs)”** -> Chọn **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-13.jpg)

Ở tab **“Register a New Key”** -> Chọn **“Register”**

![img alt](/img/publish-app/iOS/declare-apple-14.jpg)

Chọn **“Download”** để tải về file P8, Lưu lại Key của file để xuất bản ứng dụng cho iOS và các lần xuất bản sau

:::caution

**Lưu Ý:** Bạn cần giữ kỹ file P8 này vì Apple chỉ cho phép tải file về 1 lần

:::

![img alt](/img/publish-app/iOS/declare-apple-15.jpg)

Chọn **“Done”** sau khi tải file và lưu Key P8

![img alt](/img/publish-app/iOS/declare-apple-16.jpg)

---
### Tạo Identifiers ###

Ở tab **“Identifiers”** chọn **“Register an App ID”**

![img alt](/img/publish-app/iOS/declare-apple-17.jpg)

Chọn **"App IDs"** -> Chọn **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-18.jpg)

Chọn **"App"** -> Chọn **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-19.jpg)

:::caution

**Lưu ý:** Bạn cần vào Dashboard Appfast Studio copy Bundle ID của dứng dụng

:::

Tab **“Settings”** -> **“iOS Application”** -> Copy link của **“iOS Bundle ID”**

![img alt](/img/publish-app/iOS/declare-apple-20.jpg)

Nhập tên ứng dụng, iOS Bundle ID -> Chọn **“Push Notifications”** và **“Sign in with Apple”** -> Chọn **“Continue"**

![img alt](/img/publish-app/iOS/declare-apple-21.jpg)

Chọn **“Register”**

![img alt](/img/publish-app/iOS/declare-apple-22.jpg)

---
### Tạo Profiles (để lấy file .mobileprovision) ###

Ở tab **“Profiles”** chọn **“Generate a profile”**

![img alt](/img/publish-app/iOS/declare-apple-23.jpg)

Chọn App Store -> Chọn **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-24.jpg)

Chọn App ID -> Chọn **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-25.jpg)

Chọn Certificates -> Chọn **“Continue”**

![img alt](/img/publish-app/iOS/declare-apple-26.jpg)

Đặt tên **“Provisioning Profile Name”** -> Chọn **“Generate”**

![img alt](/img/publish-app/iOS/declare-apple-27.jpg)

Tải xuống file :  .mobileprovision

![img alt](/img/publish-app/iOS/declare-apple-28.jpg)

---
### Tạo Ứng dụng trong tài khoản DEV Appstore ###

Truy cập đường dẫn: **https://appstoreconnect.apple.com/apps**

![img alt](/img/publish-app/iOS/declare-apple-29.jpg)

Chọn **“Add Apps”**

![img alt](/img/publish-app/iOS/declare-apple-30.jpg)

Khai báo các thông tin được yêu cầu cho ứng dụng -> **“Create”**

1. **Platforms:** Ứng dụng bạn tạo chạy trên nền tảng nào?
2. **Name:** Đây là tên ứng dụng của bạn
3. **Primary language:** Ngôn ngữ mặc định mà người dùng nhìn thấy là gì? Nếu ứng dụng của các bạn chỉ phát hành 1 ngôn ngữ cho 1 quốc gia thì bạn chọn ngôn ngữ mà Ứng dụng đang sử dụng. Nếu ứng dụng của bạn phát hành trên toàn thế giới, mình nghĩ bạn nên chọn là Tiếng Anh vì khi ngôn ngữ máy của người dùng không nằm trong danh sách ngôn ngữ các bạn hỗ trợ nó sẽ hiển thị Tiếng Anh.
4. **Bundle ID:** Đây là bundle ID của ứng dụng của bạn. Nó phải khớp với Bundle ID bạn sử dụng trong XCode.
5. **SKU:** Viết tắt của Stock-Keeping Unit nó giúp apple quản lý kho ứng dụng của họ khi bạn upload ứng dụng của bạn lên store. Nó phải là duy nhất nên mình hay dùng trùng với Bundle Id.
6. **User Access:** Quyền truy cập vào quản lý ứng dụng này

![img alt](/img/publish-app/iOS/declare-apple-31.jpg)

Khi khai báo xong, ứng dụng mới của bản sẽ được hiển thị ở danh sách dưới

![img alt](/img/publish-app/iOS/declare-apple-32.jpg)

Chọn Icon App để tới trang quản lý ứng dụng trên Appstore

![img alt](/img/publish-app/iOS/declare-apple-33.jpg)

---
### Lưu tất cả các thông tin bạn đã tạo trước đó vào cùng 1 file ###

Vì đây là thông tin cá nhân của ứng dụng và không thể tạo lại nên bạn cần giữ kĩ các thông tin này để sử dụng cho việc xuất bản và đưa ứng dụng lên store sau này

![img alt](/img/publish-app/iOS/declare-apple-34.jpg)

---
### Khai báo thông tin ứng dụng trên cửa hàng ###

Trước khi đưa file ứng dụng lên Appdtore bạn cần cập nhật đầy đủ thông tin cho ứng dụng

#### App Information ####
1. **Name:** Ứng dụng sẽ sử dụng lại tên bạn đã khai báo lúc tạo
2. **Subtitle:** Tiêu đề mô tả
3. **Category:** Chọn danh mục ứng với ứng dụng của bạn

![img alt](/img/publish-app/iOS/declare-apple-35.jpg)

#### Pricing and Availability ####
1. **Price:** Giá để mua ứng dụng trên Appstore
2. **Availability:** Chọn khu vực được phép mua ứng dụng
3. **iPhone and iPad Apps on Apple Silicon Macs:** Có cho phép dùng ứng dụng trên Apple Silicon Macs không (Chọn được phiên bản)

![img alt](/img/publish-app/iOS/declare-apple-36.jpg)

#### App Distribution Methods #### 
Chọn cách bạn muốn ứng dụng của mình được phân phối cho người dùng

![img alt](/img/publish-app/iOS/declare-apple-37.jpg)

#### App Privacy ####
1. **Privacy Policy:** Thêm đường dẫn về chính sách bảo mật của ứng dụng
2. **Data Types:** Chọn loại giữ liệu

![img alt](/img/publish-app/iOS/declare-apple-38.jpg)