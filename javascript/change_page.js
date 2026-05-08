const itemsPerPage = 5;
let currentPage = 1;

function setupPagination() {
    const allLinks = document.querySelectorAll('.boxes .box');
    const totalPages = Math.ceil(allLinks.length / itemsPerPage);

    // 先把所有 box 加上 data-page 屬性
    allLinks.forEach((link, index) => {
        const page = Math.floor(index / itemsPerPage) + 1;
        link.setAttribute('data-page', page);
    });

    function showPage(page) {
        currentPage = page;

        allLinks.forEach(link => {
            const linkPage = parseInt(link.getAttribute('data-page'));
            if (linkPage === page) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        renderPaginationButtons(totalPages);
    }

    function renderPaginationButtons(totalPages) {
        let paginationHTML = `<div class="pagination">`;

        // 上一頁
        paginationHTML += `
        <button onclick="prevPage()" ${currentPage === 1 ? 'disabled' : ''}>
            ← 上一頁
        </button>`;

        // 頁碼按鈕
        for (let i = 1; i <= totalPages; i++) {
            paginationHTML += `
            <button onclick="goToPage(${i})"
                    class="${currentPage === i ? 'active' : ''}">
                ${i}
            </button>`;
        }

        // 下一頁
        paginationHTML += `
        <button onclick="nextPage()" ${currentPage === totalPages ? 'disabled' : ''}>
            下一頁 →
        </button>`;

        paginationHTML += `
        <button onclick="goToPage(${totalPages})" class="${currentPage === totalPages ? 'disabled' : ''}">
            最後一頁
        </button>`;


        paginationHTML += `</div>`;

        // 把分頁按鈕插入到 .article-links-box 最後面
        const box = document.querySelector('.article-box');
        let paginationContainer = box.querySelector('.pagination');

        if (paginationContainer) {
            paginationContainer.outerHTML = paginationHTML;
        } else {
            box.insertAdjacentHTML('beforeend', paginationHTML);
        }
    }

    // 暴露給 onclick 使用的全域函數
    window.goToPage = function(page) {
        showPage(page);
    };

    window.prevPage = function() {
        if (currentPage > 1) showPage(currentPage - 1);
    };

    window.nextPage = function() {
        const totalPages = Math.ceil(document.querySelectorAll('.boxes .box').length / itemsPerPage);
        if (currentPage < totalPages) showPage(currentPage + 1);
    };

    // 初始化顯示第一頁
    showPage(1);

}

// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded', setupPagination);
