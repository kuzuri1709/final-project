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
        {
            question: ' Muốn cộng hai phân số có cùng mẫu số ta làm như sau:',
            options: ['Ta lấy tử số cộng với tử số, mẫu số cộng với mẫu số.', '	Ta lấy tử số cộng với tử số, mẫu số giữ nguyên.', 'Ta giữ nguyên tử số, mẫu số cộng với mẫu số.', 'Ta lấy tử số cộng với tử số, mẫu số nhân với mẫu số.'],
            correctAnswer: 0
        },
        {
            question: 'Chọn phát biểu sai trong các phát biểu sau:',
            options: ['Muốn trừ hai phân số có cùng mẫu số ta lấy tử số trừ đi tử số, giữ nguyên mẫu số.', 'Muốn trừ hai phân số có cùng mẫu số ta lấy tử số trừ đi tử số, mẫu số trừ đi mẫu số.', 'Muốn cộng hai phân số khác mẫu số, ta quy đồng mẫu số hai phân số rồi cộng hai phân số đã quy đồng.', 'Muốn trừ hai phân số khác mẫu số, ta quy đồng mẫu số hai phân số rồi trừ hai phân số đã quy đồng.'],
            correctAnswer: 0
        },
        {
            question: 'Chọn đáp án đúng nhất:',
            options: ['Phân số đảo ngược của một phân số là phân số đảo ngược tử số thành mẫu số, mẫu số thành tử số.', 'Muốn nhân hai phân số ta lấy tử số nhân với tử số, mẫu số nhân với mẫu số.', 'Muốn chia một phân số cho một phân số, ta lấy phân số thứ nhất nhân với phân số thứ hai đảo ngược.', 'Tất cả các đáp án trên đều đúng.'],
            correctAnswer: 0
        },
        {
            question: 'Mua 6 quyển vở thì hết 54000 đồng. Hỏi mua 9 quyển vở như thế thì hết bao nhiêu tiền?',
            options: ['9000 đồng', '72000 đồng', '81000 đồng', '135000 đồng'],
            correctAnswer: 2
        },
        {
            question: 'Có 15 người làm xong một công việc trong 16 ngày. Hỏi nếu có 24 người thì sẽ làm xong công việc đó trong bao nhiêu ngày? (Biết mức làm của mỗi người là như nhau).',
            options: ['8 ngày', '10 ngày', '12 ngày', '14 ngày'],
            correctAnswer: 1
        },
        {
            question: 'Một bếp ăn dự trữ gạo đủ cho 80 người ăn trong 15 ngày. Nếu chỉ có 60 người ăn thì số gạo đó đủ dùng trong bao nhiêu ngày?',
            options: ['10 ngày', '20 ngày', '30 ngày', '320 ngày'],
            correctAnswer: 1
        },
        {
            question: 'Người ta trồng ngô trên thửa ruộng hình chữ nhật có chiều rộng bằng 40m, chiều dài bằng 3/2 chiều rộng. Trung bình cứ 100m2 thu được 50kg ngô. Hỏi trên cả thửa ruộng đó người ta thu hoạch được bao nhiêu tạ ngô?',
            options: ['12', '120', '1200', '12000'],
            correctAnswer: 0
        },
        {
            question: ' Năm học sinh nam câu được 5 con cá trong 5 phút. Hỏi cùng với tốc độ câu như vậy thì 100 học sinh nam câu đ¬ược 100 con cá trong bao lâu?',
            options: ['5 phút', '100 phút', '25 phút', '1 phút'],
            correctAnswer: 0
        },
        {
            question: ' Phải nhân 45 với số nào để được kết quả là một số có chín chữ số 5 ?',
            options: ['12 345 678', '12 345 769', ' 12 345 679', ' 12 345 769 '],
            correctAnswer: 2
        },
        {
            question: ' Khi biết tổng và hệu của hai số, ta có thể áp dụng công thức nào để tìm hai số đó?',
            options: ['	Số lớn = (tổng + hiệu) : 2', 'Số bé = (tổng – hiệu) : 2', '	Cả A và B đều sai', 'Cả A và B đều đúng'],
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
        {
            question: 'So sánh hai số x = 2/-5 và y = -3/13 ',
            options: ['x > y', 'x < y', 'x = y', 'x >= y'],
            correctAnswer: 1
        },
        {
            question: 'Kết quả của phép tính (3/2).(4/7) là:',
            options: ['Một số nguyên âm', ' Một số nguyên dương', 'Một phân số nhỏ hơn 0 ', 'Một phân số lớn hơn 0'],
            correctAnswer: 3 
        },
        {
            question: 'Tính nhanh 21,6 + 34,7 + 78,4 + 65,3 được:',
            options: ['100', '200', '300', '400'],
            correctAnswer: 1
        },
        {
            question: 'Chia 48 thành bốn phần tỉ lệ với các số là 3; 5; 7; 9. Các số đó theo thứ tự tăng dần là?',
            options: ['6; 12; 14; 18 ', '18; 14; 10; 6', '6; 14; 10; 18 ', ' 6; 10; 14; 18'],
            correctAnswer: 3
        },
        {
            question: 'Tìm x, y biết x/y = 7/3 và 5x - 2y = 87',
            options: ['x = 9 ; y = 21', 'x = 21 ; y = 9', 'x = 21 ; y = -9', 'x = -21 ; y = -9'],
            correctAnswer: 1
        },
        {
            question: 'Cho x/2 = y/5 và x.y = 10. Tính x - y, biết x > 0, y > 0 ',
            options: ['-3', '3', '8', '-8'],
            correctAnswer: 0
        },
        {
            question: 'Làm tròn số 0,158 đến chữ số thập phân thứ nhất ta được',
            options: [' 0,17', '0,159', '0,16', '0,2'],
            correctAnswer: 3
        },
        {
            question: 'Cho biết x tỉ lệ thuận với y theo hệ số tỉ lệ là 0,6 và y tỉ lệ thuận với z theo hệ số tỉ lệ là 3. Hỏi x tỉ lệ thuận với z theo hệ số tỉ lệ là bao nhiêu?',
            options: ['2,4', '3,6', '1,8', '5'],
            correctAnswer: 2
        },
        {
            question: 'Một đội thợ gồm 35 người ăn hết số gạo được phân phát trong 68 ngày. Hỏi 28 người ăn hết số gạo đó trong mấy ngày? ',
            options: ['50 ngày', '65 ngày', '85 ngày', '100 ngày'],
            correctAnswer: 1
        },
        {
            question: ' Giá trị của biểu thức A = ( xy2 )3:( xy )3 tại x= -1, y =1 là ?',
            options: [' A= -1', ' A= 1', ' A= 0', ' A= 2'],
            correctAnswer: 1
        },
    ],

    level_3: [
        {
            question: 'Các câu sau đây,có bao nhiêu câu là mệnh đề? (1) Ở đây đẹp quá! (2) Phương trình ((x^2) - 3x + 1 = 0 ) vô nghiệm (3) 16 không là số nguyên tố (4) Hai phương trình ((x^2) - 4x + 3 = 0 ) và ((x^2) - căn (x + 3)  + 1 = 0 ) có nghiệm chung. (5) Số (pi ) có lớn hơn (3 ) hay không? (6) Italia vô địch Worldcup 2006 (7) Hai tam giác bằng nhau khi và chỉ khi chúng có diện tích bằng nhau. (8) Một tứ giác là hình thoi khi và chỉ khi nó có hai đường chéo vuông góc với nhau.',
            options: ['4', '6', '7', '5'],
            correctAnswer: 1
        },
        {
            question: 'Cho hai tập khác rỗng A = ( (m - 1;4) ];B = ( ( - 2;2m + 2) ),m thuộc mathbb(R). Tìm m để A giao B # rỗng .',
            options: ['-2 < m < 5', 'm > -3', '-1 < m < 5', '1 < m < 5'],
            correctAnswer: 0
        },
        {
            question: 'Cho (A = [ ( - 3;2) ) ). Tập hợp ((C_ mathbb(R))A ) là :',
            options: ['-2 < m < 5', 'm > -3', '-1 < m < 5', '1 < m < 5'],
            correctAnswer: 0
        },
        {
            question: 'Cho (A = [ ( - 3;2) ) ). Tập hợp ((C_ mathbb(R))A ) là :',
            options: ['-2 < m < 5', 'm > -3', '-1 < m < 5', '1 < m < 5'],
            correctAnswer: 0
        },
        {
            question: 'Cho (A = [ ( - 3;2) ) ). Tập hợp ((C_ mathbb(R))A ) là :',
            options: ['-2 < m < 5', 'm > -3', '-1 < m < 5', '1 < m < 5'],
            correctAnswer: 0
        },
        {
            question: 'Cho (A = [ ( - 3;2) ) ). Tập hợp ((C_ mathbb(R))A ) là :',
            options: ['-2 < m < 5', 'm > -3', '-1 < m < 5', '1 < m < 5'],
            correctAnswer: 0
        },
        {
            question: 'Cho (A = [ ( - 3;2) ) ). Tập hợp ((C_ mathbb(R))A ) là :',
            options: ['-2 < m < 5', 'm > -3', '-1 < m < 5', '1 < m < 5'],
            correctAnswer: 0
        },
        {
            question: 'Cho (A = [ ( - 3;2) ) ). Tập hợp ((C_ mathbb(R))A ) là :',
            options: ['-2 < m < 5', 'm > -3', '-1 < m < 5', '1 < m < 5'],
            correctAnswer: 0
        },
        {
            question: 'Cho (A = [ ( - 3;2) ) ). Tập hợp ((C_ mathbb(R))A ) là :',
            options: ['-2 < m < 5', 'm > -3', '-1 < m < 5', '1 < m < 5'],
            correctAnswer: 0
        },
        {
            question: 'Cho (A = [ ( - 3;2) ) ). Tập hợp ((C_ mathbb(R))A ) là :',
            options: ['-2 < m < 5', 'm > -3', '-1 < m < 5', '1 < m < 5'],
            correctAnswer: 0
        },
        {
            question: 'Cho (A = [ ( - 3;2) ) ). Tập hợp ((C_ mathbb(R))A ) là :',
            options: ['-2 < m < 5', 'm > -3', '-1 < m < 5', '1 < m < 5'],
            correctAnswer: 0
        },
        {
            question: ' Lớp 10A có 7 HS giỏi Toán, 5 HS giỏi Lý, 6 HS giỏi Hoá, 3 HS giỏi cả Toán và Lý, 4 HS giỏi cả Toán và Hoá, 2 HS giỏi cả Lý và Hoá, 1 HS giỏi cả 3 môn Toán , Lý, Hoá . Số HS giỏi  ít nhất một môn (Toán, Lý , Hoá ) của lớp 10A là:',
            options: ['9', '10', '18', '28'],
            correctAnswer:  2
        },
        {
            question: 'Hỏi có bao nhiêu cách xếp học sinh trong tổ thành một hàng dọc?',
            options: ['	4!.5!', '4!+5!', '9! ', 'A49.A59'],
            correctAnswer: 3
        },
        {
            question: 'Sắp xếp năm bạn học sinh An, Bình, Chi, Dũng, Lệ vào một chiếc ghế dài có 5 chỗ ngồi. Số cách sắp xếp sao cho bạn Chi luôn ngồi chính giữa là ',
            options: ['24', '120', '60', '16'],
            correctAnswer: 0
        },
        {
            question: 'Có 3 viên bi đen khác nhau, 4 viên bi đỏ khác nhau, 5 viên bi xanh khác nhau. Hỏi có bao nhiêu cách sắp xếp các viên bi trên thành một dãy sao cho các viên bi cùng màu ở cạnh nhau? ',
            options: ['345600', '725760 ', '103680 ', '518400'],
            correctAnswer: 2
        },
        {
            question: ' Có bao nhiêu cách xếp khác nhau cho 4 người ngồi vào 6 chỗ trên một bàn dài? ',
            options: ['15', '720', '30', '360'],
            correctAnswer: 3
        },
        {
            question: 'Trong một ban chấp hành đoàn gồm 7 người, cần chọn ra 3 người vào ban thường vụ. Nếu cần chọn ban thường vụ gồm ba chức vụ bí thư, phó bí thư, ủy viên thường vụ thì có bao nhiêu cách chọn? ',
            options: ['210', '200', '180', '150'],
            correctAnswer: 0
        },
        {
            question: 'Dãy số (un) có phải là cấp số cộng không ? Nếu phải hãy xác định số công sai d, biết rẳng  un = 2n + 3 ',
            options: ['d = -2 ', 'd = 3 ', 'd = 5 ', 'd = 2 '],
            correctAnswer: 3
        },
        {
            question: ' Cho cấp số cộng có 8 số hạng. Số hạng đầu bằng 3 số hạng cuối bằng 24. Tính tổng các số hạng này ',
            options: ['105', '27', '108', '111'],
            correctAnswer: 2
        },
        {
            question: 'Cho 4 số lập thành cấp số cộng. Tổng của chúng bằng 22. Tổng các bình phương của chúng bằng 166. Tổng các lập phương của chúng bằng : ',
            options: ['22', '166', '1752', '1408'],
            correctAnswer: 3
        },
        {
            question: 'Cho cấp số cộng (un) có: u1 = -0,1; d = 0,1. Số hạng thứ 7 của cấp số cộng này là: ',
            options: ['1,6', '6', '0,5', '0,6'],
            correctAnswer: 2
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
        let correct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        correct[i] = questions[i].correctAnswer.value
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

