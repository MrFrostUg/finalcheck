document.addEventListener('DOMContentLoaded', function() {
    const themeSwitchToggle = document.getElementById('theme-switch-toggle');

    // Check if the user has a preferred theme stored in local storage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    } else {
        // If no preferred theme, set default theme (light)
        document.body.classList.add('light-theme');
    }

    // Toggle between light and dark themes
    themeSwitchToggle.addEventListener('click', function() {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        // Save the current theme preference to local storage
        const currentTheme = document.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
        localStorage.setItem('theme', currentTheme);
    });
});
console.log('script laoded');
