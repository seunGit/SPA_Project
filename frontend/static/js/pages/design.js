export default class {
    constructor() {
        document.title = "design";
    }
    async getHtml() {
        return `
        <div class="post_container">
            <div class="post_name">디자인</div>
            <div class="post_list_container">
                <ul class="post_list">
                    <li>
                        <a href="#">
                            <div class="post_content">
                                <img src="static/css/image/menu/menu_img_1.jpeg">
                                <div class="menu_text">
                                    <span class="title">독이 되는 레퍼런스 활용법</span>
                                    <span class="content">매혹적이지만 독이 될 수 있는 레퍼런스. 어떻게 활용하는 것이 좋을까요?</span>
                                    <span class="date">2023.11.27</span>
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