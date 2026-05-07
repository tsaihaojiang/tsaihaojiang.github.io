
const AllTags = [
    "函數","函數圖像","CCC","Desmos","Geogebra","圓","代數","定義域",
    "遞推", "組合數學", "錯排", "計數問題", "前綴和", "異或xor", "C++", "MOI", "澳門",
    "洛谷", "堆", "優先隊列priority_queue", "中位數", "STL", "Catalan數", "棧", "數學","優化"
    // ← 請繼續把你網站出現的所有 Tag 補齊
];

const resultsDiv = document.getElementById("ListAllTag");

let html = `<p style="margin-bottom: 20px;">所有標籤：</p>`;

html += '<div class="article-tags">';

for (let tag of AllTags) {
    html += `
            <span class="article-tag">
                <a href="https://tsaihaojiang.github.io/tags/${encodeURIComponent(tag)}.html">#${tag}</a></span>
        `;
}

html += `</div>`;

resultsDiv.innerHTML = html;