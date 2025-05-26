document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre').forEach(block => {
        block.addEventListener('click', (event) => {
            const code = block.querySelector('code').textContent;

            // 将代码复制到剪贴板
            navigator.clipboard.writeText(code).then(() => {
                // 显示 "Copied" 提示
                const copiedTooltip = document.createElement('span');
                copiedTooltip.textContent = 'Copied!';
                copiedTooltip.classList.add('copied-tooltip');
                document.body.appendChild(copiedTooltip);

                // 设置提示的位置
                copiedTooltip.style.left = `${event.pageX}px`;
                copiedTooltip.style.top = `${event.pageY}px`;

                // 2秒后移除提示
                setTimeout(() => {
                    copiedTooltip.remove();
                }, 2000);
            }).catch(err => {
                console.error('复制失败:', err);
            });

            // 阻止右键菜单弹出
            event.preventDefault();
        });
    });
});