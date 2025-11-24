// Переключение темы
document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
            
        // Проверяем сохраненную тему
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
            
        themeToggle.addEventListener('click', function() {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
            
        function setTheme(theme) {
            body.setAttribute('data-theme', theme);
                
            if (theme === 'dark') {
                themeToggle.textContent = '☀️';
            } else {
                themeToggle.textContent = '🌙';
            }
        }
        
        // Анимация прогресс-баров навыков
        const skillBars = document.querySelectorAll('.skill__progress-bar');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target.getAttribute('data-progress');
                    entry.target.style.width = progress + '%';
                }
            });
        }, { threshold: 0.5 });
            
        skillBars.forEach(bar => observer.observe(bar));

        // Alert при скачивании резюме
        document.getElementById('downloadResume').addEventListener('click', (e) => {
            alert('Резюме будет доступно для скачивания в ближайшее время!');
        });

        // Активный пункт навигации
        const currentPage = window.location.pathname.split('/').pop();
        const navItems = document.querySelectorAll('.nav-item');
            
        navItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            if (link.getAttribute('href') === currentPage || 
                (currentPage === '' && link.getAttribute('href') === 'index.html')) {
                item.classList.add('nav-item--active');
            } else {
                item.classList.remove('nav-item--active');
            }
        });
        });
