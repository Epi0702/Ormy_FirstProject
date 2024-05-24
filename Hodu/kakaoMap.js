

document.addEventListener('DOMContentLoaded', function () {
    kakao.maps.load(function () {
        var mapContainer = document.getElementById('map') // 지도를 표시할 div
        var mapOption = {
            center: new kakao.maps.LatLng(37.49456189702631, 126.87209080539368), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);

        // 지도를 클릭한 위치에 표출할 마커입니다
        var marker = new kakao.maps.Marker({
            // 지도 중심좌표에 마커를 생성합니다
            position: map.getCenter()
        });
// 지도에 마커를 표시합니다
        marker.setMap(map);
    })
})





