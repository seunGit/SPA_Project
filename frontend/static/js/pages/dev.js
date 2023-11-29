export default class {
    constructor() {
        document.title = "토스 기술 블로그, 토스테크";
    }
    async getHtml() {
        return `
        <div class="post_container">
            <div class="post_name">개발</div>
            <div class="post_list_container">
                <ul class="post_list">
                    <li>
                        <a href="#">
                            <div class="post_content">
                                <img src="static/css/image/menu/dev_img/dev_menu_img_2.jpeg">
                                <div class="menu_text">
                                    <span class="title">인자가 많은 메서드는 왜 나쁠까?</span>
                                    <span class="content">인자가 많은 메서드를 함께 리팩토링 하면서 코드 사용자 입장에서 코드 복잡성을 관리하는 방법을 알아봅니다.</span>
                                    <span class="date">2023. 11. 29</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="post_content">
                                <img src="static/css/image/menu/dev_img/dev_menu_img_1.jpeg">
                                <div class="menu_text">
                                    <span class="title">Feign 코드 분석과 서버 성능 개선</span>
                                    <span class="content">Feign과 다중 스레드를 사용하는 과정에서 생긴 문제를 이해하고 성능 개선까지 한 경험을 공유해요.</span>
                                    <span class="date">2023. 11. 22</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="post_content">
                                <img src="static/css/image/menu/dev_img/dev_menu_img_3.png">
                                <div class="menu_text">
                                    <span class="title">null 리턴은 왜 나쁠까?</span>
                                    <span class="content">코드 복잡성 관리 측면에서 의미를 축약한 표현의 문제와 해결 방법을 예제로 알아봐요.</span>
                                    <span class="date">2023. 11. 8</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="post_content">
                                <img src="static/css/image/menu/dev_img/dev_menu_img_4.jpeg">
                                <div class="menu_text">
                                    <span class="title">웹에서 복잡한 퍼널 쉽게 관리하기</span>
                                    <span class="content">토스페이먼츠 프론트엔드 챕터에서 웹에서 퍼널을 손쉽게 관리하기 위해 했던 고민과 해결 방법을 공유해요.</span>
                                    <span class="date">2023. 10. 18</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        `;
    }
}