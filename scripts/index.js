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
            <>
        let selectedFormat = null;

        function openResumeModal() {
            document.getElementById('resumeModal').classList.add('active');
        }

        function closeResumeModal() {
            document.getElementById('resumeModal').classList.remove('active');
            resetSelection();
        }

        function selectFormat(format) {
            selectedFormat = format;
            
            // Сбрасываем предыдущий выбор
            document.querySelectorAll('.format-option').forEach(option => {
                option.classList.remove('selected');
            });
            
            // Выделяем выбранный формат
            document.querySelector(`[data-format="${format}"]`).classList.add('selected');
            
            // Активируем кнопку скачивания
            document.getElementById('downloadButton').disabled = false;
        }

        function resetSelection() {
            selectedFormat = null;
            document.querySelectorAll('.format-option').forEach(option => {
                option.classList.remove('selected');
            });
            document.getElementById('downloadButton').disabled = true;
        }



        // Закрытие модального окна при клике вне его
        document.getElementById('resumeModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeResumeModal();
            }
        });

        // Закрытие модального окна по ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeResumeModal();
            }
        });
