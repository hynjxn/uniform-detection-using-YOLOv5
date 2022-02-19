$(document).ready(function () {
  $("#close").on("click", function () {
    if ($("#popup__title").text() === "학생정보 수정/삭제하기") {
      $("#popup__title").text("학생 추가하기");
      $("#addStudentBtn").text("추가하기");
      $("#deleteStudentBtn").hide();
      $("#student-penaltypoints").attr("disabled", true);

      $("#student-id").val("");
      $("#student-name").val("");
      $("#parent-phonenumber").val("");
      $("#student-penaltypoints").val("");
    }

    $("#container").removeClass("active");
  });
});

function showPopupA() {
  $("#container").addClass("active");

}

function showPopupB() {
  $("#container").addClass("active");
  $("#popup__title").text("학생정보 수정/삭제하기");
  $("#addStudentBtn").text("수정하기");
  $("#deleteStudentBtn").show();
  $("#student-penaltypoints").attr("disabled", false);

  let student = $(event.target).parent().parent().children();
  let studentId = student.eq(1).text().trim();
  let studentName = student.eq(2).text().trim();
  let parentPhonenumber = student.eq(3).text().trim();
  let penaltiyPoints = student.eq(4).text().trim();
  console.log(studentId, studentName, parentPhonenumber, penaltiyPoints);

  $("#student-id").val(studentId);
  $("#student-name").val(studentName);
  $("#parent-phonenumber").val(parentPhonenumber);
  $("#student-penaltypoints").val(penaltiyPoints);
}

function clickDeleteStudentBtn() {
  let id = $("#student-id").val();
  $.ajax({
                type: "POST",
                url: "/penalty/delete",
                data: {id_give: id},
                success: function (response) {
                    if (response["result"] == "success") {
                        alert(response["msg"]);
                        window.location.reload();
                    }
                }
            })
}


function clickAddStudentBtn(){
          let id = "'"+$('#student-id').val()+"'";
          let name = "'"+$('#student-name').val()+"'";
          let phone = "'"+$('#parent-phonenumber').val()+"'";
          let penalty = $('#student-penaltypoints').val();
          $.ajax({
                type: "POST",
                url: "/penalty/add",
                data: {id_give: id, name_give: name, phone_give: phone, penalty_give: penalty},
                success: function (response) {
                    if (response["result"] == "success") {
                        alert(response["msg"]);
                        window.location.reload();
                    }
                }
            })

    }
