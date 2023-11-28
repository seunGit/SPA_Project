// 라우터 함수구현
const router = async () => {
    // path 경로를 설정하고 view를 반환하는데
    // console.log를 활용하여 해당페이지에 잘 출력되는지 확인하는 단계 
    const routes = [
        { path: "/", view: () => console.log("메인 페이지") },
        { path: "/design", view: () => console.log("디자인 페이지") },
        { path: "/dev", view: () => console.log("개발 페이지") }
    ];

    // 현재 URL과 라우트들을 맵핑하여 일치하는 라우트를 찾는다.
    const potentialMatches = routes.map((route) => {
        return {
            route: route,
            isMatch: route.path === location.pathname
        };
    });

    // 매칭되는 라우트 찾기
    let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

    // 뷰를 실행해서 보여준다.
    console.log(match.route.view());
}

// 브라우저 히스토리 변화감지
// 뒤로가기 또는 앞으로가기를 통해서도 출력이 되게끔 할수있다.
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {   // DOM이 로드되면 라우터를 실행하고 클릭이벤트 핸들링이 동작하도록 한다.
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {  // 타겟이 data-link 속성인지 확인한다.
            e.preventDefault(); // 기본 링크 이벤트를 중지시킨다.
            history.pushState(null, null, e.target.href); // 타겟의 URL로 변경한다.
            router(); // 라우터를 실행하여 새 페이지를 표시한다.
        }
    });
    router(); // 초기 페이지 로드 시 라우터를 실행한다.
});
