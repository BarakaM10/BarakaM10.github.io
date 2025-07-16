// Copy code functionality
function copyCode(button) {
    const codeBlock = button.closest('.code-block').querySelector('code');
    const text = codeBlock.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const originalIcon = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.style.color = '#10b981';
        
        setTimeout(() => {
            button.innerHTML = originalIcon;
            button.style.color = '';
        }, 2000);
    });
}

// Back button functionality
document.querySelector('.back').addEventListener('click', () => {
window.location.href = 'index.html';
});

const blogPosts = [
    'blog1.html',
    'blog2.html', 
    'blog3.html'
];

// Navigation function
function navigateToPost(direction) {
    const currentPage = window.location.pathname.split('/').pop();
    const currentIndex = blogPosts.indexOf(currentPage);
    
    if (direction === 'prev' && currentIndex > 0) {
        window.location.href = blogPosts[currentIndex - 1];
    } else if (direction === 'next' && currentIndex < blogPosts.length - 1) {
        window.location.href = blogPosts[currentIndex + 1];
    }
}

// Add event listeners
document.querySelector('.nav-item.prev').addEventListener('click', function() {
    if (!this.classList.contains('disabled')) {
        navigateToPost('prev');
    }
});

document.querySelector('.nav-item.next').addEventListener('click', function() {
    if (!this.classList.contains('disabled')) {
        navigateToPost('next');
    }
});