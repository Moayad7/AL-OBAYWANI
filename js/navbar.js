const navbar = `
<nav class="mt-5 lg:mt-10 p-4 bg-gray-800 rounded-3xl shadow-lg flex justify-between items-center text-white">
    <a href="index.html" class="flex items-center">
        <img src="assets/logo-white.png" alt="Al-Obaiwani Logo" class="h-10" />
    </a>
    <div class="hidden md:flex space-x-6">
        <a href="index.html" class="hover:text-[#E2CE86] transition duration-300">Home</a>
        
        <div class="relative relative_dropdown group">
            <a href="#" class="hover:text-[#E2CE86] transition duration-300">About Us</a>
            <div class="z-[99] w-40  absolute left-0 hidden group-hover:block bg-gray-800 rounded-lg shadow-lg mt-2">
                <a href="#" class="block px-4 py-2 hover:bg-[#E2CE86] transition duration-300">Overview</a>
                <a href="#" class="block px-4 py-2 hover:bg-[#E2CE86] transition duration-300">Our Strategy</a>
                <a href="#" class="block px-4 py-2 hover:bg-[#E2CE86] transition duration-300">Safety Policy</a>
                <a href="#" class="block px-4 py-2 hover:bg-[#E2CE86] transition duration-300">Environment Policy</a>
                <a href="#" class="block px-4 py-2 hover:bg-[#E2CE86] transition duration-300">Quality Policy</a>
            </div>
        </div>

        

        <a href="projects.html" class="hover:text-[#E2CE86] transition duration-300">Projects</a>
        
        <div class="relative relative_dropdown group">
            <a href="services.html" class="hover:text-[#E2CE86] transition duration-300">Services</a>
            <div class="z-[99] w-40 absolute left-0 hidden group-hover:block bg-gray-800 rounded-lg shadow-lg mt-2">
                <a href="#" class="block px-4 py-2 hover:bg-[#E2CE86] transition duration-300">Earth Moving & Roads Construction</a>
                <a href="#" class="block px-4 py-2 hover:bg-[#E2CE86] transition duration-300">Mining</a>
                <a href="#" class="block px-4 py-2 hover:bg-[#E2CE86] transition duration-300">Equipment Rental</a>
            </div>
        </div>

        <a href="clients.html" class="hover:text-[#E2CE86] transition duration-300">Clients</a>

        <div class="relative relative_dropdown group">
            <a href="#" class="hover:text-[#E2CE86] transition duration-300">Media Center</a>
            <div class="z-[99] w-40  absolute left-0 hidden group-hover:block bg-gray-800 rounded-lg shadow-lg mt-2">
                <a href="#" class="block px-4 py-2 hover:bg-[#E2CE86] transition duration-300">News & Events (Coming Soon)</a>
                <a href="#" class="block px-4 py-2 hover:bg-[#E2CE86] transition duration-300">Company Profile (Coming Soon)</a>
            </div>
        </div>

        <a href="career.html" class="hover:text-[#E2CE86] transition duration-300">Career</a>
        <a href="contact.html" class="hover:text-[#E2CE86] transition duration-300">Contact Us</a>
    </div>
    <div class="hidden md:flex">
        <a href="mailto:info@al-obaywani.com" class="px-4 py-2 bg-[#E2CE86] rounded-xl hover:bg-[#C2A68A] transition duration-300 text-gray-800">GET IN TOUCH</a>
    </div>
    <div class="md:hidden" id="menu-button" onclick="toggleMenu()">
        <span class="text-2xl">☰</span>
    </div>
</nav>
<div id="mobile-menu" class="-translate-y-400 absolute top-30 left-1/2 transform -translate-x-1/2 w-[95%] bg-[#E2CE86] shadow-lg rounded-3xl transition duration-300 bold z-9">
    <div class="flex flex-col items-center p-4">
        <a href="index.html" class="py-2 hover:text-[#E2CE86] transition duration-300">Home</a>
        <a href="about.html" class="py-2 hover:text-[#E2CE86] transition duration-300">About Us</a>
        <a href="services.html" class="py-2 hover:text-[#E2CE86] transition duration-300">Services</a>
        <a href="projects.html" class="py-2 hover:text-[#E2CE86] transition duration-300">Projects</a>
        <a href="clients.html" class="py-2 hover:text-[#E2CE86] transition duration-300">Clients</a>
        <a href="career.html" class="py-2 hover:text-[#E2CE86] transition duration-300">Career</a>
        <a href="contact.html" class="py-2 hover:text-[#E2CE86] transition duration-300">Contact Us</a>
        <a href="mailto:info@al-obaywani.com" class="py-2 px-4 bg-gray-800 rounded-xl hover:bg-gray-950 text-white transition duration-300">GET IN TOUCH</a>
    </div>
</div>
`; 


// إضافة شريط التنقل إلى عنصر header
document.getElementById('header').innerHTML = navbar;

let timeout;

// دالة لتبديل القائمة في الجوال
function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('-translate-y-400'); // تغيير حالة القائمة
}

// دالة لإظهار القوائم المنسدلة
function showDropdown(dropdown) {
    clearTimeout(timeout);
    dropdown.classList.remove('hidden');
}

// دالة لإخفاء القوائم المنسدلة
function hideDropdown(dropdown) {
    timeout = setTimeout(() => {
        dropdown.classList.add('hidden');
    }, 100); // تأخير 300 مللي ثانية
}

// إضافة أحداث الفأرة للقوائم المنسدلة
document.querySelectorAll('.relative_dropdown').forEach(item => {
    const dropdown = item.querySelector('div');

    item.addEventListener('mouseenter', () => {
        showDropdown(dropdown);
    });

    item.addEventListener('mouseleave', () => {
        hideDropdown(dropdown);
    });

    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(timeout); // إلغاء التأخير عند دخول المؤشر
    });

    dropdown.addEventListener('mouseleave', () => {
        hideDropdown(dropdown);
    });
});