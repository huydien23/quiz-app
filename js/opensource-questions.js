// Open Source Development quiz questions - 50 câu hỏi
const openSourceQuestionBank = [
    {
        id: 1,
        question: "FOSS là viết tắt của cụm từ nào?",
        options: [
            "A. Free and Open Source Software",
            "B. Full Open Source System", 
            "C. First Online Source Service",
            "D. Fast Open Source Solution"
        ],
        correct: 0,
        explanation: "FOSS (Free and Open Source Software) là phần mềm tự do và mã nguồn mở, cho phép người dùng tự do sử dụng, nghiên cứu, sửa đổi và phân phối."
    },
    {
        id: 2,
        question: "Giấy phép nào sau đây là giấy phép copyleft mạnh nhất?",
        options: [
            "A. MIT License",
            "B. GPL (General Public License)",
            "C. Apache License 2.0",
            "D. BSD License"
        ],
        correct: 1,
        explanation: "GPL là giấy phép copyleft mạnh, yêu cầu mọi phần mềm dẫn xuất cũng phải sử dụng GPL và công khai mã nguồn."
    },
    {
        id: 3,
        question: "Git được tạo ra bởi ai?",
        options: [
            "A. GitHub Inc.",
            "B. Linus Torvalds",
            "C. Richard Stallman",
            "D. Eric Raymond"
        ],
        correct: 1,
        explanation: "Git được tạo ra bởi Linus Torvalds vào năm 2005 để quản lý mã nguồn của kernel Linux."
    },
    {
        id: 4,
        question: "Lệnh Git nào dùng để tạo một commit mới?",
        options: [
            "A. git add",
            "B. git commit",
            "C. git push",
            "D. git merge"
        ],
        correct: 1,
        explanation: "Lệnh 'git commit' được sử dụng để tạo một commit mới với các thay đổi đã được staged."
    },
    {
        id: 5,
        question: "README.md trong dự án open source thường chứa thông tin gì?",
        options: [
            "A. Chỉ tên dự án",
            "B. Mô tả, hướng dẫn cài đặt, và sử dụng",
            "C. Chỉ license",
            "D. Chỉ danh sách contributor"
        ],
        correct: 1,
        explanation: "README.md là file quan trọng nhất, chứa mô tả dự án, hướng dẫn cài đặt, sử dụng, đóng góp và các thông tin cần thiết khác."
    }
];

// Function để lấy câu hỏi ngẫu nhiên cho open source topic
function getRandomOpenSourceQuestions(count) {
    const shuffled = [...openSourceQuestionBank].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}