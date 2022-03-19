$(document).ready(function () {
  $(".search-input").on("keypress", function (e) {
    if (e.key == "Enter") {
      execSearch();
    }
  });
});

function execSearch() {
  $(".table-body").empty();
  let tempHtml = `   <td>1</td>
  <td>33333</td>
  <td>
    <span class="student-name" onclick="showPopupB()">홍길동</span>
  </td>
  <td>01047106207</td>
  <td>-30</td>`;
  $(".table-body").append(tempHtml);
}

// function execSearch() {
//   let selectedOption = $("select[name=search-options]").val();
//   let keyword = $(".search-input").val();
//   if (keyword !== null) {
// $.ajax({
//   type: "GET",
//   url: `/api/students?selectoptions=${keyword}`,
//   data: {},
//   success: function (response) {
//     for (let i = 0; i < response.length; i++) {
//       let message = response[i];
//       let id = message["id"];
//       let userName = message["userName"];
//       let studentId = message["studentId"];
//       let phoneNumber = message["phoneNumber"];
//       let penaltiyPoints = message["penaltiypoints"];
//       addHTML(id, userName, studentId, phoneNumber, penaltiyPoints);
//     }
//   },
// });
//   }
// }

// function addHTML(id, userName, studentId, phoneNumber, penaltiyPoints) {
//   let tempHtml = `<tr>
//                     <td >#{id}</td>
//                     <td>${userName}</td>
//                     <td>${studentId}</td>
//                     <td>${phoneNumber}</td>
//                     <td >-${penaltiyPoints}</td>
//                 </tr>`;
//   $(".table-body").append(tempHtml);
// }
