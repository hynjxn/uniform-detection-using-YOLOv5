function scanStart(){
    console.log("hi")

  $.ajax({
                    type: "GET",
                    url: "/scan",
                    data: {},
                    success: function (response) {
                        //location.reload()
                        //setTimeout(() => console.log("after"), 1000); 새로고침 후 재시작이 적용이 안됨 => 이유 : 자바스크립트는 비 동기

                        //let newHtml = "<img id='cam' src='../static/image/inference_cam.jpg' alt=''>"
                        // $("#scan-image").html(newHtml);


                        var date = new Date();

                        $("#cam").attr("src","../static/image/inference_cam.jpg?" + date.getTime() );

                        /* resoponse example
                        response = {
                            "Tshirt" : 0.33,
                            "Pants" : 0.55
                        };
                        */

                        // 벌점 map
                        pointList = {
                            'normal_top' : 0,
                            'open_top' : -1,
                            't_shirt' : -5,
                            'normal_skirt' : 0,
                            'short_skirt' : -4,
                            'pants' : -5,
                            '[DETECT ERROR]: BOTTOM': 0,
                            '[DETECT ERROR]: TOP': 0
                        }


                        let i = 1;
                        let pointSum = 0; // 총 벌점
                        for (var key in response) {
                            console.log("key : " + key +", value : " + response[key]);

                            // 결과 테이블에 class,per,point 를 작성
                            $("#class_"+i).html(key); // class
                            $("#per_"+i).html(response[key]); // per

                            for (var point in pointList){
                                if(key == point){
                                    $("#point_"+i).html(pointList[point]); // point
                                    pointSum += pointList[point];
                                }
                            }
                            i++;
                        }
                        $("#pointSum").html(pointSum);
                    }
  })
}