const DATA = {
    level_1: [
        {
            question: 'Số “bảy triệu hai trăm nghìn” có:',
            options: ['Ba chữ số 0', 'Bốn chữ số 0', 'Năm chữ số 0', 'Sáu chữ số 0'],
            correctAnswer: 2
        },
        {
            question: 'Số liền sau của số 9 090 999 là:',
            options: ['10 000 000', '9 091 000', '9 090 998', '90 910 000'],
            correctAnswer: 1
        },
        {
            question: 'Số thích hợp để viết vào chỗ chấm của 9999 < …. < 10 001 là:',
            options: ['99 991', '9 990', '10 000', '99 910'],
            correctAnswer: 2
        },
        {
            question: 'Giá trị của biểu thức 526 +56 x 100 – 100 là:',
            options: ['526', '58 100', '6 026', '6 126'],
            correctAnswer: 2
        },
        {
            question: 'Chia 37 298 cho 7 được kết quả là 5 328 và còn 2. Khi đó số 2 được gọi là:',
            options: ['Thương', 'Số dư', 'Số bị chia', 'Số chia'],
            correctAnswer: 1
        },
        {
            question: 'Để giá trị của biểu thức _54 x 5 lớn hơn 1500 và bé hơn 1800 thì chữ số thích hợp cần viết vào ô trống là:',
            options: ['2', '4', '3', '5'],
            correctAnswer: 2
        },
        {
            question: 'Kết quả của phép cộng 7215 + 1655 gần số tròn nghìn nào nhất?',
            options: ['10 000', '9000', '8000', '700080'],
            correctAnswer: 1
        },
        {
            question: 'Phép tính nào dưới đây có kết quả bé hơn 5 km?',
            options: ['4 km +500 m', '6 km – 1000 m', '100 m x 50', '100 km: 2'],
            correctAnswer: 0
        },
        {
            question: 'Số thích hợp để viết vào chỗ chấm của 8 km 950 m + …. m = 9 km là:',
            options: ['50', '150', '5', '105'],
            correctAnswer: 0
        },
        {
            question: 'Trong các số dưới đây, số đo nào bé nhất?',
            options: ['1 kg 512g', '1 kg 5 hg', '1 kg 51 dag', '10 hg 50g'],
            correctAnswer: 3
        },
        {
            question: 'Đổi 107 phút =…giờ …. phút, kết quả là:',
            options: ['10 giờ 7 phút', '1 giờ 47 phút', '1 giờ 17 phút', '1 giờ 7 phút'],
            correctAnswer: 1
        },
        {
            question: 'Một năm có khoảng bao nhiêu tuần?',
            options: ['42 tuần', '50 tuần', '56 tuần', '52 tuần'],
            correctAnswer: 3
        },
    ],

    level_2: [
        {
            question: 'Cho tập hợp M = {2 ; 4 ; 6}. Khẳng định nào sau đây là đúng?',
            options: ['Số 2 không phải là phần tử của tập hợp M', 'Số 4 là phần tử của tập hợp M', 'Số 6 không phải là phần tử của tập hợp M', 'Số 3 là phần tử của tập hợp M'],
            correctAnswer: 1
        },
        {
            question: 'Tập hợp {x ∈ N, x < 5} còn có cách viết khác là:',
            options: ['{1 ; 2 ; 3 ; 4 ; 5}', '{0 ; 1 ; 2 ; 3 ; 4 ; 5}', '{1 ; 2 ; 3 ; 4}', '{0 ; 1 ; 2 ; 3 ; 4}'],
            correctAnswer: 3
        },
        {
            question: 'Tập hợp {x ∈ N, x < 6} còn có cách viết khác là:',
            options: ['{1 ; 2 ; 3 ; 4 ; 5 ; 6}', '{0 ; 1 ; 2 ; 3 ; 4 ; 5 ; 6}', '{1 ; 2 ; 3 ; 4 ; 5}', '{0 ; 1 ; 2 ; 3 ; 4 ; 5}'],
            correctAnswer: 3
        },
        {
            question: 'P = {a ; b ; p ; 0 ; 1} và Q = {b ; d ; m ; 1 ; 2}. Tập hợp M các phần tử thuộc Q mà không thuộc P là:',
            options: ['M = {a ; p ; 1}', 'M = {d ; m ; 1}', 'M = {d ; m}', 'M = {d ; m ; 2}'],
            correctAnswer: 3
        },
        {
            question: 'Gọi M là tập hợp các số tự nhiên nhỏ hơn 7. Cách viết nào sau đây không đúng?',
            options: ['0 ∈ M', '1 ∈ M', '8 ∉ M', '7 ∈ M'],
            correctAnswer: 3
        },
        {
            question: 'Đẳng thức nào sau đây thể hiện tính chất giao hoán của phép cộng các số tự nhiên (với m, n, p là các số tự nhiên)?',
            options: ['m + (n + p) = (m + n) + p', 'm . (n + p) = m . n + m . p', 'm + n = n + m', '(m + n) . p = m . p + n . p'],
            correctAnswer: 0
        },
        {
            question: 'Tìm m để đồ thị hàm số y = ( 4m – 1 )x + 3 song song với đường thẳng y = - x + 7',
            options: ['m = 1', 'm = 0', 'm = bất kỳ', 'Không có đáp án'],
            correctAnswer: 1
        },
        {
            question: 'Cho tam giác DEF vuông tại D, có DE =3cm; DF =4cm. Khi đó độ dài cạnh huyềnbằng :',
            options: ['5 cm', '25 m', 'a cm', '√5 cm'],
            correctAnswer: 0
        },
        {
            question: 'Căn bậc ba của -125 là:',
            options: ['0', 'a', 'a', '√a+b'],
            correctAnswer: 1
        },
        {
            question: 'Cho tam giác DEF vuông tại D, có DE =3cm; DF =4cm. Khi đó độ dài cạnh huyềnbằng :',
            options: ['số có bình phương bằng a', 'a', 'a', '√a+b'],
            correctAnswer: 1
        },
        {
            question: 'Cho tam giác DEF vuông tại D, có DE =3cm; DF =4cm. Khi đó độ dài cạnh huyềnbằng :',
            options: ['số có bình phương bằng a', 'a', 'a', '√a+b'],
            correctAnswer: 1
        },
    ]

}



//Generate random numbers
// console.log(randomQuestion(DATA.level_1))

function randomQuestion(array) {
    if (array != null && array.length != 0) {
        var gen_nums = [];

        for (; ;) {
            if (gen_nums.length == 10) {
                break;
            }
            let randomNumber = get_rand(array.length);

            if (!in_array(randomNumber, gen_nums)) {
                gen_nums.push(randomNumber)
            }
        }
        // console.log(gen_nums);
        // console.log(generateQuestion(gen_nums, array));

        let questions = [];

        for (let i = 0; i < gen_nums.length; i++) {
            questions.push(array[gen_nums[i]]);
        }
        return questions;
        let correct = questions[i].correctAnswer.value
    }
}

function get_rand(n) {
    return Math.floor(Math.random() * n);
}

function in_array(el, gen_nums) {
    for (var i = 0; i < gen_nums.length; i++)
        if (gen_nums[i] == el) return true;
    return false;
}


//Select random question

