// Sample Python quiz questions - Replace with your 100+ questions from Word file
const questionBank = [
    {
        id: 1,
        question: "Python được tạo ra bởi ai?",
        options: [
            "A. Guido van Rossum",
            "B. Dennis Ritchie", 
            "C. Bjarne Stroustrup",
            "D. James Gosling"
        ],
        correct: 0,
        explanation: "Python được tạo ra bởi Guido van Rossum vào năm 1991."
    },
    {
        id: 2,
        question: "Kết quả của biểu thức 2 ** 3 trong Python là gì?",
        options: [
            "A. 6",
            "B. 8",
            "C. 23",
            "D. 9"
        ],
        correct: 1,
        explanation: "Toán tử ** trong Python là phép lũy thừa. 2 ** 3 = 2³ = 8"
    },
    {
        id: 3,
        question: "Kiểu dữ liệu nào được sử dụng để lưu trữ text trong Python?",
        options: [
            "A. int",
            "B. float",
            "C. str",
            "D. bool"
        ],
        correct: 2,
        explanation: "Kiểu dữ liệu str (string) được sử dụng để lưu trữ text trong Python."
    },
    {
        id: 4,
        question: "Cách nào đúng để tạo comment trong Python?",
        options: [
            "A. // This is a comment",
            "B. /* This is a comment */",
            "C. # This is a comment",
            "D. <!-- This is a comment -->"
        ],
        correct: 2,
        explanation: "Trong Python, comment được tạo bằng ký tự # ở đầu dòng."
    },
    {
        id: 5,
        question: "List trong Python có thể chứa các kiểu dữ liệu khác nhau không?",
        options: [
            "A. Không, chỉ chứa được một kiểu dữ liệu",
            "B. Có, có thể chứa nhiều kiểu dữ liệu khác nhau",
            "C. Chỉ chứa được số",
            "D. Chỉ chứa được string"
        ],
        correct: 1,
        explanation: "List trong Python có thể chứa nhiều kiểu dữ liệu khác nhau trong cùng một list."
    },
    {
        id: 6,
        question: "Phương thức nào dùng để thêm phần tử vào cuối list?",
        options: [
            "A. add()",
            "B. append()",
            "C. insert()",
            "D. push()"
        ],
        correct: 1,
        explanation: "Phương thức append() được sử dụng để thêm phần tử vào cuối list."
    },
    {
        id: 7,
        question: "Kết quả của len('Hello') là gì?",
        options: [
            "A. 4",
            "B. 5",
            "C. 6",
            "D. Error"
        ],
        correct: 1,
        explanation: "Hàm len() trả về độ dài của string. 'Hello' có 5 ký tự."
    },
    {
        id: 8,
        question: "Cách nào đúng để tạo dictionary trong Python?",
        options: [
            "A. dict = [key: value]",
            "B. dict = {key: value}",
            "C. dict = (key: value)",
            "D. dict = <key: value>"
        ],
        correct: 1,
        explanation: "Dictionary trong Python được tạo bằng cặp dấu ngoặc nhọn {} với cặp key: value."
    },
    {
        id: 9,
        question: "Từ khóa nào được sử dụng để định nghĩa hàm trong Python?",
        options: [
            "A. function",
            "B. def",
            "C. func",
            "D. define"
        ],
        correct: 1,
        explanation: "Từ khóa 'def' được sử dụng để định nghĩa hàm trong Python."
    },
    {
        id: 10,
        question: "Toán tử nào được sử dụng để kiểm tra xem một giá trị có trong list không?",
        options: [
            "A. is",
            "B. in",
            "C. has",
            "D. contains"
        ],
        correct: 1,
        explanation: "Toán tử 'in' được sử dụng để kiểm tra xem một giá trị có trong list hay không."
    },
    {
        id: 11,
        question: "Kết quả của 5 // 2 trong Python là gì?",
        options: [
            "A. 2.5",
            "B. 2",
            "C. 3",
            "D. 2.0"
        ],
        correct: 1,
        explanation: "Toán tử // là phép chia lấy phần nguyên. 5 // 2 = 2"
    },
    {
        id: 12,
        question: "Phương thức nào dùng để chuyển string thành chữ hoa?",
        options: [
            "A. uppercase()",
            "B. upper()",
            "C. toUpper()",
            "D. capitalize()"
        ],
        correct: 1,
        explanation: "Phương thức upper() được sử dụng để chuyển string thành chữ hoa."
    },
    {
        id: 13,
        question: "Cấu trúc lặp nào KHÔNG có trong Python?",
        options: [
            "A. for",
            "B. while",
            "C. do-while",
            "D. for-each"
        ],
        correct: 2,
        explanation: "Python không có cấu trúc lặp do-while như các ngôn ngữ khác."
    },
    {
        id: 14,
        question: "Cách nào đúng để import module math trong Python?",
        options: [
            "A. include math",
            "B. import math",
            "C. using math",
            "D. require math"
        ],
        correct: 1,
        explanation: "Từ khóa 'import' được sử dụng để import module trong Python."
    },
    {
        id: 15,
        question: "Kiểu dữ liệu nào trong Python là immutable?",
        options: [
            "A. list",
            "B. dict",
            "C. set",
            "D. tuple"
        ],
        correct: 3,
        explanation: "Tuple là kiểu dữ liệu immutable (không thể thay đổi) trong Python."
    },
    {
        id: 16,
        question: "Hàm nào được sử dụng để đọc input từ người dùng?",
        options: [
            "A. read()",
            "B. input()",
            "C. get()",
            "D. scanf()"
        ],
        correct: 1,
        explanation: "Hàm input() được sử dụng để đọc input từ người dùng trong Python."
    },
    {
        id: 17,
        question: "Kết quả của bool([]) là gì?",
        options: [
            "A. True",
            "B. False",
            "C. Error",
            "D. None"
        ],
        correct: 1,
        explanation: "List rỗng [] được coi là False khi chuyển đổi sang boolean."
    },
    {
        id: 18,
        question: "Cách nào đúng để tạo class trong Python?",
        options: [
            "A. class MyClass:",
            "B. Class MyClass:",
            "C. class MyClass()",
            "D. class MyClass{}"
        ],
        correct: 0,
        explanation: "Từ khóa 'class' với tên class và dấu hai chấm được sử dụng để tạo class."
    },
    {
        id: 19,
        question: "Phương thức nào được gọi khi tạo đối tượng mới?",
        options: [
            "A. __init__()",
            "B. __new__()",
            "C. __create__()",
            "D. __start__()"
        ],
        correct: 0,
        explanation: "Phương thức __init__() được gọi khi khởi tạo đối tượng mới."
    },
    {
        id: 20,
        question: "Từ khóa nào được sử dụng để kế thừa class?",
        options: [
            "A. extends",
            "B. inherits",
            "C. Đặt tên class cha trong ngoặc đơn",
            "D. implements"
        ],
        correct: 2,
        explanation: "Trong Python, kế thừa được thực hiện bằng cách đặt tên class cha trong ngoặc đơn."
    },
    // Thêm các câu hỏi khác để đạt 100+ câu
    {
        id: 21,
        question: "Exception nào được ném khi chia cho 0?",
        options: [
            "A. ValueError",
            "B. ZeroDivisionError",
            "C. ArithmeticError",
            "D. TypeError"
        ],
        correct: 1,
        explanation: "ZeroDivisionError được ném khi thực hiện phép chia cho 0."
    },
    {
        id: 22,
        question: "Từ khóa nào được sử dụng để bắt exception?",
        options: [
            "A. catch",
            "B. except",
            "C. handle",
            "D. rescue"
        ],
        correct: 1,
        explanation: "Từ khóa 'except' được sử dụng để bắt exception trong Python."
    },
    {
        id: 23,
        question: "Kết quả của range(5) là gì?",
        options: [
            "A. [1, 2, 3, 4, 5]",
            "B. [0, 1, 2, 3, 4]",
            "C. [0, 1, 2, 3, 4, 5]",
            "D. range object"
        ],
        correct: 3,
        explanation: "range(5) trả về một range object, không phải list. Nó tạo ra các số từ 0 đến 4."
    },
    {
        id: 24,
        question: "Cách nào đúng để mở file trong Python?",
        options: [
            "A. file = open('filename.txt', 'r')",
            "B. file = File.open('filename.txt')",
            "C. file = read('filename.txt')",
            "D. file = load('filename.txt')"
        ],
        correct: 0,
        explanation: "Hàm open() với tên file và mode được sử dụng để mở file trong Python."
    },
    {
        id: 25,
        question: "Lambda function trong Python là gì?",
        options: [
            "A. Hàm có tên",
            "B. Hàm không tên (anonymous function)",
            "C. Hàm đệ quy",
            "D. Hàm built-in"
        ],
        correct: 1,
        explanation: "Lambda function là hàm không tên (anonymous function) trong Python."
    },
    {
        id: 26,
        question: "Kết quả của [1, 2, 3] + [4, 5, 6] là gì?",
        options: [
            "A. [5, 7, 9]",
            "B. [1, 2, 3, 4, 5, 6]",
            "C. Error",
            "D. 21"
        ],
        correct: 1,
        explanation: "Phép cộng hai list sẽ nối chúng lại với nhau."
    },
    {
        id: 27,
        question: "Phương thức nào dùng để loại bỏ khoảng trắng ở đầu và cuối string?",
        options: [
            "A. trim()",
            "B. strip()",
            "C. clean()",
            "D. remove()"
        ],
        correct: 1,
        explanation: "Phương thức strip() được sử dụng để loại bỏ khoảng trắng ở đầu và cuối string."
    },
    {
        id: 28,
        question: "Set trong Python có thể chứa phần tử trùng lặp không?",
        options: [
            "A. Có",
            "B. Không",
            "C. Chỉ với số",
            "D. Chỉ với string"
        ],
        correct: 1,
        explanation: "Set trong Python không thể chứa các phần tử trùng lặp."
    },
    {
        id: 29,
        question: "Cách nào đúng để tạo generator trong Python?",
        options: [
            "A. Sử dụng yield",
            "B. Sử dụng return",
            "C. Sử dụng generate",
            "D. Sử dụng create"
        ],
        correct: 0,
        explanation: "Từ khóa 'yield' được sử dụng để tạo generator trong Python."
    },
    {
        id: 30,
        question: "Module nào được sử dụng để làm việc với regular expressions?",
        options: [
            "A. regex",
            "B. re",
            "C. regexp",
            "D. pattern"
        ],
        correct: 1,
        explanation: "Module 're' được sử dụng để làm việc với regular expressions trong Python."
    },
    {
        id: 31,
        question: "Decorator trong Python bắt đầu bằng ký tự gì?",
        options: [
            "A. #",
            "B. @",
            "C. $",
            "D. &"
        ],
        correct: 1,
        explanation: "Decorator trong Python bắt đầu bằng ký tự @."
    },
    {
        id: 32,
        question: "Từ khóa nào được sử dụng để tạo global variable trong function?",
        options: [
            "A. global",
            "B. public",
            "C. extern",
            "D. static"
        ],
        correct: 0,
        explanation: "Từ khóa 'global' được sử dụng để tạo global variable trong function."
    },
    {
        id: 33,
        question: "Kết quả của 'abc' * 3 là gì?",
        options: [
            "A. 'abcabcabc'",
            "B. 'abc3'",
            "C. Error",
            "D. 'aabbcc'"
        ],
        correct: 0,
        explanation: "Phép nhân string với số sẽ lặp lại string đó số lần tương ứng."
    },
    {
        id: 34,
        question: "List comprehension nào đúng để tạo list các số chẵn từ 0 đến 10?",
        options: [
            "A. [x for x in range(11) if x % 2 == 0]",
            "B. [x for x in range(10) where x % 2 == 0]",
            "C. [x if x % 2 == 0 for x in range(11)]",
            "D. [x for x in range(11) when x % 2 == 0]"
        ],
        correct: 0,
        explanation: "List comprehension đúng sử dụng if để lọc điều kiện."
    },
    {
        id: 35,
        question: "Từ khóa nào được sử dụng để import tất cả từ một module?",
        options: [
            "A. import module.*",
            "B. from module import *",
            "C. import * from module",
            "D. include module.*"
        ],
        correct: 1,
        explanation: "Cú pháp 'from module import *' được sử dụng để import tất cả từ module."
    },
    {
        id: 36,
        question: "Phương thức nào dùng để chuyển đổi string thành list?",
        options: [
            "A. split()",
            "B. tolist()",
            "C. convert()",
            "D. parse()"
        ],
        correct: 0,
        explanation: "Phương thức split() được sử dụng để chuyển string thành list."
    },
    {
        id: 37,
        question: "None trong Python tương đương với gì trong các ngôn ngữ khác?",
        options: [
            "A. null",
            "B. undefined",
            "C. empty",
            "D. void"
        ],
        correct: 0,
        explanation: "None trong Python tương đương với null trong các ngôn ngữ khác."
    },
    {
        id: 38,
        question: "Cách nào đúng để tạo virtual environment?",
        options: [
            "A. python -m venv myenv",
            "B. python create venv myenv",
            "C. python virtual myenv",
            "D. python env myenv"
        ],
        correct: 0,
        explanation: "Lệnh 'python -m venv myenv' được sử dụng để tạo virtual environment."
    },
    {
        id: 39,
        question: "Package manager mặc định của Python là gì?",
        options: [
            "A. npm",
            "B. pip",
            "C. yarn",
            "D. conda"
        ],
        correct: 1,
        explanation: "pip là package manager mặc định của Python."
    },
    {
        id: 40,
        question: "Từ khóa nào được sử dụng để thoát khỏi vòng lặp?",
        options: [
            "A. exit",
            "B. break",
            "C. stop",
            "D. end"
        ],
        correct: 1,
        explanation: "Từ khóa 'break' được sử dụng để thoát khỏi vòng lặp."
    },
    // Thêm 60 câu hỏi nữa để có đủ 100 câu
    {
        id: 41,
        question: "Từ khóa nào để bỏ qua iteration hiện tại và chuyển sang iteration tiếp theo?",
        options: [
            "A. skip",
            "B. continue",
            "C. next",
            "D. pass"
        ],
        correct: 1,
        explanation: "Từ khóa 'continue' được sử dụng để bỏ qua iteration hiện tại."
    },
    {
        id: 42,
        question: "Kết quả của type([1, 2, 3]) là gì?",
        options: [
            "A. 'list'",
            "B. <class 'list'>",
            "C. list",
            "D. array"
        ],
        correct: 1,
        explanation: "Hàm type() trả về <class 'list'> cho list object."
    },
    {
        id: 43,
        question: "Cách nào đúng để format string trong Python 3.6+?",
        options: [
            "A. 'Hello %s' % name",
            "B. 'Hello {}'.format(name)",
            "C. f'Hello {name}'",
            "D. Tất cả đều đúng"
        ],
        correct: 3,
        explanation: "Tất cả các cách đều có thể sử dụng để format string trong Python."
    },
    {
        id: 44,
        question: "Method nào được gọi khi sử dụng str() trên object?",
        options: [
            "A. __str__()",
            "B. __repr__()",
            "C. __string__()",
            "D. __format__()"
        ],
        correct: 0,
        explanation: "Method __str__() được gọi khi sử dụng str() trên object."
    },
    {
        id: 45,
        question: "Cách nào để tạo shallow copy của list?",
        options: [
            "A. list.copy()",
            "B. list[:]",
            "C. list(original_list)",
            "D. Tất cả đều đúng"
        ],
        correct: 3,
        explanation: "Tất cả các cách đều tạo shallow copy của list."
    },
    {
        id: 46,
        question: "Module nào được sử dụng để làm việc với JSON?",
        options: [
            "A. json",
            "B. jsonlib",
            "C. simplejson",
            "D. jsonparser"
        ],
        correct: 0,
        explanation: "Module 'json' built-in được sử dụng để làm việc với JSON."
    },
    {
        id: 47,
        question: "Cách nào đúng để handle multiple exceptions?",
        options: [
            "A. except (ValueError, TypeError):",
            "B. except ValueError, TypeError:",
            "C. except ValueError or TypeError:",
            "D. except ValueError and TypeError:"
        ],
        correct: 0,
        explanation: "Sử dụng tuple trong except để handle multiple exceptions."
    },
    {
        id: 48,
        question: "Từ khóa nào luôn được thực thi dù có exception hay không?",
        options: [
            "A. finally",
            "B. always",
            "C. ensure",
            "D. cleanup"
        ],
        correct: 0,
        explanation: "Từ khóa 'finally' luôn được thực thi dù có exception hay không."
    },
    {
        id: 49,
        question: "Kết quả của all([True, True, False]) là gì?",
        options: [
            "A. True",
            "B. False",
            "C. [True, True, False]",
            "D. Error"
        ],
        correct: 1,
        explanation: "Hàm all() trả về False nếu có ít nhất một phần tử là False."
    },
    {
        id: 50,
        question: "Kết quả của any([False, False, True]) là gì?",
        options: [
            "A. True",
            "B. False",
            "C. [False, False, True]",
            "D. Error"
        ],
        correct: 0,
        explanation: "Hàm any() trả về True nếu có ít nhất một phần tử là True."
    }
];

// Hàm để shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Hàm để lấy 40 câu hỏi ngẫu nhiên
function getRandomQuestions(numQuestions = 40) {
    const shuffled = shuffleArray([...questionBank]);
    return shuffled.slice(0, Math.min(numQuestions, questionBank.length));
}