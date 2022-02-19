function DBApply(){
    let point = Number($("#pointSum").text());
    console.log(point);
    let id = "'"+$("#id_input").val()+"'";
    let message=""

    $.ajax({
    type: "POST",
    url: "/applyDB",
    data: {id_give: id, point_give: point},
    success: function (response) {
        if(response["result"] == "fail"){
            alert(response["msg"]);
        }
        if (response["result"] == "success") {
            let stu_name = response["name"];
            let applied_pt = response["pt"];
            if (applied_pt<=-30){
                message = "징계 대상입니다!"
            }
            alert(stu_name+"학생의 현재 벌점은 "+applied_pt+"점 입니다."+message);
            window.location.reload();


        }
    }
})
}