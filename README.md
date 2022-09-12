# Onemount React Skeleton

OM React Skeleton cung cấp đầy đủ công cụ để xây dựng một ứng dụng web dạng Single Page Application và UI được xây dựng trên ReactJS Library. Vui lòng đọc kỹ hướng dẫn. Nếu bạn có bất kỳ vấn đề gì với hướng dẫn này, xin hãy gửi phản hồi tới chúng tôi sẽ hỗ trợ bạn.

## 1. Yêu cầu cấu hình

Phần cứng: Bạn có thể tham gia hack với PC, laptop hoặc thiết bị phần cứng khác, nhưng chúng tôi khuyến cáo sử dụng laptop với hệ điều hành đã được cài đặt. Laptop sẽ tiện lợi hơn cho bạn trong quá trình tham gia hack.

Cấu hình yêu cầu:

- CPU Intel Core i5 với 4 nhân hoặc cao hơn
- 4GB bộ nhớ RAM hoặc cao hơn
- 128GB bộ nhớ SSD hoặc cao hơn

Cấu hình khuyến cáo:

- CPU intel core i8 với 8 nhân hoặc cao hơn
- 8GB bộ nhớ RAM hoặc cao hơn
- 256 GB bộ nhớ SSD hoặc cao hơn

Bạn cần cài đặt hệ điều hành và các phần mềm liệt kê bên dưới

- Windows, Linux hoặc MacOS đều được chấp nhận. Chúng tôi giả sử máy của bạn đã được cài đặt hệ điều hành.
- IDE hoặc Editor: VSCode, Sublime, Vim, Nano, Emacs,...
- NodeJS
- Yarn
- Git client

## 2. Cấu hình phần mềm cần thiết

### 2.1 [NodeJS](https://nodejs.org/en/)

Yêu cầu phiên bản: phiên bản 14.18+ trở lên

Đọc hướng dẫn dưới đây để cài đặt

