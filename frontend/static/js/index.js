// dev 및 design으로 변수로 모듈을 정의하고 해당 경로에 있는 파일에서
// export된 객체들을 가져온다.
import dev from "./pages/dev.js";
import design from "./pages/design.js";

// 라우터 함수구현
const router = async () => {
    // path 경로를 설정하고 view를 반환하는데
    // console.log를 활용하여 해당페이지에 잘 출력되는지 확인하는 단계

    // 이전에는 콘솔 출력이 잘되는지 확인했다면 지금은 dev.js 와 design.js에 있는
    // 파일들을 각 경로별 뷰로 반환하게 구현한다. 
    const routes = [
        { path: "/", view: dev },
        { path: "/design", view: design },
        { path: "/dev", view: dev }
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
    // console.log(match.route.view());

    // 매치된 라우트에 뷰를 생성하고
    const page = new match.route.view();

    // 페이지에 맞는 뷰의 HTML 요소를 가져온다.
    // id가 app인 HTML을 가져와서 화면에 뿌려준다.
    document.querySelector("#app").innerHTML = await page.getHtml();
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
