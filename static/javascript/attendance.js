let selectedDate = document.querySelector(".date-selected");
let today = new Date();
selectedDate.value = today.toISOString().substring(0, 10);

// $(document).ready(function () {
//   getMessages();
// });

// function getMessages() {
//   $(".table-body").empty();

//   $.ajax({
//     type: "GET",
//     url: "/api/students",
//     data: {},
//     success: function (response) {
//       for (let i = 0; i < response.length; i++) {
//         let message = response[i];
//         let id = message["id"];
//         let userName = message["userName"];
//         let studentId = message["studentId"];
//         let phoneNumber = message["phoneNumber"];
//         let penaltiyPoints = message["penaltiypoints"];
//         addHTML(id, userName, studentId, phoneNumber, penaltiyPoints);
//       }
//     },
//   });

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
