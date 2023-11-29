export default class {
    constructor() {
        document.title = "토스 기술 블로그, 토스테크";
    }
    async getHtml() {
        return `
        <div class="post_container">
            <div class="post_list_container">
            <div class="post_name">디자인</div>
                <ul class="post_list">
                    <li>
                        <a href="#">
                            <div class="post_content">
                                <img src="static/css/image/menu/design_img/design_menu_img_1.png">
                                <div class="menu_text">
                                    <span class="title">독이 되는 레퍼런스 활용법</span>
                                    <span class="content">매혹적이지만 독이 될 수 있는 레퍼런스. 어떻게 활용하는 것이 좋을까요?</span>
                                    <span class="date">2023. 11. 27</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="post_content">
                                <img src="static/css/image/menu/design_img/design_menu_img_2.png">
                                <div class="menu_text">
                                    <span class="title">효율적인 유저 리서치 환경을 만드는 리서치 플랫폼 팀, 들어보셨나요?</span>
                                    <span class="content">토스팀에서 팀원들이 사용자를 더 쉽고, 빠르고, 편하게 만날 수 있도록 고군분투하고 있는 ‘리서치 플랫폼 팀’에 대해 소개해 보려고 해요. </span>
                                    <span class="date">2023. 11. 23</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="post_content">
                                <img src="static/css/image/menu/design_img/design_menu_img_3.png">
                                <div class="menu_text">
                                    <span class="title">완성 없는 이야기, 가입 과정 개선</span>
                                    <span class="content">가입 완료율을 높이기 위해 고민하고 시도했던 것들을 이야기 해요.</span>
                                    <span class="date">2023. 9. 12</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="post_content">
                                <img src="static/css/image/menu/design_img/design_menu_img_4.png">
                                <div class="menu_text">
                                    <span class="title">인터랙션, 꼭 넣어야 해요?</span>
                                    <span class="content">빠른 속도를 중요시하는 토스에서 어떻게 팀원들을 인터랙션에 공감하게 하고 슬릭한 제품을 만들어나갈 수 있었는지 소개할게요.</span>
                                    <span class="date">2023. 9. 7</span>
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