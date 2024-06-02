document.addEventListener("DOMContentLoaded", function () {
    // Lấy element có id 'question'
    var questionDiv = document.getElementById("question");
  
    // Định nghĩa câu hỏi và các lựa chọn trả lời
    var quizContent = {
      question: "Ngày giải phóng miền Nam là ngày nào sau đây:",
      answers: [
        { option: "A", text: "27/4" },
        { option: "B", text: "28/4" },
        { option: "C", text: "29/4" },
        { option: "D", text: "30/4" },
      ],
    };
  
    // Cập nhật câu hỏi
    questionDiv.textContent = quizContent.question;
  
    // Tạo và thêm các lựa chọn trả lời vào div có id 'question'
    quizContent.answers.forEach(function (answer) {
      var answerDiv = document.createElement("div");
      answerDiv.className = "answer";
  
      var input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = answer.option;
  
      var label = document.createElement("label");
      label.textContent = answer.text;
      label.prepend(input);
  
      questionDiv.appendChild(answerDiv);
      answerDiv.appendChild(label);
    });
  
    // Tìm nút kiểm tra và cập nhật sự kiện onclick
    var button = document.querySelector("button");
    button.onclick = function () {
      var selectedAnswer = document.querySelector(
        'input[name="answer"]:checked'
      ).value;
      if (selectedAnswer === "D") {
        alert("Exactly bro!");
      } else {
        alert("Wrong answer bro, try again");
      }
    };
  });