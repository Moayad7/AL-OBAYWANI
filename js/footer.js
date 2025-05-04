const footer = `
<div>
<div class="container mx-auto px-4 lg:px-16">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
          <!-- Logo Section -->
          <a href="index.html" class="flex justify-center items-center mb-6">
            <img
              src="assets/logo-white.png"
              alt="Al-Obaiwani Logo"
              class="h-[50%]"
            />
          </a>

          <!-- Services Links Section -->
          <div>
            <h3 class="text-lg font-bold mb-4">Our Services</h3>
            <ul class="space-y-2">
              <li>
                <a href="services.html#services-list" class="hover:text-[#E2CE86] transition duration-300"
                  >Earth moving</a
                >
              </li>
              <li>
                <a href="services.html#services-list" class="hover:text-[#E2CE86] transition duration-300"
                  >Road Construction</a
                >
              </li>
              <li>
                <a href="services.html#services-list" class="hover:text-[#E2CE86] transition duration-300"
                  >Drill & Blast</a
                >
              </li>
              <li>
                <a href="services.html#services-list" class="hover:text-[#E2CE86] transition duration-300"
                  >Minerals Extracting</a
                >
              </li>
              <li>
                <a href="services.html" class="hover:text-[#E2CE86] transition duration-300"
                  >Equipments Rental
                </a>
              </li>
            </ul>
          </div>

          <!-- Fast Links Section -->
          <div>
            <h3 class="text-lg font-bold mb-4">Fast Links</h3>
            <ul class="space-y-2">
              <li>
                <a href="index.html" class="hover:text-[#E2CE86] transition duration-300"
                  >Home</a
                >
              </li>
              <li>
                <a href="services.html" class="hover:text-[#E2CE86] transition duration-300"
                  >Services</a
                >
              </li>
              <li>
                <a href="about.html" class="hover:text-[#E2CE86] transition duration-300"
                  >About Us</a
                >
              </li>
              <li>
                <a href="contact.html" class="hover:text-[#E2CE86] transition duration-300"
                  >Contact</a
                >
              </li>
            </ul>
          </div>

           <!-- Social Media Section -->
           <div class="">
           <h3 class="text-lg font-bold mb-4">Follow us</h3>
        <div class="flex justify-start mt-6">
        
          <a
            href="https://facebook.com"
            target="_blank"
            class="mx-2 hover:text-[#E2CE86] transition duration-300"
          >
            <i class="bi bi-facebook"></i>
          </a>
          <a
            href="https://x.com/AlObaiwani"
            target="_blank"
            class="mx-2 hover:text-[#E2CE86] transition duration-300"
          >
            <i class="bi bi-x"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/al-obaiwani-contracting-company-acc/?viewAsMember=true"
            target="_blank"
            class="mx-2 hover:text-[#E2CE86] transition duration-300"
          >
            <i class="bi bi-linkedin"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            class="mx-2 hover:text-[#E2CE86] transition duration-300"
          >
            <i class="bi bi-instagram"></i>
          </a>
        </div>

</div>
          <!-- Newsletter Section -->
          <div>
            <h3 class="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p class="mb-4">
              Stay updated with our latest news and offers. Enter your email
              below:
            </p>
            <form action="#" method="POST" class="flex flex-col">
              <input
                type="email"
                placeholder="Your Email Address"
                class="p-2 rounded-md mb-2"
                required
              />
              <button
                type="submit"
                class="bg-[#E2CE86] text-gray-800 rounded-md py-2 hover:bg-[#C2A68A] transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

         

        </div>

        
      </div>

      <div class="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2023 Al-Obaiwani. All rights reserved.</p>
      </div>
</div>
`; 


// إضافة شريط التنقل إلى عنصر header
document.getElementById('footer').innerHTML = footer;
