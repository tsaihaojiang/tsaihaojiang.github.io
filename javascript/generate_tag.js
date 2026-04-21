/**
 * 根據容器的 data-current-tag 屬性，
 * 從 articleData 抓取資料並用 += 生成 HTML
 */
function generateTagBoxes() {
    // 1. 選取容器
    let container = document.querySelector('.article-box');
    if (!container) return; // 安全檢查

    let boxWrapper = container.querySelector('.boxes');
    let targetTag = boxWrapper.getAttribute('data-current-tag');

    // 2. 初始化 HTML 字串
    let htmlContent = "";

    // 3. 使用迴圈搭配 += 累加符合條件的內容
    articleData.forEach(item => {
        // 檢查文章的標籤是否匹配（支援單一字串或陣列）
        const isMatch = Array.isArray(item.tags)
            ? item.tags.includes(targetTag)
            : item.tags === targetTag;

        if (isMatch) {
            htmlContent += `
                <div class="box">
                    <a href="${item.link}" style="color: black; !important;">
                        ${item.title} --- ${item.date}
                    </a>
                    <div class="article-tags">`;

            for (let i = 0; i < item.tags.length - 1; i++) {
                let abc = item.tags[i];
                htmlContent += `
                    <span class="article_tag">
                        <a href="https://tsaihaojiang.github.io/tags/${abc}.html">
                            #${abc}
                        </a>
                    </span>`;
            }
            htmlContent += `
                        </div>
                </div>`;
        }
    });

    // 4. 如果沒有符合的文章，給予提示
    if (htmlContent === "") {
        htmlContent = `<p>目前沒有標籤為 "${targetTag}" 的文章。</p>`;
    }

    // 5. 最後一次性寫入 DOM（效能較好）
    boxWrapper.innerHTML = htmlContent;
}

// 頁面載入後執行
document.addEventListener('DOMContentLoaded', generateTagBoxes);