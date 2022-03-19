 $(document).ready(function(){
        listing();
      });
      function listing() {
            $.ajax({
                type: "GET",
                url: "/penalty/list",
                data: {},
                success: function (response) {
                    if (response["result"] == "success") {
                        let penalties = response['penalties'];
                        for (let i = 0; i < penalties.length; i++) {
                            let id = penalties[i]['PEN_STU_ID'];
                            let name = penalties[i]['PEN_STU_NAME'];
                            let phone = penalties[i]['STU_PAR_PHONE'];
                            let penalty = penalties[i]['PENALTY'];

                            let temp_html = `<tr>
                                                <td>${i+1}</td>
                                                <td>${id}</td>
                                                <td>
                                                  <span class="student-name" onclick="showPopupB()">${name}</span>
                                                </td>
                                                <td>${phone}</td>
                                                <td>${penalty}</td>
                                            </tr>`
                            $('.table-body').append(temp_html)
                        }
                    }
                }
            })
        }