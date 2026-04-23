// simple-tag-search.js

// 把你網站所有出現過的 Tag 都放在這裡
const allTags = [
    "函數","函數圖像","CCC","Desmos","Geogebra","圓","代數","定義域",
    "遞推", "組合數學", "錯排", "計數問題", "前綴和", "異或xor", "C++", "MOI", "澳門",
    "洛谷", "堆", "優先隊列priority_queue", "中位數", "STL"
    // ← 請繼續把你網站出現的所有 Tag 補齊
];

function searchTags() {
    const input = document.getElementById("searchInput").value.trim().toLowerCase();
    const resultsDiv = document.getElementById("tagResults");

    if (input === "") {
        resultsDiv.innerHTML = "";
        return;
    }

    // 過濾出包含輸入文字的 Tag
    const matchedTags = allTags.filter(tag =>
        tag.toLowerCase().includes(input)
    );

    if (matchedTags.length === 0) {
        resultsDiv.innerHTML = `<p style="color:#999;">沒有找到包含「${input}」的標籤</p>`;
        return;
    }

    // 顯示結果
    let html = `<p style="margin-bottom: 20px;">找到 ${matchedTags.length} 個相關標籤：</p>`;
    html += `<div class="article-tags">`;

    matchedTags.forEach(tag => {
        html += `
            <span class="article-tag">
                <a href="https://tsaihaojiang.github.io/tags/${encodeURIComponent(tag)}.html">#${tag}</a></span>
        `;
    });

    html += `</div>`;
    resultsDiv.innerHTML = html;
}