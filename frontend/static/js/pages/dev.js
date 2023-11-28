export default class {
    constructor() {
        document.title = "dev";
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
                                <img src="static/css/image/menu/menu_img_1.jpeg">
                                <div class="menu_text">
                                    <span class="title">Feign 코드 분석과 서버 성능 개선</span>
                                    <span class="content">Feign과 다중 스레드를 사용하는 과정에서 생긴 문제를 이해하고 성능 개선까지 한 경험을 공유해요.</span>
                                    <span class="date">2023.11.22</span>
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