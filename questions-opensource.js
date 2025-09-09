// Open Source Software quiz questions - Câu hỏi về Phần mềm nguồn mở
const openSourceQuestionBank = [
  // CHƯƠNG 1: TỔNG QUAN VỀ PHẦN MỀM MÃ NGUỒN MỞ
  {
    id: 1,
    question: "Giải thích về giấy phép Copyright và nêu ví dụ về các loại phần mềm hoặc tài nguyên sử dụng giấy phép này.",
    options: [
      "A. Giấy phép bảo vệ quyền sở hữu trí tuệ, ví dụ Microsoft Windows",
      "B. Giấy phép cho phép sao chép tự do, ví dụ Linux",
      "C. Giấy phép chỉ dành cho phần cứng, ví dụ CPU Intel",
      "D. Giấy phép không tồn tại trong phần mềm"
    ],
    correct: 0,
    explanation: "Copyright bảo vệ tác giả bằng cách hạn chế sao chép, phân phối mà không có phép; áp dụng cho phần mềm thương mại đóng như Adobe Photoshop."
  },
  {
    id: 2,
    question: "Phân biệt giữa giấy phép Copyleft và giấy phép Copyright. Giấy phép Copyleft thường được áp dụng trong trường hợp nào?",
    options: [
      "A. Copyleft yêu cầu chia sẻ mã sửa đổi, áp dụng cho phần mềm tự do như GPL",
      "B. Copyleft giống Copyright, áp dụng cho phần mềm đóng",
      "C. Copyleft không yêu cầu chia sẻ, áp dụng cho tài nguyên thương mại",
      "D. Copyleft chỉ dành cho hình ảnh"
    ],
    correct: 0,
    explanation: "Copyright hạn chế quyền, trong khi Copyleft đảo ngược để đảm bảo tự do; thường dùng cho dự án nguồn mở muốn giữ tính mở."
  },
  {
    id: 3,
    question: "Giải thích vai trò của giấy phép Creative Commons trong việc phát triển và chia sẻ nội dung mở.",
    options: [
      "A. Cho phép chia sẻ nội dung với điều kiện cụ thể, thúc đẩy sáng tạo mở",
      "B. Cấm chia sẻ hoàn toàn, giống Copyright",
      "C. Chỉ dành cho phần mềm, không cho nội dung",
      "D. Yêu cầu trả phí cho mọi sử dụng"
    ],
    correct: 0,
    explanation: "Creative Commons cung cấp các giấy phép linh hoạt cho ảnh, video, tài liệu, giúp cộng đồng chia sẻ mà vẫn bảo vệ quyền tác giả."
  },
  {
    id: 4,
    question: "Trình bày về các biểu tượng của Copyright, Copyleft, và Creative Commons. Ý nghĩa của từng biểu tượng này là gì?",
    options: [
      "A. (C) bảo vệ quyền, ngược (C) yêu cầu chia sẻ, CC cho phép tùy chỉnh",
      "B. (C) cho chia sẻ, ngược (C) bảo vệ, CC cho phần cứng",
      "C. Tất cả giống nhau, biểu tượng không quan trọng",
      "D. CC là biểu tượng cấm sử dụng"
    ],
    correct: 0,
    explanation: "(C) đại diện cho quyền sở hữu, ngược (C) nhấn mạnh tự do sao chép, CC cho phép chọn điều kiện như attribution hoặc non-commercial."
  },
  {
    id: 5,
    question: "Giấy phép sử dụng phần mềm là gì và tại sao nó lại quan trọng đối với cả nhà phát triển và người sử dụng?",
    options: [
      "A. Hợp đồng quy định quyền sử dụng, bảo vệ quyền lợi cả hai bên",
      "B. Chỉ là tài liệu quảng cáo, không quan trọng",
      "C. Chỉ bảo vệ người dùng, không cho nhà phát triển",
      "D. Luôn miễn phí và không ràng buộc"
    ],
    correct: 0,
    explanation: "Giấy phép xác định quyền sao chép, sửa đổi; quan trọng để nhà phát triển bảo vệ sản phẩm và người dùng tránh vi phạm pháp lý."
  },
  {
    id: 6,
    question: "Nêu ra điểm khác biệt giữa phần mềm tự do nguồn mở và phần mềm nguồn đóng về mặt giấy phép sử dụng.",
    options: [
      "A. Nguồn mở cho phép sửa đổi, nguồn đóng hạn chế",
      "B. Nguồn mở luôn trả phí, nguồn đóng miễn phí",
      "C. Không có khác biệt về giấy phép",
      "D. Nguồn đóng cho phép chia sẻ mã nguồn"
    ],
    correct: 0,
    explanation: "Phần mềm tự do (FOSS) như GPL cho phép xem/sửa mã, trong khi nguồn đóng như Copyright cấm truy cập mã nguồn."
  },
  {
    id: 7,
    question: "Phân tích những hạn chế của người sử dụng đối với phần mềm thương mại. Tại sao họ không được phép chỉnh sửa mã nguồn?",
    options: [
      "A. Không được sửa mã vì giấy phép đóng bảo vệ sở hữu trí tuệ",
      "B. Được sửa mã tự do, không hạn chế",
      "C. Chỉ hạn chế với phần mềm miễn phí",
      "D. Hạn chế chỉ về giá cả"
    ],
    correct: 0,
    explanation: "Phần mềm thương mại dùng Copyright để ngăn chặn sao chép/sửa, bảo vệ lợi nhuận và bí mật kinh doanh."
  },
  {
    id: 8,
    question: "So sánh phần mềm miễn phí và phần mềm trả phí một phần. Điều gì khiến chúng khác biệt so với phần mềm mã nguồn mở?",
    options: [
      "A. Miễn phí (freeware) và trả phí một phần (shareware) thường đóng mã, không như mã mở",
      "B. Tất cả đều mở mã nguồn",
      "C. Freeware luôn mở, shareware đóng",
      "D. Không khác biệt"
    ],
    correct: 0,
    explanation: "Freeware miễn phí nhưng không mở mã, shareware thử nghiệm; mã mở cho phép sửa/change."
  },
  {
    id: 9,
    question: "Trình bày về giấy phép GNU GPL và sự khác biệt giữa các phiên bản của nó.",
    options: [
      "A. GPL yêu cầu chia sẻ, v3 thêm bảo vệ chống patent",
      "B. GPL giống tất cả phiên bản, không khác",
      "C. GPL chỉ dành cho phần cứng",
      "D. GPL cấm chia sẻ"
    ],
    correct: 0,
    explanation: "GPL v1/v2 cơ bản copyleft, v3 thêm điều khoản chống DRM và patent để bảo vệ tự do tốt hơn."
  },
  {
    id: 10,
    question: "Tổ chức nào chịu trách nhiệm phát triển và quản lý các giấy phép như GPL và LGPL? Vai trò của tổ chức này là gì?",
    options: [
      "A. Free Software Foundation (FSF), thúc đẩy phần mềm tự do",
      "B. Microsoft, quản lý phần mềm đóng",
      "C. OSI, chỉ phê duyệt nguồn mở",
      "D. Creative Commons, cho nội dung"
    ],
    correct: 0,
    explanation: "FSF tạo và quản lý GPL/LGPL, vai trò bảo vệ 4 quyền tự do và thúc đẩy triết lý phần mềm tự do."
  },
  {
    id: 11,
    question: "Giải thích các quyền tự do cơ bản của phần mềm tự do. Tại sao những quyền này lại quan trọng đối với người dùng?",
    options: [
      "A. 4 quyền: sử dụng, nghiên cứu, chia sẻ, sửa; đảm bảo tự do kiểm soát",
      "B. Chỉ 2 quyền: sử dụng và trả phí",
      "C. Không có quyền tự do",
      "D. Quyền chỉ dành cho nhà phát triển"
    ],
    correct: 0,
    explanation: "Quan trọng để người dùng không bị phụ thuộc, có thể tùy chỉnh và chia sẻ phần mềm."
  },
  {
    id: 12,
    question: "Trình bày về các loại giấy phép EULA và lý do tại sao chúng được sử dụng cho phần mềm độc quyền.",
    options: [
      "A. EULA là hợp đồng người dùng cuối, hạn chế quyền cho phần mềm đóng",
      "B. EULA cho phép mở mã nguồn",
      "C. EULA giống GPL",
      "D. EULA không tồn tại"
    ],
    correct: 0,
    explanation: "EULA bảo vệ nhà phát triển bằng cách cấm sửa/sao chép, dùng cho phần mềm như Windows để kiểm soát sử dụng."
  },
  {
    id: 13,
    question: "Phân tích các hoạt động của tổ chức Open Source Initiative (OSI) và vai trò của tổ chức này trong việc phát triển phần mềm nguồn mở.",
    options: [
      "A. Phê duyệt giấy phép nguồn mở, thúc đẩy tiêu chuẩn",
      "B. Chỉ tạo phần mềm tự do",
      "C. Quản lý GPL",
      "D. Cấm nguồn mở"
    ],
    correct: 0,
    explanation: "OSI định nghĩa và phê duyệt giấy phép tuân thủ 10 nguyên tắc nguồn mở, giúp cộng đồng phát triển bền vững."
  },
  {
    id: 14,
    question: "Tại sao giấy phép GNU GPL được xem là một giấy phép \"Copyleft\"? Giải thích chi tiết.",
    options: [
      "A. Yêu cầu mã sửa đổi phải mở và chia sẻ",
      "B. Không yêu cầu chia sẻ, giống permissive",
      "C. Chỉ bảo vệ quyền tác giả",
      "D. Cấm sử dụng"
    ],
    correct: 0,
    explanation: "Copyleft sử dụng Copyright để đảm bảo tự do, GPL buộc phân phối mã sửa dưới cùng giấy phép."
  },
  {
    id: 15,
    question: "Nêu các tiêu chí chính để phân loại phần mềm dựa trên giấy phép sử dụng và giải thích từng tiêu chí.",
    options: [
      "A. Miễn phí, mở mã, copyleft/permissive; dựa trên quyền truy cập và chia sẻ",
      "B. Chỉ dựa trên giá cả",
      "C. Không có tiêu chí",
      "D. Dựa trên kích thước file"
    ],
    correct: 0,
    explanation: "Miễn phí: không tốn tiền; mở mã: xem/sửa; copyleft: yêu cầu chia sẻ, permissive: cho phép đóng."
  },
  {
    id: 16,
    question: "So sánh giữa giấy phép Copyleft (như GPL) và giấy phép Permissive (như BSD). Đặc điểm chính của từng loại giấy phép là gì?",
    options: [
      "A. Copyleft yêu cầu chia sẻ, Permissive cho phép đóng mã",
      "B. Cả hai đều yêu cầu chia sẻ",
      "C. Permissive yêu cầu chia sẻ, Copyleft không",
      "D. Không khác biệt"
    ],
    correct: 0,
    explanation: "GPL bảo vệ tự do lâu dài, BSD linh hoạt hơn cho thương mại."
  },
  {
    id: 17,
    question: "Trình bày về dự án GNU và mục tiêu chính của nó trong cộng đồng phần mềm nguồn mở.",
    options: [
      "A. Tạo hệ thống tự do hoàn chỉnh, thay thế Unix đóng",
      "B. Phát triển phần mềm trả phí",
      "C. Chỉ tạo kernel",
      "D. Cấm nguồn mở"
    ],
    correct: 0,
    explanation: "Dự án GNU của FSF nhằm xây dựng OS tự do, dẫn đến GNU/Linux, mục tiêu thúc đẩy tự do phần mềm."
  },
  {
    id: 18,
    question: "Giải thích về Contributor Agreement License (CAL) trong các dự án phần mềm tự do nguồn mở và vai trò của nó.",
    options: [
      "A. Hợp đồng cho phép dự án sử dụng đóng góp của cộng đồng",
      "B. Cấm đóng góp",
      "C. Giống EULA cho người dùng",
      "D. Chỉ dành cho nhà phát triển"
    ],
    correct: 0,
    explanation: "CLA/CL đảm bảo quyền sở hữu đóng góp, giúp dự án relicensing hoặc bảo vệ pháp lý."
  },
  {
    id: 19,
    question: "Phân tích lý do tại sao giấy phép phần mềm lại quan trọng đối với các nhà phát triển và người dùng phần mềm.",
    options: [
      "A. Bảo vệ quyền, khuyến khích chia sẻ và tránh tranh chấp",
      "B. Chỉ làm phức tạp hóa",
      "C. Không quan trọng cho người dùng",
      "D. Luôn cấm sử dụng"
    ],
    correct: 0,
    explanation: "Nhà phát triển bảo vệ sản phẩm, người dùng biết quyền hạn, tránh kiện tụng."
  },
  {
    id: 20,
    question: "Tại sao phần mềm mã nguồn mở thường yêu cầu người dùng chia sẻ mã nguồn khi họ thực hiện các thay đổi?",
    options: [
      "A. Do giấy phép copyleft như GPL để giữ tính mở",
      "B. Không yêu cầu chia sẻ",
      "C. Để tăng giá bán",
      "D. Chỉ cho phần mềm đóng"
    ],
    correct: 0,
    explanation: "Yêu cầu chia sẻ đảm bảo phần mềm vẫn tự do, ngăn chặn việc đóng mã sửa đổi."
  },
  // CHƯƠNG 2: HỆ ĐIỀU HÀNH LINUX
  {
    id: 21,
    question: "Trình bày sự khác biệt giữa dự án GNU/Linux và hệ điều hành Linux kernel.",
    options: [
      "A. GNU/Linux là hệ điều hành hoàn chỉnh kết hợp kernel Linux với công cụ GNU, còn Linux kernel chỉ là lõi quản lý phần cứng",
      "B. GNU/Linux chỉ là kernel, Linux kernel là hệ điều hành đầy đủ",
      "C. Không có sự khác biệt, cả hai giống nhau",
      "D. GNU/Linux là phần mềm đóng, Linux kernel là mở"
    ],
    correct: 0,
    explanation: "Dự án GNU cung cấp công cụ tự do, kết hợp với kernel Linux tạo thành hệ thống hoàn chỉnh như Ubuntu."
  },
  {
    id: 22,
    question: "Tại sao Ubuntu được gọi là một bản phân phối của Linux? Nêu rõ đặc điểm của nó.",
    options: [
      "A. Ubuntu là distro dựa trên Debian, dễ sử dụng, tập trung vào người dùng desktop với hỗ trợ dài hạn",
      "B. Ubuntu là kernel riêng biệt, không dựa trên Linux",
      "C. Ubuntu chỉ dành cho server, không cho desktop",
      "D. Ubuntu là hệ điều hành đóng"
    ],
    correct: 0,
    explanation: "Là bản phân phối Linux, Ubuntu đóng gói kernel và phần mềm để dễ cài đặt, thân thiện với người mới."
  },
  {
    id: 23,
    question: "Copyleft là gì? Giải thích vai trò của Copyleft trong phần mềm mã nguồn mở.",
    options: [
      "A. Copyleft là giấy phép yêu cầu chia sẻ mã sửa đổi, đảm bảo phần mềm luôn tự do",
      "B. Copyleft giống Copyright, hạn chế chia sẻ",
      "C. Copyleft chỉ dành cho phần cứng",
      "D. Copyleft cấm sử dụng mã nguồn mở"
    ],
    correct: 0,
    explanation: "Vai trò giữ tính mở, như GPL, ngăn chặn việc đóng mã nguồn sửa đổi."
  },
  {
    id: 24,
    question: "Bạn hãy giải thích tại sao mã nguồn của Windows 10 không được công bố rộng rãi như các hệ điều hành mã nguồn mở khác.",
    options: [
      "A. Windows 10 là phần mềm đóng, bảo vệ bí mật kinh doanh và lợi nhuận của Microsoft",
      "B. Windows 10 mở mã nguồn hoàn toàn",
      "C. Windows 10 dựa trên Linux kernel",
      "D. Mã nguồn Windows được chia sẻ tự do"
    ],
    correct: 0,
    explanation: "Không công bố để tránh sao chép, khác với Linux mở mã."
  },
  {
    id: 25,
    question: "UNIX được phát triển như thế nào và bởi ai? Trình bày lịch sử phát triển của UNIX.",
    options: [
      "A. Phát triển bởi Ken Thompson và Dennis Ritchie tại Bell Labs năm 1969, từ dự án MULTICS",
      "B. Phát triển bởi Linus Torvalds năm 1991",
      "C. Phát triển bởi Microsoft năm 1985",
      "D. Phát triển bởi Apple năm 2001"
    ],
    correct: 0,
    explanation: "Lịch sử: Bắt đầu như hệ thống đơn giản, sau phân nhánh thành BSD, System V, ảnh hưởng đến Linux."
  },
  {
    id: 26,
    question: "So sánh mã nguồn mở và mã nguồn đóng với các ví dụ cụ thể từ hệ điều hành UNIX.",
    options: [
      "A. Mở: Cho phép sửa, ví dụ BSD UNIX; Đóng: Không cho phép, ví dụ AT&T UNIX gốc",
      "B. Cả hai đều mở, ví dụ UNIX luôn mở",
      "C. Mã đóng cho phép sửa, mã mở không",
      "D. Không có ví dụ từ UNIX"
    ],
    correct: 0,
    explanation: "Mở thúc đẩy cộng đồng, đóng bảo vệ sở hữu trí tuệ."
  },
  {
    id: 27,
    question: "Trình bày các ngôn ngữ lập trình được sử dụng để viết LINUX và UNIX.",
    options: [
      "A. Chủ yếu C, với Assembly cho phần kernel",
      "B. Chỉ Python và Java",
      "C. Chỉ Bash script",
      "D. Không dùng ngôn ngữ lập trình"
    ],
    correct: 0,
    explanation: "C hiệu quả cho hệ thống, Assembly cho phần thấp cấp."
  },
  {
    id: 28,
    question: "Linus Torvalds và cộng đồng đóng vai trò như thế nào trong việc phát triển LINUX?",
    options: [
      "A. Torvalds tạo kernel, cộng đồng đóng góp mã và cải tiến",
      "B. Torvalds phát triển một mình",
      "C. Cộng đồng không tham gia",
      "D. Torvalds chỉ là người dùng"
    ],
    correct: 0,
    explanation: "Mô hình nguồn mở cho phép hàng ngàn lập trình viên tham gia."
  },
  {
    id: 29,
    question: "Nêu rõ sự khác biệt giữa giấy phép EULA và giấy phép mã nguồn mở.",
    options: [
      "A. EULA hạn chế sử dụng, mã mở cho phép sửa và chia sẻ",
      "B. Cả hai giống nhau",
      "C. EULA cho phép mở mã, mã mở hạn chế",
      "D. EULA chỉ cho phần cứng"
    ],
    correct: 0,
    explanation: "EULA cho phần mềm đóng như Windows, mã mở như GPL cho tự do."
  },
  {
    id: 30,
    question: "Giải thích về dự án GNU và mục tiêu của nó.",
    options: [
      "A. Tạo hệ thống tự do tương thích UNIX, mục tiêu phần mềm tự do",
      "B. Tạo phần mềm đóng",
      "C. Chỉ phát triển kernel",
      "D. Mục tiêu thương mại"
    ],
    correct: 0,
    explanation: "Do Richard Stallman khởi xướng, kết hợp với Linux kernel."
  },
  {
    id: 31,
    question: "Bạn hãy mô tả hệ điều hành Android và giải thích tại sao nó không được coi là một bản phân phối của Linux.",
    options: [
      "A. Android dựa trên Linux kernel nhưng không dùng công cụ GNU, là hệ thống di động riêng",
      "B. Android là distro Linux chuẩn",
      "C. Android không dựa trên Linux",
      "D. Android chỉ cho desktop"
    ],
    correct: 0,
    explanation: "Không phải GNU/Linux vì sử dụng thư viện và môi trường khác."
  },
  {
    id: 32,
    question: "Nêu đặc điểm nổi bật của biểu tượng hệ điều hành Fedora.",
    options: [
      "A. Biểu tượng infinity với màu xanh dương, tượng trưng cho tự do và đổi mới",
      "B. Biểu tượng chim cánh cụt",
      "C. Biểu tượng quả táo",
      "D. Không có biểu tượng"
    ],
    correct: 0,
    explanation: "Logo Fedora nhấn mạnh cộng đồng và tính mở."
  },
  {
    id: 33,
    question: "Ubuntu Desktop được thiết kế dành cho đối tượng người dùng nào? Tại sao?",
    options: [
      "A. Người dùng cá nhân và mới bắt đầu, vì giao diện thân thiện và dễ cài đặt",
      "B. Chỉ cho lập trình viên chuyên nghiệp",
      "C. Chỉ cho server",
      "D. Không dành cho ai"
    ],
    correct: 0,
    explanation: "Tập trung vào trải nghiệm người dùng, hỗ trợ phần cứng tốt."
  },
  {
    id: 34,
    question: "Hãy phân tích sự khác biệt giữa các bản phân phối Ubuntu: Ubuntu Server, Ubuntu Netbook, và Ubuntu Studio.",
    options: [
      "A. Server: Cho máy chủ, Netbook: Cho thiết bị nhỏ, Studio: Cho sáng tạo đa phương tiện",
      "B. Tất cả giống nhau",
      "C. Server cho desktop, Studio cho server",
      "D. Netbook cho server"
    ],
    correct: 0,
    explanation: "Mỗi phiên bản tối ưu hóa cho nhu cầu cụ thể."
  },
  {
    id: 35,
    question: "“LTS” trong các bản phân phối Ubuntu có ý nghĩa gì? Tại sao nó quan trọng đối với người dùng?",
    options: [
      "A. Long Term Support, hỗ trợ dài hạn 5 năm, ổn định cho doanh nghiệp",
      "B. Short Term Support, cập nhật ngắn",
      "C. Không quan trọng",
      "D. Chỉ cho desktop"
    ],
    correct: 0,
    explanation: "Quan trọng để tránh cập nhật thường xuyên, đảm bảo an ninh."
  },
  {
    id: 36,
    question: "Phần mềm ibus-unikey trong Ubuntu được sử dụng cho mục đích gì? Nêu các tính năng của nó.",
    options: [
      "A. Gõ tiếng Việt, hỗ trợ Telex, VNI, VIQR, và keymap tùy chỉnh",
      "B. Chỉ chỉnh sửa ảnh",
      "C. Quản lý file",
      "D. Chạy game"
    ],
    correct: 0,
    explanation: "Là input method cho tiếng Việt trên IBus."
  },
  {
    id: 37,
    question: "So sánh LibreOffice Writer và Microsoft Word về các chức năng cơ bản.",
    options: [
      "A. Cả hai hỗ trợ chỉnh sửa văn bản, nhưng Writer miễn phí, mở, Word có tích hợp đám mây tốt hơn",
      "B. Writer không hỗ trợ định dạng",
      "C. Word miễn phí, Writer trả phí",
      "D. Không có sự khác biệt"
    ],
    correct: 0,
    explanation: "Writer tốt cho sử dụng cơ bản, Word mạnh về hợp tác."
  },
  {
    id: 38,
    question: "Nêu các đặc điểm của LibreOffice Calc so với Microsoft Excel.",
    options: [
      "A. Calc miễn phí, hỗ trợ công thức cơ bản, Excel mạnh về phân tích dữ liệu lớn và VBA",
      "B. Calc không hỗ trợ bảng tính",
      "C. Excel miễn phí, Calc trả phí",
      "D. Calc chỉ cho văn bản"
    ],
    correct: 0,
    explanation: "Calc phù hợp cho người dùng cá nhân, Excel cho chuyên nghiệp."
  },
  {
    id: 39,
    question: "Giải thích cách thức hoạt động của LibreOffice Impress và so sánh với Microsoft PowerPoint.",
    options: [
      "A. Impress tạo slide, hỗ trợ chuyển tiếp, PowerPoint có template và hợp tác tốt hơn",
      "B. Impress không hỗ trợ slide",
      "C. PowerPoint miễn phí, Impress trả phí",
      "D. Không so sánh được"
    ],
    correct: 0,
    explanation: "Impress hoạt động tương tự nhưng miễn phí và mở."
  },
  {
    id: 40,
    question: "Trình bày vai trò và chức năng của thư mục /root trong hệ điều hành Linux.",
    options: [
      "A. Thư mục home của user root, lưu file cá nhân và cấu hình",
      "B. Lưu file hệ thống chung",
      "C. Chỉ cho người dùng thường",
      "D. Không tồn tại"
    ],
    correct: 0,
    explanation: "Bảo mật, tránh lẫn với /home của user khác."
  },
  {
    id: 41,
    question: "Phân tích sự quan trọng của thư mục /etc trong hệ thống Linux.",
    options: [
      "A. Lưu file cấu hình hệ thống, như /etc/passwd cho user",
      "B. Lưu chương trình thực thi",
      "C. Lưu file tạm",
      "D. Không quan trọng"
    ],
    correct: 0,
    explanation: "Là trung tâm cấu hình, thay đổi ảnh hưởng toàn hệ thống."
  },
  {
    id: 42,
    question: "Giải thích khái niệm \"đường dẫn\" trong hệ điều hành Linux.",
    options: [
      "A. Vị trí file/thư mục trong file system, như /home/user/file.txt",
      "B. Chỉ là tên file",
      "C. Không tồn tại",
      "D. Chỉ cho kernel"
    ],
    correct: 0,
    explanation: "Giúp truy cập tài nguyên chính xác."
  },
  {
    id: 43,
    question: "Tại sao ký hiệu “/” lại được sử dụng để chỉ thư mục gốc trong Linux?",
    options: [
      "A. Đại diện root directory, kế thừa từ UNIX, là đỉnh của file system",
      "B. Chỉ dấu phân cách",
      "C. Không có lý do",
      "D. Từ Windows"
    ],
    correct: 0,
    explanation: "Phân biệt với dấu phân cách thư mục."
  },
  {
    id: 44,
    question: "Định nghĩa thư mục hiện hành và các ký hiệu đại diện của nó trong hệ thống Linux.",
    options: [
      "A. Thư mục đang làm việc, ký hiệu . (dot)",
      "B. Thư mục root, ký hiệu /",
      "C. Thư mục home, ký hiệu ~",
      "D. Không có ký hiệu"
    ],
    correct: 0,
    explanation: "Dùng trong lệnh như cd . để ở lại hiện tại."
  },
  {
    id: 45,
    question: "Mô tả về khái niệm thư mục cha trong Linux và cách truy xuất đến nó.",
    options: [
      "A. Thư mục cấp trên, truy xuất bằng .. (double dot) hoặc cd ..",
      "B. Thư mục con, dùng .",
      "C. Thư mục root, dùng /",
      "D. Không tồn tại"
    ],
    correct: 0,
    explanation: "Giúp di chuyển lên cấp trong file system."
  },
  {
    id: 46,
    question: "Giải thích chức năng của thư mục cá nhân trong Linux và ký hiệu của nó.",
    options: [
      "A. Home directory cho user, lưu file cá nhân, ký hiệu ~",
      "B. Cho root, ký hiệu /",
      "C. Cho hệ thống, ký hiệu .",
      "D. Không có chức năng"
    ],
    correct: 0,
    explanation: "Mỗi user có thư mục riêng dưới /home."
  },
  {
    id: 47,
    question: "Đường dẫn tuyệt đối và đường dẫn tương đối là gì? Phân tích sự khác biệt giữa chúng.",
    options: [
      "A. Tuyệt đối bắt đầu từ /, tương đối từ thư mục hiện hành",
      "B. Cả hai giống nhau",
      "C. Tuyệt đối từ ~, tương đối từ /",
      "D. Không khác biệt"
    ],
    correct: 0,
    explanation: "Tuyệt đối cố định, tương đối linh hoạt tùy vị trí."
  },
  {
    id: 48,
    question: "Tại sao giấy phép GNU GPL lại được sử dụng cho phần mềm GIMP?",
    options: [
      "A. Để đảm bảo tự do sửa và chia sẻ, giữ tính mở",
      "B. Để đóng mã nguồn",
      "C. Chỉ cho thương mại",
      "D. Không dùng GPL"
    ],
    correct: 0,
    explanation: "GIMP là phần mềm tự do, GPL phù hợp."
  },
  {
    id: 49,
    question: "Giải thích lý do Ubuntu chọn sử dụng giấy phép GNU GPL.",
    options: [
      "A. Để khuyến khích cộng đồng đóng góp và giữ tự do",
      "B. Để đóng mã",
      "C. Ubuntu không dùng GPL",
      "D. Chỉ cho kernel"
    ],
    correct: 0,
    explanation: "Phù hợp với triết lý nguồn mở của Ubuntu."
  },
  {
    id: 50,
    question: "So sánh các hệ thống tập tin NTFS, EXT, FAT, và FAT32. Tại sao EXT được sử dụng trong Linux?",
    options: [
      "A. NTFS cho Windows, EXT cho Linux (journaling, ổn định), FAT/FAT32 cũ và tương thích",
      "B. Tất cả giống nhau",
      "C. EXT cho Windows, NTFS cho Linux",
      "D. FAT cho kernel"
    ],
    correct: 0,
    explanation: "EXT tối ưu cho Linux, hỗ trợ quyền và kích thước lớn."
  },
  {
    id: 51,
    question: "Khái niệm liên kết mềm là gì? Giải thích cách sử dụng và lợi ích của liên kết mềm trong Linux.",
    options: [
      "A. Symbolic link trỏ đến file khác, dùng ln -s, lợi ích linh hoạt qua file system",
      "B. Hard link, chỉ cùng partition",
      "C. Không lợi ích",
      "D. Chỉ cho thư mục"
    ],
    correct: 0,
    explanation: "Dễ quản lý shortcut, tiết kiệm không gian."
  },
  {
    id: 52,
    question: "Định nghĩa đường dẫn tuyệt đối và đường dẫn hiện hành trong Linux. Cho ví dụ minh họa.",
    options: [
      "A. Tuyệt đối: /home/user/file; Hiện hành: ./file",
      "B. Tuyệt đối: ./file; Hiện hành: /file",
      "C. Không có ví dụ",
      "D. Giống nhau"
    ],
    correct: 0,
    explanation: "Tuyệt đối từ root, hiện hành từ vị trí hiện tại."
  },
  {
    id: 53,
    question: "Mô tả chức năng của tổ hợp phím Ctrl + C và Ctrl + D trong trình thông dịch lệnh của Linux.",
    options: [
      "A. Ctrl+C: Ngắt process; Ctrl+D: End of file/input",
      "B. Ctrl+C: Copy; Ctrl+D: Delete",
      "C. Cả hai giống nhau",
      "D. Không chức năng"
    ],
    correct: 0,
    explanation: "Ctrl+C gửi SIGINT, Ctrl+D đóng input."
  },
  {
    id: 54,
    question: "Tổ hợp phím Ctrl + Alt + T được sử dụng để làm gì trong môi trường Linux?",
    options: [
      "A. Mở terminal",
      "B. Tắt máy",
      "C. Mở browser",
      "D. Không dùng"
    ],
    correct: 0,
    explanation: "Shortcut mặc định trong nhiều distro như Ubuntu."
  },
  {
    id: 55,
    question: "Trình bày về thành phần kernel của Linux và tầm quan trọng của nó.",
    options: [
      "A. Lõi hệ thống quản lý phần cứng, process, memory; quan trọng làm cầu nối hardware-software",
      "B. Chỉ giao diện người dùng",
      "C. Không quan trọng",
      "D. Chỉ cho file system"
    ],
    correct: 0,
    explanation: "Kernel là trái tim của Linux."
  },
  {
    id: 56,
    question: "Giải thích cách hoạt động của nhóm người dùng trong Linux.",
    options: [
      "A. Nhóm gán quyền chung cho nhiều user, kiểm soát access qua group ID",
      "B. Chỉ cho một user",
      "C. Không hoạt động",
      "D. Chỉ cho root"
    ],
    correct: 0,
    explanation: "Giúp quản lý permission hiệu quả."
  },
  {
    id: 57,
    question: "Chức năng của phần mềm GIMP là gì và nó thuộc loại phần mềm nào?",
    options: [
      "A. Chỉnh sửa ảnh, phần mềm nguồn mở raster graphics",
      "B. Chỉnh sửa video",
      "C. Quản lý database",
      "D. Trình duyệt web"
    ],
    correct: 0,
    explanation: "Tương tự Photoshop, miễn phí."
  },
  {
    id: 58,
    question: "Ngôn ngữ lập trình chính được sử dụng để phát triển hệ điều hành Linux là gì? Tại sao lại chọn ngôn ngữ đó?",
    options: [
      "A. C, vì hiệu suất cao và kiểm soát thấp cấp",
      "B. Python, vì dễ học",
      "C. Java, vì platform independent",
      "D. Bash, vì script"
    ],
    correct: 0,
    explanation: "Phù hợp cho kernel và hệ thống."
  },
  {
    id: 59,
    question: "Mô tả vai trò của lệnh \"groups\" trong Linux.",
    options: [
      "A. Liệt kê nhóm của user",
      "B. Tạo nhóm",
      "C. Xóa nhóm",
      "D. Không vai trò"
    ],
    correct: 0,
    explanation: "Giúp kiểm tra membership."
  },
  {
    id: 60,
    question: "Tại sao Shell lại quan trọng trong hệ điều hành Linux? Nó hoạt động như thế nào?",
    options: [
      "A. Giao diện lệnh, diễn dịch lệnh user thành kernel call",
      "B. Chỉ giao diện đồ họa",
      "C. Không quan trọng",
      "D. Chỉ cho file"
    ],
    correct: 0,
    explanation: "Quan trọng cho automation và quản lý."
  },
  {
    id: 61,
    question: "Giải thích khái niệm \"sudo\" trong Linux và tại sao nó cần thiết.",
    options: [
      "A. Superuser do, chạy lệnh với quyền root tạm thời, cần cho an ninh",
      "B. Chỉ shutdown",
      "C. Không cần thiết",
      "D. Chỉ cho user thường"
    ],
    correct: 0,
    explanation: "Tránh chạy root thường xuyên, giảm rủi ro."
  },
  {
    id: 62,
    question: "Phân tích các tùy chọn khác nhau để truy cập thư mục và tập tin trong Linux.",
    options: [
      "A. Qua đường dẫn tuyệt đối, tương đối, hoặc shortcut như ~ và .",
      "B. Chỉ qua GUI",
      "C. Không tùy chọn",
      "D. Chỉ root"
    ],
    correct: 0,
    explanation: "Linh hoạt cho navigation."
  },
  {
    id: 63,
    question: "Giải thích khái niệm \"quyền truy cập\" trong Linux và các ký hiệu tương ứng.",
    options: [
      "A. r (read), w (write), x (execute) cho user, group, other",
      "B. Chỉ r cho tất cả",
      "C. Không ký hiệu",
      "D. Chỉ cho file"
    ],
    correct: 0,
    explanation: "Kiểm soát access qua ls -l."
  },
  {
    id: 64,
    question: "Tầm quan trọng của quyền sở hữu trong Linux là gì? Nêu các loại quyền sở hữu.",
    options: [
      "A. Kiểm soát ai sở hữu file, loại: user owner và group owner",
      "B. Không quan trọng",
      "C. Chỉ group",
      "D. Chỉ root"
    ],
    correct: 0,
    explanation: "Quan trọng cho an ninh và quản lý."
  },
  {
    id: 65,
    question: "Giải thích về các giấy phép phần mềm khác nhau như BSD, Artistic License, và Apache License.",
    options: [
      "A. BSD permissive, Artistic bảo vệ nghệ thuật, Apache cho web server",
      "B. Tất cả copyleft",
      "C. BSD đóng, Apache mở",
      "D. Không khác"
    ],
    correct: 0,
    explanation: "Permissive cho phép sử dụng linh hoạt."
  },
  {
    id: 66,
    question: "Trình bày về các thành phần chính của nhân Linux và chức năng của chúng.",
    options: [
      "A. Process management, memory, file system, network; quản lý tài nguyên",
      "B. Chỉ GUI",
      "C. Không thành phần",
      "D. Chỉ kernel"
    ],
    correct: 0,
    explanation: "Là cốt lõi của OS."
  },
  {
    id: 67,
    question: "Linux Kernel là gì và tại sao nó lại quan trọng trong việc phát triển các hệ điều hành?",
    options: [
      "A. Lõi OS, quan trọng vì cung cấp nền tảng cho distro",
      "B. Chỉ ứng dụng",
      "C. Không quan trọng",
      "D. Chỉ cho Windows"
    ],
    correct: 0,
    explanation: "Cho phép tùy chỉnh và mở rộng."
  },
  {
    id: 68,
    question: "Phân tích sự khác biệt giữa quyền đọc, viết và thực thi đối với tập tin và thư mục trong Linux.",
    options: [
      "A. Read: Xem nội dung (file)/list (dir); Write: Sửa (file)/thêm xóa (dir); Execute: Chạy (file)/vào (dir)",
      "B. Tất cả giống nhau",
      "C. Read cho dir, write cho file",
      "D. Không khác"
    ],
    correct: 0,
    explanation: "Khác nhau tùy loại."
  },
  {
    id: 69,
    question: "Nêu các bước để thay đổi quyền sở hữu và quyền truy cập của tập tin/thư mục trong Linux.",
    options: [
      "A. chown cho owner, chmod cho permission",
      "B. Chỉ rm",
      "C. Không thay đổi được",
      "D. Chỉ ls"
    ],
    correct: 0,
    explanation: "Ví dụ: sudo chown user:group file; chmod 755 file."
  },
  {
    id: 70,
    question: "Mô tả vai trò của Network Interface trong Linux Kernel.",
    options: [
      "A. Quản lý kết nối mạng, xử lý packet",
      "B. Chỉ memory",
      "C. Không vai trò",
      "D. Chỉ file"
    ],
    correct: 0,
    explanation: "Cầu nối hardware mạng và kernel."
  },
  {
    id: 71,
    question: "Giải thích chức năng của bộ định thời trong nhân Linux.",
    options: [
      "A. Quản lý thời gian chạy process, ưu tiên task",
      "B. Chỉ file system",
      "C. Không chức năng",
      "D. Chỉ network"
    ],
    correct: 0,
    explanation: "Đảm bảo công bằng và hiệu suất."
  },
  {
    id: 72,
    question: "Trình bày các đặc tính của một thư mục được hiển thị với tiền tố 'd' trong Linux.",
    options: [
      "A. Directory, không phải file thường",
      "B. Device",
      "C. Symbolic link",
      "D. Block"
    ],
    correct: 0,
    explanation: "Trong ls -l, 'd' chỉ thư mục."
  },
  {
    id: 73,
    question: "Liệt kê các lệnh cơ bản để quản lý tập tin và thư mục trong Linux.",
    options: [
      "A. ls, cd, mkdir, rm, cp, mv",
      "B. Chỉ ls",
      "C. Không lệnh",
      "D. Chỉ gui"
    ],
    correct: 0,
    explanation: "Cơ bản cho navigation và thao tác."
  },
  {
    id: 74,
    question: "Giải thích quá trình mã hóa và lưu trữ mật khẩu trong Linux.",
    options: [
      "A. Hash với salt, lưu trong /etc/shadow",
      "B. Lưu plaintext",
      "C. Không mã hóa",
      "D. Lưu trong /home"
    ],
    correct: 0,
    explanation: "Bảo mật, dùng algorithm như bcrypt."
  },
  {
    id: 75,
    question: "Phân tích lợi ích của mã nguồn mở đối với phần mềm Apache Server và Mozilla Firefox.",
    options: [
      "A. Cộng đồng đóng góp, bảo mật cao, tùy chỉnh tự do",
      "B. Không lợi ích",
      "C. Chỉ lợi nhuận",
      "D. Đóng mã"
    ],
    correct: 0,
    explanation: "Apache linh hoạt web, Firefox an toàn duyệt."
  },
  {
    id: 76,
    question: "Trình bày các phương pháp quản lý người dùng và nhóm trong hệ điều hành Linux.",
    options: [
      "A. useradd, groupadd, usermod, groupmod",
      "B. Chỉ root",
      "C. Không quản lý",
      "D. Chỉ GUI"
    ],
    correct: 0,
    explanation: "Quản lý access và quyền."
  },
  {
    id: 77,
    question: "Giải thích chức năng của Virtual File System trong nhân Linux.",
    options: [
      "A. Lớp trừu tượng cho file system khác nhau, thống nhất access",
      "B. Chỉ physical file",
      "C. Không chức năng",
      "D. Chỉ network"
    ],
    correct: 0,
    explanation: "Hỗ trợ nhiều loại FS như ext4, NTFS."
  },
  {
    id: 78,
    question: "Tầm quan trọng của hệ thống tập tin trong việc quản lý tài nguyên hệ thống Linux.",
    options: [
      "A. Tổ chức dữ liệu, quản lý space, quyền access",
      "B. Không quan trọng",
      "C. Chỉ memory",
      "D. Chỉ process"
    ],
    correct: 0,
    explanation: "Cơ bản cho lưu trữ và bảo mật."
  },
  {
    id: 79,
    question: "Trình bày về giao tiếp liên quá trình trong Linux Kernel.",
    options: [
      "A. Sử dụng pipe, socket, shared memory cho process trao đổi dữ liệu",
      "B. Không hỗ trợ",
      "C. Chỉ signal",
      "D. Chỉ file"
    ],
    correct: 0,
    explanation: "Quan trọng cho đa nhiệm."
  },
  {
    id: 80,
    question: "Giải thích vai trò của Memory Manager trong Linux Kernel và tại sao nó cần thiết cho quản lý bộ nhớ.",
    options: [
      "A. Quản lý allocation, paging, swapping; cần cho hiệu suất và ảo hóa memory",
      "B. Chỉ physical memory",
      "C. Không cần thiết",
      "D. Chỉ cho disk"
    ],
    correct: 0,
    explanation: "Ngăn chặn lãng phí và crash."
  },
  // CHƯƠNG 3: LẬP TRÌNH SHELL TRÊN LINUX
  {
    id: 81,
    question: "Hãy giải thích lệnh ls trong Linux và liệt kê các trường hợp sử dụng khác nhau của lệnh này.",
    options: [
      "A. Lệnh ls liệt kê nội dung thư mục, dùng ls -l (chi tiết), ls -a (ẩn file)",
      "B. Lệnh ls xóa file",
      "C. Lệnh ls chỉ hiển thị thư mục gốc",
      "D. Lệnh ls không hoạt động"
    ],
    correct: 0,
    explanation: "Dùng để xem file, thư mục với các tùy chọn khác nhau."
  },
  {
    id: 82,
    question: "So sánh sự khác biệt giữa lệnh ls -a và ls -l trong Linux.",
    options: [
      "A. ls -a hiển thị file ẩn, ls -l hiển thị chi tiết như quyền và thời gian",
      "B. ls -a xóa file, ls -l tạo file",
      "C. Cả hai giống nhau",
      "D. ls -l ẩn file"
    ],
    correct: 0,
    explanation: "ls -a dùng để xem file bắt đầu bằng ., ls -l cung cấp thông tin dài."
  },
  {
    id: 83,
    question: "Mô tả cách thay đổi thư mục hiện hành bằng lệnh cd trong Linux và cho ví dụ cụ thể.",
    options: [
      "A. Dùng cd /path, ví dụ: cd /home/user",
      "B. Dùng ls /path",
      "C. Dùng rm /path",
      "D. Không có lệnh"
    ],
    correct: 0,
    explanation: "Chuyển thư mục, tuyệt đối hoặc tương đối."
  },
  {
    id: 84,
    question: "Giải thích cách sao chép tệp trong Linux bằng lệnh cp và cung cấp một ví dụ.",
    options: [
      "A. Dùng cp source dest, ví dụ: cp file1.txt file2.txt",
      "B. Dùng mv source dest",
      "C. Dùng rm source",
      "D. Không sao chép được"
    ],
    correct: 0,
    explanation: "Tạo bản sao file hoặc thư mục với tùy chọn -r cho thư mục."
  },
  {
    id: 85,
    question: "Nêu chức năng của lệnh pwd trong Linux và tại sao nó hữu ích khi làm việc với hệ thống tệp.",
    options: [
      "A. Hiển thị đường dẫn tuyệt đối của thư mục hiện hành, hữu ích để định vị",
      "B. Xóa thư mục",
      "C. Tạo file",
      "D. Không chức năng"
    ],
    correct: 0,
    explanation: "Giúp xác định vị trí hiện tại trong file system."
  },
  {
    id: 86,
    question: "Mô tả chi tiết về lệnh mkdir trong Linux và các tùy chọn khác nhau khi sử dụng lệnh này.",
    options: [
      "A. Tạo thư mục, dùng mkdir dir hoặc mkdir -p cho thư mục lồng",
      "B. Xóa thư mục",
      "C. Chỉ hiển thị thư mục",
      "D. Không tạo được"
    ],
    correct: 0,
    explanation: "-p tạo thư mục cha nếu chưa tồn tại."
  },
  {
    id: 87,
    question: "Làm thế nào để kiểm tra trình thông dịch lệnh (shell) đang sử dụng trong Linux? Hãy giải thích.",
    options: [
      "A. Dùng echo $SHELL, hiển thị đường dẫn shell như /bin/bash",
      "B. Dùng ls -l",
      "C. Dùng cd $SHELL",
      "D. Không kiểm tra được"
    ],
    correct: 0,
    explanation: "Biến môi trường $SHELL lưu thông tin shell hiện tại."
  },
  {
    id: 88,
    question: "Hãy giải thích chức năng của lệnh clear trong Linux và đưa ra trường hợp sử dụng của nó.",
    options: [
      "A. Xóa nội dung màn hình terminal, dùng khi màn hình lộn xộn sau nhiều lệnh",
      "B. Xóa file",
      "C. Tạo file",
      "D. Không chức năng"
    ],
    correct: 0,
    explanation: "Tương đương Ctrl+L, giúp làm sạch giao diện để tiếp tục làm việc."
  },
  {
    id: 89,
    question: "Làm thế nào để thực thi nhiều lệnh echo cùng lúc trong Linux? Giải thích cách sử dụng và ý nghĩa.",
    options: [
      "A. Dùng echo \"text1\"; echo \"text2\", hoặc echo \"text1\" && echo \"text2\" để chạy liên tiếp",
      "B. Dùng echo \"text1 text2\"",
      "C. Dùng ls echo",
      "D. Không thực thi được"
    ],
    correct: 0,
    explanation: "; chạy vô điều kiện, && chạy nếu lệnh trước thành công, ý nghĩa để in nhiều dòng."
  },
  {
    id: 90,
    question: "Hướng dẫn cách chuyển đổi từ thư mục hiện tại đến một thư mục khác trong Linux bằng lệnh cd.",
    options: [
      "A. Dùng cd /path/to/dir hoặc cd ../dir để chuyển lên thư mục cha rồi vào con",
      "B. Dùng ls /path/to/dir",
      "C. Dùng rm /path/to/dir",
      "D. Không có cách"
    ],
    correct: 0,
    explanation: "Hỗ trợ đường dẫn tuyệt đối hoặc tương đối cho di chuyển linh hoạt."
  },
  {
    id: 91,
    question: "Làm thế nào để tạo một tệp tin rỗng trong Linux? Đưa ra ví dụ minh họa.",
    options: [
      "A. Dùng touch filename, ví dụ: touch empty.txt",
      "B. Dùng cp filename",
      "C. Dùng rm filename",
      "D. Không tạo được"
    ],
    correct: 0,
    explanation: "Tạo file mới nếu chưa tồn tại, hoặc cập nhật timestamp nếu đã có."
  },
  {
    id: 92,
    question: "Hãy giải thích cách thay đổi mật khẩu của một người dùng khác trong Linux bằng lệnh sudo passwd.",
    options: [
      "A. Dùng sudo passwd username, sau đó nhập mật khẩu mới hai lần",
      "B. Dùng passwd username mà không cần sudo",
      "C. Dùng cd passwd",
      "D. Không thay đổi được"
    ],
    correct: 0,
    explanation: "Yêu cầu quyền root qua sudo để quản lý user khác."
  },
  {
    id: 93,
    question: "So sánh sự khác nhau giữa việc thay đổi mật khẩu của tài khoản đăng nhập hiện tại và tài khoản khác trong Linux.",
    options: [
      "A. Hiện tại dùng passwd (không cần sudo), tài khoản khác dùng sudo passwd username",
      "B. Cả hai đều cần sudo",
      "C. Chỉ hiện tại cần sudo",
      "D. Không khác biệt"
    ],
    correct: 0,
    explanation: "Thiết kế an ninh để user chỉ tự quản lý mật khẩu mình, admin quản lý người khác."
  },
  {
    id: 94,
    question: "Hãy trình bày cách xóa một tài khoản người dùng khỏi hệ thống trong Linux và giải thích ý nghĩa của lệnh này.",
    options: [
      "A. Dùng sudo userdel -r username để xóa user và home directory",
      "B. Dùng sudo passwd username",
      "C. Dùng cd userdel",
      "D. Không xóa được"
    ],
    correct: 0,
    explanation: "Ý nghĩa loại bỏ tài khoản không cần thiết, giải phóng tài nguyên và tăng an ninh."
  },
  {
    id: 95,
    question: "Giải thích chức năng của tập tin /etc/passwd trong Linux và nêu ví dụ về thông tin lưu trong tập tin này.",
    options: [
      "A. Lưu thông tin user như username:x:uid:gid:comment:/home/username:/bin/bash",
      "B. Lưu mật khẩu plaintext",
      "C. Lưu file hệ thống",
      "D. Không chức năng"
    ],
    correct: 0,
    explanation: "Là database user, x chỉ mật khẩu đã hash ở /etc/shadow."
  },
  {
    id: 96,
    question: "Lệnh whoami trong Linux dùng để làm gì? Đưa ra ví dụ khi sử dụng lệnh này.",
    options: [
      "A. Hiển thị tên user hiện tại, ví dụ: whoami trả về \"ubuntu\" nếu đăng nhập ubuntu",
      "B. Xóa user",
      "C. Tạo file",
      "D. Không dùng"
    ],
    correct: 0,
    explanation: "Hữu ích trong script hoặc kiểm tra quyền."
  },
  {
    id: 97,
    question: "Mô tả kết quả khi sử dụng lệnh usermod -d /home phkhang trong Linux.",
    options: [
      "A. Thay đổi thư mục home của user phkhang thành /home",
      "B. Xóa user phkhang",
      "C. Tạo user phkhang",
      "D. Không thay đổi"
    ],
    correct: 0,
    explanation: "Lệnh usermod -d /newhome username thay đổi home directory."
  },
  {
    id: 98,
    question: "Khi tạo người dùng mới với lệnh useradd -m, tại sao người dùng không thể đăng nhập? Cách khắc phục là gì?",
    options: [
      "A. Chưa có mật khẩu, khắc phục bằng sudo passwd newuser",
      "B. Home directory không tồn tại",
      "C. Không cần khắc phục",
      "D. Chỉ cần useradd"
    ],
    correct: 0,
    explanation: "useradd tạo user nhưng không đặt mật khẩu mặc định."
  },
  {
    id: 99,
    question: "Hãy giải thích cách thay đổi nhóm sở hữu tạm thời của người dùng trong Linux.",
    options: [
      "A. Dùng newgrp groupname để chuyển sang nhóm khác tạm thời",
      "B. Dùng chown groupname",
      "C. Dùng rm groupname",
      "D. Không thay đổi được"
    ],
    correct: 0,
    explanation: "Chỉ áp dụng trong session hiện tại, hữu ích cho quyền tạm thời."
  },
  {
    id: 100,
    question: "Hãy mô tả lệnh su trong Linux và khi nào nên sử dụng nó.",
    options: [
      "A. Chuyển sang user khác, dùng su - username, sử dụng khi cần quyền khác mà không logout",
      "B. Xóa user",
      "C. Tạo file",
      "D. Không dùng"
    ],
    correct: 0,
    explanation: "Thường dùng cho su - root, cần mật khẩu."
  },
  {
    id: 101,
    question: "Hãy giải thích cách xem nội dung của một tệp tin trong Linux và so sánh các lệnh có thể sử dụng.",
    options: [
      "A. cat (in toàn bộ), more/less (phân trang), head (đầu file), tail (cuối file)",
      "B. Chỉ ls",
      "C. Chỉ cd",
      "D. Không xem được"
    ],
    correct: 0,
    explanation: "cat đơn giản cho file nhỏ, less tốt cho file lớn."
  },
  {
    id: 102,
    question: "Mô tả cách tạo và chỉnh sửa một tệp tin bằng lệnh gedit trong Linux.",
    options: [
      "A. Dùng gedit filename để mở editor GUI, tạo/sửa nội dung",
      "B. Dùng ls filename",
      "C. Dùng rm filename",
      "D. Không tạo được"
    ],
    correct: 0,
    explanation: "Nếu file chưa tồn tại, gedit tạo mới."
  },
  {
    id: 103,
    question: "Làm thế nào để tạo một chú thích trong tệp tin shell script? Đưa ra ví dụ cụ thể.",
    options: [
      "A. Dùng # comment, ví dụ: # This is a note",
      "B. Dùng // comment",
      "C. Dùng /* comment */",
      "D. Không có chú thích"
    ],
    correct: 0,
    explanation: "Shell bỏ qua dòng bắt đầu bằng #, trừ shebang."
  },
  {
    id: 104,
    question: "Giải thích khái niệm \"tập tin script\" trong Linux và lợi ích của việc sử dụng nó.",
    options: [
      "A. File chứa chuỗi lệnh shell, lợi ích tự động hóa và lặp lại tác vụ",
      "B. File chỉ để xem",
      "C. Không có lợi ích",
      "D. Chỉ cho GUI"
    ],
    correct: 0,
    explanation: "Như script backup hàng ngày."
  },
  {
    id: 105,
    question: "Nêu quyền tối thiểu cần cấp cho một tập tin script trong Linux và giải thích lý do tại sao.",
    options: [
      "A. Quyền execute (x), để shell có thể chạy file như chương trình",
      "B. Chỉ read (r)",
      "C. Chỉ write (w)",
      "D. Không cần quyền"
    ],
    correct: 0,
    explanation: "Mặc định file mới không có x, cần chmod +x."
  },
  {
    id: 106,
    question: "Giải thích tầm quan trọng của dòng đầu tiên #!/bin/bash trong một tập tin script.",
    options: [
      "A. Shebang chỉ định trình thông dịch (bash), quan trọng để chạy đúng shell",
      "B. Chỉ là chú thích",
      "C. Không cần thiết",
      "D. Chỉ cho Python"
    ],
    correct: 0,
    explanation: "Đảm bảo script chạy với shell mong muốn."
  },
  {
    id: 107,
    question: "Làm thế nào để xác định thư mục hiện hành trong Linux thông qua biến hệ thống?",
    options: [
      "A. Dùng echo $PWD để in đường dẫn hiện tại",
      "B. Dùng echo $HOME",
      "C. Dùng ls $PATH",
      "D. Không xác định được"
    ],
    correct: 0,
    explanation: "Biến môi trường $PWD luôn cập nhật vị trí."
  },
  {
    id: 108,
    question: "Hãy phân tích cách khai báo và sử dụng biến trong shell script của Linux.",
    options: [
      "A. Khai báo var=value, sử dụng $var, ví dụ: age=30; echo $age",
      "B. Khai báo var$, sử dụng value",
      "C. Không khai báo được",
      "D. Chỉ dùng số"
    ],
    correct: 0,
    explanation: "Biến cục bộ trong script, không cần kiểu dữ liệu."
  },
  {
    id: 109,
    question: "Mô tả cách thực thi một tập tin script trong shell và cung cấp ví dụ.",
    options: [
      "A. Dùng ./script.sh sau khi chmod +x script.sh",
      "B. Dùng ls script.sh",
      "C. Dùng rm script.sh",
      "D. Không thực thi được"
    ],
    correct: 0,
    explanation: "Hoặc sh script.sh nếu không cần execute bit."
  },
  {
    id: 110,
    question: "Hãy giải thích cách sử dụng và ý nghĩa của các lệnh chmod trong Linux để thay đổi quyền truy cập của tệp tin.",
    options: [
      "A. Dùng chmod mode file, ví dụ: chmod 755 file.sh để owner rwx, group/other rx",
      "B. Dùng ls mode file",
      "C. Dùng cp mode file",
      "D. Không thay đổi được"
    ],
    correct: 0,
    explanation: "Ý nghĩa kiểm soát ai được đọc/viết/chạy file, tăng an ninh."
  },
  // CHƯƠNG 4: LẬP TRÌNH C TRÊN LINUX
  {
    id: 111,
    question: "Trình bày chức năng của hàm printf() trong ngôn ngữ lập trình C. Cho ví dụ minh họa.",
    options: [
      "A. In dữ liệu ra màn hình, ví dụ: printf(\"Hello World\");",
      "B. Đọc dữ liệu từ bàn phím",
      "C. Cấp phát bộ nhớ",
      "D. Đóng file"
    ],
    correct: 0,
    explanation: "printf() dùng để xuất chuỗi hoặc biến với định dạng, yêu cầu #include <stdio.h>."
  },
  {
    id: 112,
    question: "Làm thế nào để khai báo một hàm trong ngôn ngữ C? Hãy giải thích các bước cần thiết và cung cấp một ví dụ cụ thể.",
    options: [
      "A. Khai báo prototype trước main, ví dụ: void myFunc(int x); sau đó định nghĩa hàm",
      "B. Chỉ định nghĩa hàm mà không khai báo",
      "C. Khai báo trong main",
      "D. Không cần khai báo"
    ],
    correct: 0,
    explanation: "Bước: loại trả về, tên hàm, tham số; giúp compiler biết hàm tồn tại trước khi dùng."
  },
  {
    id: 113,
    question: "Hàm scanf() có chức năng gì trong ngôn ngữ C? So sánh với hàm printf().",
    options: [
      "A. Đọc dữ liệu từ bàn phím, scanf đọc vào biến, printf in ra",
      "B. Cả hai đều in ra",
      "C. scanf in ra, printf đọc vào",
      "D. Không khác biệt"
    ],
    correct: 0,
    explanation: "scanf dùng định dạng như %d cho int, yêu cầu địa chỉ biến &var."
  },
  {
    id: 114,
    question: "Làm thế nào để khai báo một biến nguyên trong C? Cho ví dụ và giải thích ý nghĩa của việc khai báo này.",
    options: [
      "A. int x = 5; khai báo kiểu int, gán giá trị 5",
      "B. var x = 5;",
      "C. integer x;",
      "D. Không cần khai báo"
    ],
    correct: 0,
    explanation: "Khai báo cấp bộ nhớ và kiểu dữ liệu, ý nghĩa để compiler biết kích thước và cách sử dụng."
  },
  {
    id: 115,
    question: "Cách cấp phát bộ nhớ động trong C được thực hiện như thế nào? Hãy mô tả hàm sử dụng và cung cấp ví dụ.",
    options: [
      "A. Dùng malloc, ví dụ: int* p = (int*)malloc(sizeof(int));",
      "B. Dùng new",
      "C. Dùng alloc",
      "D. Không cấp phát được"
    ],
    correct: 0,
    explanation: "malloc cấp bộ nhớ heap, yêu cầu #include <stdlib.h>, giải phóng bằng free."
  },
  {
    id: 116,
    question: "Trình bày cách mở một file trong chế độ đọc trong C và giải thích các tham số của hàm sử dụng.",
    options: [
      "A. FILE* f = fopen(\"file.txt\", \"r\"); tham số: tên file, mode \"r\" cho đọc",
      "B. fopen(\"file.txt\", \"w\")",
      "C. open(\"file.txt\")",
      "D. Không mở được"
    ],
    correct: 0,
    explanation: "Yêu cầu #include <stdio.h>, trả về pointer file hoặc NULL nếu lỗi."
  },
  {
    id: 117,
    question: "Viết một đoạn mã C để gọi một hàm có tên myFunction(). Giải thích ý nghĩa của mỗi dòng mã.",
    options: [
      "A. myFunction(); gọi hàm đã định nghĩa",
      "B. define myFunction();",
      "C. int myFunction;",
      "D. Không gọi được"
    ],
    correct: 0,
    explanation: "Dòng này thực thi thân hàm, có thể truyền tham số nếu cần."
  },
  {
    id: 118,
    question: "Hàm strlen() trong thư viện chuẩn của C có chức năng gì? Cho ví dụ cụ thể.",
    options: [
      "A. Trả về độ dài chuỗi, ví dụ: strlen(\"hello\") = 5",
      "B. Sao chép chuỗi",
      "C. So sánh chuỗi",
      "D. Ghép chuỗi"
    ],
    correct: 0,
    explanation: "Yêu cầu #include <string.h>, không tính null terminator."
  },
  {
    id: 119,
    question: "Làm thế nào để thực hiện phép chia lấy phần dư trong ngôn ngữ C? Hãy giải thích cú pháp và cung cấp ví dụ.",
    options: [
      "A. Dùng %, ví dụ: 10 % 3 = 1",
      "B. Dùng /",
      "C. Dùng *",
      "D. Không có phép dư"
    ],
    correct: 0,
    explanation: "Modulus operator, chỉ cho số nguyên, trả về dư số."
  },
  {
    id: 120,
    question: "Mô tả cách khai báo và sử dụng một con trỏ trong ngôn ngữ C. Cho ví dụ minh họa.",
    options: [
      "A. int* p; *p = 10; con trỏ lưu địa chỉ",
      "B. int p; p = 10;",
      "C. pointer p;",
      "D. Không khai báo được"
    ],
    correct: 0,
    explanation: "Ví dụ: int x=10; p=&x; *p truy cập giá trị tại địa chỉ."
  },
  {
    id: 121,
    question: "Làm thế nào để khai báo một mảng một chiều trong C? Hãy giải thích cú pháp và cung cấp ví dụ minh họa.",
    options: [
      "A. int arr[5]; khai báo kích thước 5 phần tử",
      "B. array int[5];",
      "C. int arr();",
      "D. Không khai báo được"
    ],
    correct: 0,
    explanation: "Cấp bộ nhớ liên tục, truy cập arr[0] đến arr[4]."
  },
  {
    id: 122,
    question: "Khi nào cần sử dụng lệnh break trong C? Mô tả các trường hợp sử dụng phổ biến và đưa ra ví dụ minh họa.",
    options: [
      "A. Thoát vòng lặp hoặc switch, ví dụ: trong for nếu điều kiện đạt",
      "B. Tiếp tục vòng lặp",
      "C. Kết thúc chương trình",
      "D. Không dùng"
    ],
    correct: 0,
    explanation: "Phổ biến để tránh lặp vô tận hoặc thoát switch case."
  },
  {
    id: 123,
    question: "Hàm pow() trong thư viện math.h có chức năng gì? Hãy viết một đoạn mã để minh họa cách sử dụng hàm này.",
    options: [
      "A. Tính lũy thừa, ví dụ: pow(2,3) = 8.0",
      "B. Căn bậc hai",
      "C. Logarit",
      "D. Không có hàm"
    ],
    correct: 0,
    explanation: "Yêu cầu #include <math.h>, trả về double."
  },
  {
    id: 124,
    question: "Trình bày cách sử dụng lệnh return để trả về giá trị từ một hàm trong C. Cho ví dụ minh họa.",
    options: [
      "A. return value; ví dụ: int func() { return 5; }",
      "B. print value;",
      "C. exit value;",
      "D. Không trả về được"
    ],
    correct: 0,
    explanation: "Kết thúc hàm và gửi giá trị về nơi gọi."
  },
  {
    id: 125,
    question: "Làm thế nào để biên dịch một chương trình C trên hệ điều hành Linux? Hãy giải thích cú pháp lệnh và ý nghĩa của từng tham số.",
    options: [
      "A. gcc file.c -o output; -o chỉ tên file output",
      "B. python file.c",
      "C. run file.c",
      "D. Không biên dịch được"
    ],
    correct: 0,
    explanation: "GCC là compiler, tạo file thực thi từ source code."
  },
  {
    id: 126,
    question: "Hàm strcpy() được sử dụng như thế nào trong C? Hãy viết một đoạn mã minh họa cách sao chép một chuỗi này sang chuỗi khác.",
    options: [
      "A. strcpy(dest, src); ví dụ: strcpy(str2, \"hello\");",
      "B. strlen(dest, src);",
      "C. strcmp(dest, src);",
      "D. Không sao chép được"
    ],
    correct: 0,
    explanation: "Yêu cầu #include <string.h>, sao chép chuỗi src vào dest."
  },
  {
    id: 127,
    question: "Hàm free() có chức năng gì trong lập trình C? Tại sao việc sử dụng hàm này là quan trọng khi làm việc với bộ nhớ động?",
    options: [
      "A. Giải phóng bộ nhớ, quan trọng tránh memory leak",
      "B. Cấp phát bộ nhớ",
      "C. Sao chép bộ nhớ",
      "D. Không quan trọng"
    ],
    correct: 0,
    explanation: "free(p); sau malloc, giải phóng heap."
  },
  {
    id: 128,
    question: "Mô tả chức năng của hàm fseek() trong lập trình C. Đưa ra ví dụ cụ thể về cách di chuyển con trỏ tập tin đến một vị trí chỉ định.",
    options: [
      "A. Di chuyển con trỏ file, ví dụ: fseek(f, 0, SEEK_SET); đến đầu file",
      "B. Đọc file",
      "C. Viết file",
      "D. Đóng file"
    ],
    correct: 0,
    explanation: "Tham số: file pointer, offset, whence như SEEK_SET/SEEK_CUR/SEEK_END."
  },
  {
    id: 129,
    question: "Hàm strcmp() được sử dụng như thế nào trong C để so sánh hai chuỗi? Giải thích cú pháp và cung cấp ví dụ.",
    options: [
      "A. strcmp(str1, str2); trả về 0 nếu bằng, ví dụ: strcmp(\"a\", \"a\") = 0",
      "B. strcpy(str1, str2);",
      "C. strlen(str1, str2);",
      "D. Không so sánh được"
    ],
    correct: 0,
    explanation: "Trả về âm nếu str1 < str2, dương nếu >, dựa trên ASCII."
  },
  {
    id: 130,
    question: "Khi nào nên sử dụng hàm feof() trong lập trình C? Hãy viết một đoạn mã minh họa để kiểm tra xem một file đã kết thúc hay chưa.",
    options: [
      "A. Kiểm tra end of file, ví dụ: while(!feof(f)) { fgets(line, size, f); }",
      "B. Mở file",
      "C. Viết file",
      "D. Không kiểm tra được"
    ],
    correct: 0,
    explanation: "Dùng trong vòng lặp đọc file để tránh đọc quá EOF."
  },
  // CHƯƠNG 5: CÁC HỆ THỐNG QUẢN LÝ PHIÊN BẢN
  {
    id: 131,
    question: "Git là gì và tại sao nó lại quan trọng trong quản lý mã nguồn?",
    options: [
      "A. Hệ thống quản lý phiên bản phân tán, quan trọng vì cho phép làm việc offline và hợp tác dễ dàng",
      "B. Ngôn ngữ lập trình, dùng để viết script",
      "C. Công cụ biên dịch, chỉ dùng cho Linux",
      "D. Hệ điều hành, thay thế SVN"
    ],
    correct: 0,
    explanation: "Git theo dõi thay đổi mã, hỗ trợ branch/merge, giúp tránh xung đột trong dự án nhóm."
  },
  {
    id: 132,
    question: "Ai là người thiết kế Git và mục đích của họ khi tạo ra Git là gì?",
    options: [
      "A. Linus Torvalds, để quản lý kernel Linux sau khi mất giấy phép BitKeeper",
      "B. Richard Stallman, để tạo hệ thống tự do",
      "C. Bill Gates, cho Windows",
      "D. Dennis Ritchie, cho UNIX"
    ],
    correct: 0,
    explanation: "Mục đích tạo công cụ nhanh, phân tán để thay thế hệ thống cũ."
  },
  {
    id: 133,
    question: "Git được phát hành lần đầu tiên vào năm nào và có vai trò gì trong cộng đồng mã nguồn mở?",
    options: [
      "A. 2005, thúc đẩy phát triển phân tán và cộng tác mở",
      "B. 1991, thay thế UNIX",
      "C. 2010, chỉ cho thương mại",
      "D. 1980, cho hệ thống đóng"
    ],
    correct: 0,
    explanation: "Vai trò làm tiêu chuẩn cho mã nguồn mở, dùng trên GitHub/GitLab."
  },
  {
    id: 134,
    question: "Git được viết bằng những ngôn ngữ lập trình nào? Tại sao các ngôn ngữ này được lựa chọn?",
    options: [
      "A. Chủ yếu C, với Perl và Shell, vì hiệu suất cao và dễ mở rộng",
      "B. Chỉ Python, vì dễ học",
      "C. Java và C#, vì platform independent",
      "D. Không dùng ngôn ngữ"
    ],
    correct: 0,
    explanation: "C cho tốc độ, Perl/Shell cho script, phù hợp hệ thống quản lý phiên bản."
  },
  {
    id: 135,
    question: "Giải thích về giấy phép GNU GPL v2 mà Git sử dụng. Tại sao việc lựa chọn giấy phép này lại quan trọng?",
    options: [
      "A. Copyleft yêu cầu chia sẻ mã sửa, quan trọng để giữ tính mở và tự do",
      "B. Permissive như BSD, cho phép đóng mã",
      "C. Đóng như EULA, hạn chế sử dụng",
      "D. Không dùng giấy phép"
    ],
    correct: 0,
    explanation: "GPL v2 đảm bảo Git luôn mở, phù hợp cộng đồng FOSS."
  },
  {
    id: 136,
    question: "Hãy trình bày cách tạo một nhánh mới trong Git và mô tả ý nghĩa của việc tạo nhánh trong quản lý phiên bản.",
    options: [
      "A. git branch new-branch, ý nghĩa phát triển tính năng riêng mà không ảnh hưởng main",
      "B. git commit new-branch",
      "C. git push new-branch",
      "D. Không tạo được"
    ],
    correct: 0,
    explanation: "Nhánh cho phép thử nghiệm, hợp tác song song."
  },
  {
    id: 137,
    question: "SVN là gì và có những khác biệt cơ bản nào so với Git?",
    options: [
      "A. Hệ thống centralized, khác Git phân tán (cần server trung tâm)",
      "B. Giống Git hoàn toàn",
      "C. Chỉ cho file text",
      "D. Không khác biệt"
    ],
    correct: 0,
    explanation: "SVN lưu lịch sử trung tâm, Git mỗi repo đầy đủ."
  },
  {
    id: 138,
    question: "Mô tả cách tải một phiên bản cụ thể của mã nguồn trong SVN. Lệnh nào được sử dụng và tại sao?",
    options: [
      "A. svn checkout -r revision url, để lấy revision cụ thể",
      "B. svn commit -r",
      "C. svn push -r",
      "D. Không tải được"
    ],
    correct: 0,
    explanation: "Dùng để quay lại phiên bản cũ, kiểm tra lịch sử."
  },
  {
    id: 139,
    question: "Tại sao việc sử dụng hệ thống quản lý phiên bản là cần thiết trong phát triển phần mềm? Đưa ra ví dụ cụ thể.",
    options: [
      "A. Theo dõi thay đổi, hợp tác, ví dụ: Git giúp team merge code mà không mất dữ liệu",
      "B. Không cần thiết",
      "C. Chỉ cho cá nhân",
      "D. Chỉ lưu file"
    ],
    correct: 0,
    explanation: "Ngăn xung đột, dễ rollback lỗi."
  },
  {
    id: 140,
    question: "Nêu các lợi ích chính của Git so với SVN. Giải thích tại sao các lợi ích này lại quan trọng đối với nhà phát triển phần mềm.",
    options: [
      "A. Phân tán, nhanh, branch rẻ; quan trọng cho offline và thử nghiệm",
      "B. Centralized, chậm hơn",
      "C. Không lợi ích",
      "D. Giống SVN"
    ],
    correct: 0,
    explanation: "Git linh hoạt hơn cho team lớn, giảm phụ thuộc server."
  },
  {
    id: 141,
    question: "Làm thế nào để xem sự thay đổi giữa các phiên bản trong Git? Giải thích cách sử dụng lệnh liên quan.",
    options: [
      "A. git diff commit1 commit2, hiển thị khác biệt dòng",
      "B. git commit diff",
      "C. git push diff",
      "D. Không xem được"
    ],
    correct: 0,
    explanation: "Dùng để kiểm tra thay đổi trước merge."
  },
  {
    id: 142,
    question: "Trình bày các loại phân nhánh trong Git và ý nghĩa của chúng đối với quá trình phát triển phần mềm.",
    options: [
      "A. Feature, release, hotfix; ý nghĩa tổ chức workflow",
      "B. Chỉ main branch",
      "C. Không phân nhánh",
      "D. Chỉ SVN"
    ],
    correct: 0,
    explanation: "Git Flow model giúp quản lý phát triển, test, fix bug riêng biệt."
  },
  {
    id: 143,
    question: "Làm thế nào để xem trạng thái hiện tại của một repository trong Git? Mô tả chi tiết cú pháp và ý nghĩa của lệnh sử dụng.",
    options: [
      "A. git status, hiển thị file thay đổi/untracked",
      "B. git commit status",
      "C. git push status",
      "D. Không xem được"
    ],
    correct: 0,
    explanation: "Ý nghĩa kiểm tra trước commit/add."
  },
  {
    id: 144,
    question: "Hãy trình bày cách ghi lại tất cả các thay đổi đã thực hiện trong SVN. Lệnh nào được sử dụng và mục đích của lệnh này?",
    options: [
      "A. svn commit -m \"message\", lưu thay đổi lên server",
      "B. svn checkout",
      "C. svn branch",
      "D. Không ghi được"
    ],
    correct: 0,
    explanation: "Mục đích cập nhật lịch sử chung."
  },
  {
    id: 145,
    question: "Trong Git, làm thế nào để xóa một file đã được theo dõi? Giải thích cú pháp và tác dụng của lệnh này.",
    options: [
      "A. git rm file, xóa file và stage thay đổi",
      "B. git add file",
      "C. git commit file",
      "D. Không xóa được"
    ],
    correct: 0,
    explanation: "Tác dụng loại bỏ khỏi repo và file system."
  },
  {
    id: 146,
    question: "Mô tả cách xem lịch sử commit của một file cụ thể trong SVN. Lệnh nào được sử dụng và tại sao nó quan trọng?",
    options: [
      "A. svn log filename, hiển thị lịch sử thay đổi",
      "B. svn commit filename",
      "C. svn push filename",
      "D. Không xem được"
    ],
    correct: 0,
    explanation: "Quan trọng để theo dõi ai thay đổi gì."
  },
  {
    id: 147,
    question: "Khi merge trong Git gặp lỗi, làm thế nào để hủy bỏ merge và quay lại trạng thái trước đó? Giải thích các bước thực hiện.",
    options: [
      "A. git merge --abort, hủy merge conflict",
      "B. git commit --abort",
      "C. git push --abort",
      "D. Không hủy được"
    ],
    correct: 0,
    explanation: "Quay về trước merge, tránh xung đột."
  },
  {
    id: 148,
    question: "Trình bày cách tải về một phiên bản cụ thể của mã nguồn trong SVN và giải thích cú pháp lệnh sử dụng.",
    options: [
      "A. svn update -r revision, cập nhật về revision cụ thể",
      "B. svn commit -r",
      "C. svn branch -r",
      "D. Không tải được"
    ],
    correct: 0,
    explanation: "Cú pháp lấy phiên bản cũ."
  },
  {
    id: 149,
    question: "Hãy giải thích cách tạo một nhánh mới trong SVN và so sánh với cách tạo nhánh trong Git.",
    options: [
      "A. svn copy trunk branches/new, SVN copy toàn bộ, Git nhẹ hơn (git branch new)",
      "B. Giống nhau hoàn toàn",
      "C. SVN không tạo nhánh",
      "D. Git copy toàn bộ"
    ],
    correct: 0,
    explanation: "SVN tốn space hơn do centralized."
  },
  {
    id: 150,
    question: "Làm thế nào để hợp nhất một nhánh con vào nhánh hiện tại trong Git? Giải thích cú pháp và các trường hợp sử dụng.",
    options: [
      "A. git merge branch-name, hợp nhất thay đổi từ branch khác",
      "B. git commit branch",
      "C. git push branch",
      "D. Không hợp nhất được"
    ],
    correct: 0,
    explanation: "Dùng cho integrate feature vào main."
  },
  {
    id: 151,
    question: "Nêu các phần mềm và website phổ biến cho phép lưu trữ Git. Phân tích ưu và nhược điểm của mỗi lựa chọn.",
    options: [
      "A. GitHub (ưu: cộng đồng lớn, nhược: có phí premium), GitLab (ưu: tự host, nhược: phức tạp)",
      "B. Chỉ SVN server",
      "C. Không lưu trữ được",
      "D. Chỉ local"
    ],
    correct: 0,
    explanation: "Bitbucket: ưu tích hợp Jira, nhược giới hạn free."
  },
  {
    id: 152,
    question: "Giải thích ý nghĩa của câu lệnh \"git push origin master\" trong Git và cách nó ảnh hưởng đến repository từ xa.",
    options: [
      "A. Đẩy thay đổi local lên remote branch master",
      "B. Kéo thay đổi từ remote",
      "C. Xóa branch",
      "D. Không ảnh hưởng"
    ],
    correct: 0,
    explanation: "Cập nhật remote, cho phép người khác kéo."
  },
  {
    id: 153,
    question: "Trong SVN, làm thế nào để lấy lại phiên bản cũ nhất của mã nguồn? Giải thích các bước thực hiện và tác dụng của lệnh này.",
    options: [
      "A. svn update -r 1, cập nhật về revision đầu tiên",
      "B. svn commit -r 1",
      "C. svn branch -r 1",
      "D. Không lấy được"
    ],
    correct: 0,
    explanation: "Tác dụng kiểm tra hoặc rollback."
  },
  {
    id: 154,
    question: "Mô tả cách sao lưu (backup) repository trong SVN. Tại sao việc sao lưu lại quan trọng trong quản lý mã nguồn?",
    options: [
      "A. svnadmin dump repo > backup.dump, quan trọng tránh mất dữ liệu",
      "B. svn commit backup",
      "C. svn push backup",
      "D. Không sao lưu được"
    ],
    correct: 0,
    explanation: "Bảo vệ lịch sử, dễ khôi phục."
  },
  {
    id: 155,
    question: "Hãy trình bày cách đặt tên cho một commit trong Git và giải thích ý nghĩa của việc gán nhãn cho commit đó.",
    options: [
      "A. git commit -m \"message\", ý nghĩa mô tả thay đổi",
      "B. git branch -m",
      "C. git push -m",
      "D. Không đặt tên được"
    ],
    correct: 0,
    explanation: "Giúp lịch sử dễ đọc, tìm kiếm."
  }
];

// Hàm để shuffle array cho Open Source
function shuffleOpenSourceArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Hàm để lấy câu hỏi ngẫu nhiên cho Open Source
function getRandomOpenSourceQuestions(numQuestions = 40) {
  const shuffled = shuffleOpenSourceArray([...openSourceQuestionBank]);
  return shuffled.slice(
    0,
    Math.min(numQuestions, openSourceQuestionBank.length)
  );
}