- [Hướng dẫn cài đặt NodeJS](https://nodejs.org/en/download/)

### 2.2 Yarn

Version: 1.22.18+ trở lên

Đọc hướng dẫn dưới đây để cài đặt

- [Hướng dẫn cài đặt yarn](https://classic.yarnpkg.com/en/docs/install)

### 2.3 Editor

Lựa chọn Editor hoặc IDE mà bạn quen thuộc và code trên đó một cách dễ dàng nhất. Chúng tôi không có một quy trình nào về Editor hoặc IDE. Dưới dây là một vài hướng dẫn cài đặt các Editor hoặc IDE bạn có thể tham khảo

- [Cài đặt VSCode](https://code.visualstudio.com/download)
- [Cài đặt Sublime](https://www.sublimetext.com/download)

### 2.4 Git

[Hướng dẫn cài đặt Git](https://git-scm.com/downloads)

## 3. Setup môi trường

### 3.1 Fork this project to your own project on our gitlab

- Your Gitlab account will be included in the Onboard Email that you received.
- Please add your public key into Gitlab account
- Select the Fork button on this project, and fork it to your account.

### 3.2 Clone forked project to your local machine

Please feel free to using any git client tool that you prefer or use our way to clone the project:

If you're using a Windows machine, please use git-bash to run the following command. Or if you're using MacOsx/Linux, please use Terminal instead.

```bash
git clone https://<git-project-uri>
```

## 4. Cài đặt biến môi trường của dự án

Trước khi sử dụng cần đọc kỹ hướng dẫn sử dụng và cách setup biến môi trường đối với dự án sử dụng Vite theo hướng dẫn bên dưới:

- [Hướng dẫn về setup và sử dụng biến môi trường (environment)](https://vitejs.dev/guide/env-and-mode.html)

Prefix của các biến môi trường đang được thiết lập trong skeleton bắt đầu với ký tự **OM**. Để chỉnh sửa prefix vui lòng xem kỹ **hướng dẫn bên trên** và config nó trong file **vite.config.js**.

Skeleton hiện tại có cấu hình một biến môi trường để cài đặt cho **BASE URL API** là **OM_BASE_URL** được đặt trong file môi trường **.env**. Bạn có thể thêm hoặc sửa xoá theo nhu cầu của dự án.

File môi trường **.env.example** là một file môi trường mẫu bạn có thể xoá nếu cần. 

Các thiết lập nâng cao khác vui lòng đọc hướng dẫn bên trên.

## 5. Form cấu hình biến môi trường

Với cách trên bạn cần cấu hình biến môi trường ở file .env và phải build lại project. Để thuận tiện cho việc thay đổi biến môi trường, skeleton có cung cấp 1 form cho phép cấu hình lại biến môi trường **BASE URL**. Giá trị này sẽ được lưu trữ ở trong local storage của trình duyệt.

Giá trị **BASE URL** sẽ được ưu tiên lấy từ local storage của trình duyệt nếu không có nó sẽ lấy giá trị mặc định được định nghĩa trong file .env

- Cách thay đổi biến môi trường

Xác định địa chỉ mà dự án bạn đang chạy. 
Ví dụ khi chạy trên local môi trường dev địa chị website mặc định là: http://localhost:3000

1. Truy cập vào đường link: <địa chỉ web app>/config-env
2. Update giá trị biến môi trường BaseURL
3. Click vào nút Change, nếu update thành công hệ thống sẽ thông báo cho bạn biết.
4. Muốn reset về giá trị mặc định click vào Reset

## 6. Hướng dẫn chạy môi trường phát triển

Thực hiện các câu lệnh sau (trên CMD/Powershell/git-bash/terminal)

Các hướng dẫn có mô tả cho 2 trường hợp sử dụng: Yarn hoặc NPM

```bash
cd <your_project>

// Cài đặt các dependencies
// Yarn
yarn intall
// Hoặc NPM
npm install

// Khởi chạy môi trường dev - sử dụng trong quá trình bạn hack
// Yarn
yarn dev
// Hoặc NPM
npm run dev

// Kết quả bạn sẽ nhìn thấy sẽ như dưới:
// ➜  Local:   http://127.0.0.1:3000/
// ➜  Network: use --host to expose
```

Sau khi bạn đã khởi chạy môi trường dev. Kiểm tra lại bằng cách

- Mở trình duyệt
- Truy cập vào địa chỉ: http://localhost:3000 (tuy nhiên nếu bạn thay đổi port thì sử dụng port thay thế)
- Kết quả sẽ hiển thị một trang web của skeleton với Logo OneMount và một ví dụ về **Button Counter**

## 7. Hướng dẫn build dự án

Sau khi bạn phát triển dự án xong và muốn deploy lên một webserver hoặc đơn giản preview trên môi trường local thì làm theo các hướng dẫn dưới. Tương tự phần trên, Thực hiện các câu lệnh sau (trên CMD/Powershell/git-bash/terminal) và các hướng dẫn có mô tả cho 2 trường hợp sử dụng: Yarn hoặc NPM

```
cd <your_project>

// Build Project
// Yarn
yarn build
// Hoặc NPM
npm run build
```

Sau khi build xong thì code được build được lưu trữ ở đường dẫn `<rootDir>/dist`.

Bạn có thể deploy code build trên các webserver bất kỳ hoặc có thể preview dữ liệu vừa build theo hướng dẫn bên dưới: 

```
//Preview project
// Yarn
yarn preview
// Hoặc NPM
npm run preview

// Sau khi chạy lệnh thì màn hình shell sẽ xuất hiện dạng
// ➜  Local:   http://127.0.0.1:3000/
// ➜  Network: use --host to expose
```

Kiểm tra:

- Mở trình duyệt
- Truy cập vào địa chỉ: http://localhost:3000 (tuy nhiên nếu bạn thay đổi port thì sử dụng port thay thế)
- Kết quả sẽ hiển thị một trang web của skeleton với Logo OneMount và một ví dụ về **Button Counter**

## 8. Các công nghệ được sử dụng trong skeleton

Onemount React Skeleton là một skeleton Single Page Application sử dụng ReactJS + Vite

**Ngôn ngữ lập trình**: Javascript

**Build Tool**: Sử dụng [Vite](https://vitejs.dev/) - một frontend tooling hỗ trợ: bundle, transpiler, development server và build tool.

**Framework**: [ReactJS](https://reactjs.org/)

**UI Library**: [Material UI](https://mui.com/material-ui/getting-started/overview/)

**Router**:[react-router-dom v6](https://reactrouter.com/)

**Linting**: [ESLint](https://eslint.org/)

**Styling**: Sử dụng CSS thuần. Đã include [Normalize.css](https://necolas.github.io/normalize.css/)

**Request API**: Sử dụng [Axios](https://github.com/axios/axios)

**Other**: [prop-types](https://www.npmjs.com/package/prop-types) type checking cho React Component

## 9. Cấu trúc dự án

```
<root>
    |
    | [public](https://vitejs.dev/guide/assets.html#the-public-directory) (các file assets tĩnh có thể ở sẽ tự động được copy sang thư mục dist/assets)
    |
    | src
        |
        | apis (lưu trữ define api gọi lên server theo từng model. Ex: user, booking,...)
        |
        | assets (lưu trữ assets như image, style css,...  chung dự án)
        |
        | components (lưu các component dùng chung)
        |
        | containers (lưu trữ các [smart components](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43) để handle logic, lấy dữ liệu...)
        |
        | pages (lưu trữ các page)
        |     | About (Ví dụ: About page)
        |       |
        |       | About.js page. Tuỳ theo cách thiết kế có thể để file index.js...
        |       | các file tương ứng như style, component page, index...
        |
        | types: define types trong dự án
        |
        | utils (lưu trữ file utils)
              |
              | axios (cấu hình axios instance dùng cho dự án)
```

## 10. Request API lên server

Skeleton đã config một sample axios instance.

Để sử dụng các axios instance thì có thể import chúng từ: `utils/index` nó sẽ trả về 2 instance: axiosInstance (public request) và privateInstance (private request)

- public request cho phép gọi các request không cần authen
- private request cần cho các request cần xác thực. Để sử dụng private request cần xử lý truyền thêm các thành phần cần thiết vào header. 

Để config việc authen thì chỉnh sửa ở file: `utils/getAxiosInstance.ts` phần handle request interceptors và thêm thông tin xác thực cần thiết.

## 11. Cơ chế chuyển trang (route)

Dự án này sử dụng react-router-dom v6 để handle việc chuyển trang. Bạn có thể đọc tài liệu của [react-router-dom](https://reactrouter.com/docs/en/v6)

Về cách tổ chức trang thì các page được tổ chức trong folder **pages**. Mỗi page tuỳ vào mức độ phức tạp có thể phân chia như mô tả trong cấu trúc dự án

## 12. Styling
Dự án này sử dụng css. Để sử dụng cần import vào component
# OM_hack2hire_booking_app
# OM_hack2hire_booking_app
